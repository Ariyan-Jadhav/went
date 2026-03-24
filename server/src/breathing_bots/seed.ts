import "dotenv/config";
import prisma from "../../lib/prisma.js";
import bots from "./breathingBotsDemo.json" with { type: "json" };

const CLIENT_ID = "ec687a946e3543f0bee1f3f184f3cea6";
const CLIENT_SECRET = "14f8c78ddabc4363b41793b61bf81f35";
const MOVIE_API_KEY = process.env.MOVIE_API_KEY!;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function getSpotifyToken(): Promise<string> {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  });
  const data = await response.json();
  if (!data.access_token) throw new Error("Failed to get Spotify token!");
  return data.access_token;
}

async function getArtistImage(
  name: string,
  token: string,
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(name)}&type=artist&limit=1`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (res.status === 429) {
      console.log(`Rate limited on artist "${name}"! Waiting 5s...`);
      await delay(5000);
      return getArtistImage(name, token);
    }
    const data = await res.json();
    return data.artists?.items[0]?.images[0]?.url ?? null;
  } catch (e) {
    console.log(`Failed artist image for "${name}", skipping...`);
    return null;
  }
}

async function getAlbumImage(
  name: string,
  token: string,
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(name)}&type=album&limit=1`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (res.status === 429) {
      console.log(`Rate limited on album "${name}"! Waiting 5s...`);
      await delay(5000);
      return getAlbumImage(name, token);
    }
    const data = await res.json();
    return data.albums?.items[0]?.images[0]?.url ?? null;
  } catch (e) {
    console.log(`Failed album image for "${name}", skipping...`);
    return null;
  }
}

async function getTrackImage(
  name: string,
  token: string,
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(name)}&type=track&limit=1`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (res.status === 429) {
      console.log(`Rate limited on track "${name}"! Waiting 5s...`);
      await delay(5000);
      return getTrackImage(name, token);
    }
    const data = await res.json();
    return data.tracks?.items[0]?.album?.images[0]?.url ?? null;
  } catch (e) {
    console.log(`Failed track image for "${name}", skipping...`);
    return null;
  }
}

async function getMovie(
  name: string,
): Promise<{ poster: string | null; year: string | null }> {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&t=${encodeURIComponent(name)}`,
    );
    const data = await res.json();
    if (data.Response === "False") return { poster: null, year: null };
    return {
      poster: data.Poster !== "N/A" ? data.Poster : null,
      year: data.Year ?? null,
    };
  } catch (e) {
    console.log(`Failed movie data for "${name}", skipping...`);
    return { poster: null, year: null };
  }
}

async function seedBots() {
  const START = parseInt(process.argv[2] || "0");
  const END = parseInt(process.argv[3] || "100");
  const TEST_BOTS = bots.slice(START, END);
  console.log(
    `Seeding bots ${START + 1} to ${END} (${TEST_BOTS.length} bots)...`,
  );

  const spotifyToken = await getSpotifyToken();
  console.log("Spotify token ready!");

  const formattedUsers = TEST_BOTS.map((bot) => {
    console.log(`User: ${bot.id} → ${bot.username}`);
    return {
      id: bot.id,
      firstName: bot.username || "",
      lastName: "",
      username: bot.username || "",
      email: `${bot.username}@breathingbots.com`,
      profilePicUrl: null,
      isBot: true,
    };
  });

  const users = await prisma.user.createMany({
    data: formattedUsers,
    skipDuplicates: true,
  });
  console.log(`Users seeded: ${users.count}`);

  const existingUsers = await prisma.user.findMany({
    where: { id: { in: TEST_BOTS.map((b) => b.id) } },
    select: { id: true },
  });
  const existingUserIds = new Set(existingUsers.map((u) => u.id));
  const validBots = TEST_BOTS.filter((bot) => existingUserIds.has(bot.id));
  console.log(`Valid bots to process: ${validBots.length}`);

  const formattedProfiles = validBots.map((bot) => {
    const profile: any = {
      user_id: bot.id,
      bio: bot.bio || null,
      profession: bot.profession || null,
      location: bot.location || null,
      hobby: bot.personality?.interests || [],
      birthday: bot.birthday ? new Date(bot.birthday) : null,
    };
    if (bot.gender) profile.gender = bot.gender;
    return profile;
  });

  const profiles = await prisma.profile.createMany({
    data: formattedProfiles,
    skipDuplicates: true,
  });
  console.log(`Profiles seeded: ${profiles.count}`);

  const allProfiles = await prisma.profile.findMany({
    where: { user_id: { in: validBots.map((b) => b.id) } },
    select: { id: true, user_id: true },
  });
  const profileMap = new Map(allProfiles.map((p) => [p.user_id, p.id]));

  console.log("Fetching track images...");
  const formattedTracks = [];
  for (const bot of validBots.filter(
    (b) => b.favorites?.music?.favorite_track,
  )) {
    console.log(`Track: ${bot.favorites.music.favorite_track}`);
    const image = await getTrackImage(
      bot.favorites.music.favorite_track,
      spotifyToken,
    );
    formattedTracks.push({
      profile_id: profileMap.get(bot.id)!,
      name: bot.favorites.music.favorite_track,
      artist: bot.favorites.music.favorite_artist || "Unknown",
      image,
    });
    await delay(500);
  }
  const tracks = await prisma.profileTrack.createMany({
    data: formattedTracks,
    skipDuplicates: true,
  });
  console.log(`Tracks seeded: ${tracks.count}`);

  console.log("Fetching album images...");
  const formattedAlbums = [];
  for (const bot of validBots.filter(
    (b) => b.favorites?.music?.favorite_album,
  )) {
    console.log(`Album: ${bot.favorites.music.favorite_album}`);
    const image = await getAlbumImage(
      bot.favorites.music.favorite_album,
      spotifyToken,
    );
    formattedAlbums.push({
      profile_id: profileMap.get(bot.id)!,
      name: bot.favorites.music.favorite_album,
      image,
    });
    await delay(500);
  }
  const albums = await prisma.profileAlbum.createMany({
    data: formattedAlbums,
    skipDuplicates: true,
  });
  console.log(`Albums seeded: ${albums.count}`);

  console.log("Fetching artist images...");
  const formattedArtists = [];
  for (const bot of validBots.filter(
    (b) => b.favorites?.music?.favorite_artist,
  )) {
    console.log(`Artist: ${bot.favorites.music.favorite_artist}`);
    const image = await getArtistImage(
      bot.favorites.music.favorite_artist,
      spotifyToken,
    );
    formattedArtists.push({
      profile_id: profileMap.get(bot.id)!,
      name: bot.favorites.music.favorite_artist,
      image,
    });
    await delay(500);
  }
  const artists = await prisma.profileArtist.createMany({
    data: formattedArtists,
    skipDuplicates: true,
  });
  console.log(`Artists seeded: ${artists.count}`);

  console.log("Fetching movie data...");
  const formattedMovies = [];
  for (const bot of validBots.filter((b) => b.favorites?.movie)) {
    console.log(`Movie: ${bot.favorites.movie}`);
    const movieData = await getMovie(bot.favorites.movie);
    formattedMovies.push({
      profile_id: profileMap.get(bot.id)!,
      title: bot.favorites.movie,
      poster: movieData.poster,
      year: movieData.year ?? "",
      type: "movie",
    });
    await delay(500);
  }
  const movies = await prisma.profileMovie.createMany({
    data: formattedMovies,
    skipDuplicates: true,
  });
  console.log(`Movies seeded: ${movies.count}`);

  console.log(`
    Seeding complete!
    Users:    ${users.count}
    Profiles: ${profiles.count}
    Tracks:   ${tracks.count}
    Albums:   ${albums.count}
    Artists:  ${artists.count}
    Movies:   ${movies.count}
  `);
}

seedBots()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
