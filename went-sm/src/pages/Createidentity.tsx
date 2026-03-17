import { useEffect, useState } from "react";
import { useSearch } from "../components/di_global_context/SearchContextMusic";

// ✅ Move these to your .env file
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const OMDB_API_KEY = "d635244f"; // ✅ move "d635244f" here too!

// ── Interfaces ────────────────────────────────────────────────────────────────

interface SpotifyImage {
  url: string;
}

interface Artist {
  id: string;
  name: string;
  images: SpotifyImage[];
}

interface Album {
  id: string;
  name: string;
  images: SpotifyImage[];
  artists: { name: string }[];
}

interface Track {
  id: string;
  name: string;
  duration_ms: number;
  preview_url: string | null;
  artists: { name: string }[];
  album: {
    name: string;
    images: SpotifyImage[];
  };
}

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string; // can be "N/A" if no poster exists
}

interface SelectedArtist {
  name: string;
  image: string;
}

interface SelectedAlbum {
  name: string;
  image: string;
  artist: string;
}

interface SelectedTrack {
  name: string;
  artist: string;
  albumName: string;
  image: string;
  duration: string;
  preview_url: string | null;
}

interface SelectedMovie {
  title: string;
  year: string;
  type: string;
  poster: string;
  imdbID: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

// Converts ms to m:ss — because nobody wants to read "214000"
function formatDuration(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Capitalize first letter of type (movie → Movie)
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Createidentity() {
  const { musicSearchInput, openSearch, setOpenSearch } = useSearch();

  // ── Spotify state ──
  const [accessToken, setAccessToken] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);

  // ── Movie state ──
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviePage, setMoviePage] = useState(1); // current page (1-based — OMDB uses 1-based pages)
  const [totalMovies, setTotalMovies] = useState(0); // total results from OMDB
  const MOVIES_PER_PAGE = 10; // OMDB always returns 10 per page — fixed by their API

  // ── Panel visibility ──
  const [selectArtistPanel, setSelectArtistPanel] = useState(false);
  const [selectAlbumPanel, setSelectAlbumPanel] = useState(false);
  const [selectTrackPanel, setSelectTrackPanel] = useState(false);
  const [selectMoviePanel, setSelectMoviePanel] = useState(false);

  // ── Shared loading/error ──
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ── Selected items ──
  const [selectArtist, setSelectArtist] = useState<SelectedArtist | null>(null);
  const [selectAlbum, setSelectAlbum] = useState<SelectedAlbum | null>(null);
  const [selectTrack, setSelectTrack] = useState<SelectedTrack | null>(null);
  const [selectMovie, setSelectMovie] = useState<SelectedMovie | null>(null);

  // ── Spotify token fetch (once on mount) ──────────────────────────────────────
  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    })
      .then((res) => res.json())
      .then((data) => setAccessToken(data.access_token))
      .catch(() => setError("Failed to authenticate with Spotify."));
  }, []);

  // ── Artist search ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!selectArtistPanel || !accessToken || !musicSearchInput) return;

    async function findArtist() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/search?q=${musicSearchInput}&type=artist&limit=10`,
          {
            method: "GET",
            headers: { Authorization: "Bearer " + accessToken },
          },
        );
        const data = await res.json();
        setArtists(data.artists?.items ?? []);
      } catch {
        setError("Failed to fetch artists.");
      } finally {
        setIsLoading(false);
      }
    }

    findArtist();
  }, [musicSearchInput, accessToken, selectArtistPanel]);

  // ── Album search ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!selectAlbumPanel || !accessToken || !musicSearchInput) return;

    async function findAlbum() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/search?q=${musicSearchInput}&type=album&limit=10`,
          {
            method: "GET",
            headers: { Authorization: "Bearer " + accessToken },
          },
        );
        const data = await res.json();
        setAlbums(data.albums?.items ?? []);
      } catch {
        setError("Failed to fetch albums.");
      } finally {
        setIsLoading(false);
      }
    }

    findAlbum();
  }, [musicSearchInput, accessToken, selectAlbumPanel]);

  // ── Track search ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!selectTrackPanel || !accessToken || !musicSearchInput) return;

    async function findTrack() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/search?q=${musicSearchInput}&type=track&limit=10`,
          {
            method: "GET",
            headers: { Authorization: "Bearer " + accessToken },
          },
        );
        const data = await res.json();
        setTracks(data.tracks?.items ?? []);
      } catch {
        setError("Failed to fetch tracks.");
      } finally {
        setIsLoading(false);
      }
    }

    findTrack();
  }, [musicSearchInput, accessToken, selectTrackPanel]);

  // ── Movie search (with pagination) ───────────────────────────────────────────
  // Re-runs when: search input changes OR page number changes
  useEffect(() => {
    if (!selectMoviePanel || !musicSearchInput) return;

    async function findMovie() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          // OMDB pagination: &page= is 1-based, returns exactly 10 results per page
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(musicSearchInput)}&page=${moviePage}`,
        );
        const data = await res.json();

        if (data.Response === "False") {
          // OMDB returns { Response: "False", Error: "..." } when nothing is found
          setMovies([]);
          setTotalMovies(0);
          setError(data.Error ?? "No movies found.");
        } else {
          setMovies(data.Search ?? []);
          setTotalMovies(parseInt(data.totalResults ?? "0", 10));
        }
      } catch {
        setError("Failed to fetch movies.");
      } finally {
        setIsLoading(false);
      }
    }

    findMovie();
  }, [musicSearchInput, selectMoviePanel, moviePage]); // ✅ moviePage in deps — page change triggers new fetch

  // Reset to page 1 whenever search input changes (don't stay on page 5 of old results 👻)
  useEffect(() => {
    setMoviePage(1);
  }, [musicSearchInput]);

  // ── Panel helpers ─────────────────────────────────────────────────────────────
  function closeAllPanels() {
    setOpenSearch(false);
    setSelectArtistPanel(false);
    setSelectAlbumPanel(false);
    setSelectTrackPanel(false);
    setSelectMoviePanel(false);
  }

  // ✅ Single function to open any panel — closes all others automatically
  function openPanel(panel: "artist" | "album" | "track" | "movie") {
    setOpenSearch(true);
    setSelectArtistPanel(panel === "artist");
    setSelectAlbumPanel(panel === "album");
    setSelectTrackPanel(panel === "track");
    setSelectMoviePanel(panel === "movie");
  }

  const totalMoviePages = Math.ceil(totalMovies / MOVIES_PER_PAGE);

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <div>
      {/* ── Artist Modal ── */}
      {openSearch && selectArtistPanel && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels}
        >
          <div
            className="mt-40 flex gap-6 justify-center flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-400">{error}</p>}
            {!isLoading &&
              artists.map((artist) => (
                <div
                  key={artist.id}
                  onClick={() =>
                    setSelectArtist({
                      name: artist.name,
                      image: artist.images?.[0]?.url,
                    })
                  }
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <img
                    src={artist.images?.[0]?.url}
                    alt={artist.name}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                  <p className="text-white">{artist.name}</p>
                </div>
              ))}
          </div>
        </div>
      )}

      <button
        onClick={() => openPanel("artist")}
        className="text-black bg-amber-400 h-6 px-2"
      >
        artist
      </button>
      {selectArtist && (
        <div className="flex flex-col items-center gap-2 mt-4">
          <img
            src={selectArtist.image}
            alt={selectArtist.name}
            className="w-40 h-40 rounded-full object-cover"
          />
          <p>{selectArtist.name}</p>
        </div>
      )}

      {/* ── Album Modal ── */}
      {openSearch && selectAlbumPanel && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels}
        >
          <div
            className="mt-40 flex gap-6 justify-center flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-400">{error}</p>}
            {!isLoading &&
              albums.map((album) => (
                <div
                  key={album.id}
                  onClick={() =>
                    setSelectAlbum({
                      name: album.name,
                      image: album.images?.[0]?.url,
                      artist: album.artists?.[0]?.name,
                    })
                  }
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <img
                    src={album.images?.[0]?.url}
                    alt={album.name}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                  <p className="text-white">{album.name}</p>
                  <p className="text-gray-300 text-sm">
                    {album.artists?.[0]?.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}

      <button
        onClick={() => openPanel("album")}
        className="text-black bg-amber-400 h-6 px-2"
      >
        album
      </button>
      {selectAlbum && (
        <div className="flex flex-col items-center gap-2 mt-4">
          <img
            src={selectAlbum.image}
            alt={selectAlbum.name}
            className="w-40 h-40 rounded-full object-cover"
          />
          <p>{selectAlbum.name}</p>
          <p className="text-sm text-gray-500">{selectAlbum.artist}</p>
        </div>
      )}

      {/* ── Track Modal ── */}
      {openSearch && selectTrackPanel && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels}
        >
          <div
            className="mt-40 flex flex-col gap-3 w-[600px] max-h-[60vh] overflow-y-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-400">{error}</p>}
            {!isLoading &&
              tracks.map((track) => (
                <div
                  key={track.id}
                  onClick={() =>
                    setSelectTrack({
                      name: track.name,
                      artist: track.artists.map((a) => a.name).join(", "),
                      albumName: track.album.name,
                      image: track.album.images?.[0]?.url,
                      duration: formatDuration(track.duration_ms),
                      preview_url: track.preview_url,
                    })
                  }
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition rounded-xl px-4 py-3 cursor-pointer"
                >
                  <img
                    src={track.album.images?.[0]?.url}
                    alt={track.name}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="text-white font-medium truncate">
                      {track.name}
                    </p>
                    <p className="text-gray-300 text-sm truncate">
                      {track.artists.map((a) => a.name).join(", ")}
                    </p>
                    <p className="text-gray-400 text-xs truncate">
                      {track.album.name}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm shrink-0">
                    {formatDuration(track.duration_ms)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}

      <button
        onClick={() => openPanel("track")}
        className="text-black bg-amber-400 h-6 px-2"
      >
        track
      </button>
      {selectTrack && (
        <div className="flex flex-col items-center gap-2 mt-4">
          <img
            src={selectTrack.image}
            alt={selectTrack.name}
            className="w-40 h-40 rounded-lg object-cover"
          />
          <p className="font-semibold">{selectTrack.name}</p>
          <p className="text-sm text-gray-500">{selectTrack.artist}</p>
          <p className="text-xs text-gray-400">{selectTrack.albumName}</p>
          <p className="text-xs text-gray-400">{selectTrack.duration}</p>
          {selectTrack.preview_url && (
            <audio
              controls
              src={selectTrack.preview_url}
              className="mt-2 w-60"
            />
          )}
        </div>
      )}

      {/* ── Movie Modal ── */}
      {openSearch && selectMoviePanel && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels}
        >
          <div
            className="mt-24 flex flex-col gap-4 w-[680px] max-h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && <p className="text-white text-center">Loading...</p>}
            {error && <p className="text-red-400 text-center">{error}</p>}

            {/* Movie poster grid */}
            {!isLoading && (
              <div className="flex gap-4 flex-wrap justify-center overflow-y-auto px-2">
                {movies.map((movie) => (
                  <div
                    key={movie.imdbID}
                    onClick={() =>
                      setSelectMovie({
                        title: movie.Title,
                        year: movie.Year,
                        type: movie.Type,
                        poster: movie.Poster,
                        imdbID: movie.imdbID,
                      })
                    }
                    className="flex flex-col items-center gap-1 cursor-pointer w-28 group"
                  >
                    {movie.Poster !== "N/A" ? (
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="w-28 h-40 object-cover rounded-lg group-hover:ring-2 group-hover:ring-amber-400 transition"
                      />
                    ) : (
                      // Fallback when OMDB has no poster — happens more than you'd hope 🙃
                      <div className="w-28 h-40 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 text-xs text-center px-2">
                        No Poster
                      </div>
                    )}
                    <p className="text-white text-xs text-center truncate w-full">
                      {movie.Title}
                    </p>
                    <p className="text-gray-400 text-xs">{movie.Year}</p>
                    <p className="text-amber-400 text-xs">
                      {capitalize(movie.Type)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* ── Pagination controls ── */}
            {!isLoading && totalMoviePages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-2 flex-wrap">
                {/* Prev button */}
                <button
                  onClick={() => setMoviePage((p) => Math.max(1, p - 1))}
                  disabled={moviePage === 1}
                  className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm disabled:opacity-30 hover:bg-white/20 transition"
                >
                  ← Prev
                </button>

                {/* Page number pills — shows a sliding window of pages around current */}
                {Array.from({ length: totalMoviePages }, (_, i) => i + 1)
                  .filter(
                    (p) =>
                      p === 1 ||
                      p === totalMoviePages ||
                      Math.abs(p - moviePage) <= 2,
                  )
                  .reduce<(number | "...")[]>((acc, p, idx, arr) => {
                    // Insert "..." gap when pages are non-consecutive
                    if (idx > 0 && p - (arr[idx - 1] as number) > 1)
                      acc.push("...");
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((item, i) =>
                    item === "..." ? (
                      <span
                        key={`ellipsis-${i}`}
                        className="text-gray-400 text-sm"
                      >
                        …
                      </span>
                    ) : (
                      <button
                        key={item}
                        onClick={() => setMoviePage(item as number)}
                        className={`w-8 h-8 rounded-full text-sm transition ${
                          moviePage === item
                            ? "bg-amber-400 text-black font-bold"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        {item}
                      </button>
                    ),
                  )}

                {/* Next button */}
                <button
                  onClick={() =>
                    setMoviePage((p) => Math.min(totalMoviePages, p + 1))
                  }
                  disabled={moviePage === totalMoviePages}
                  className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm disabled:opacity-30 hover:bg-white/20 transition"
                >
                  Next →
                </button>
              </div>
            )}

            {/* Result count footer */}
            {!isLoading && totalMovies > 0 && (
              <p className="text-gray-400 text-xs text-center">
                Page {moviePage} of {totalMoviePages} — {totalMovies} total
                results
              </p>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => openPanel("movie")}
        className="text-black bg-amber-400 h-6 px-2"
      >
        movie
      </button>
      {selectMovie && (
        <div className="flex flex-col items-center gap-2 mt-4">
          {selectMovie.poster !== "N/A" ? (
            <img
              src={selectMovie.poster}
              alt={selectMovie.title}
              className="w-32 h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-32 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              No Poster
            </div>
          )}
          <p className="font-semibold">{selectMovie.title}</p>
          <p className="text-sm text-gray-500">{selectMovie.year}</p>
          <p className="text-xs text-amber-500">
            {capitalize(selectMovie.type)}
          </p>
          <a
            href={`https://www.imdb.com/title/${selectMovie.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 underline"
          >
            View on IMDb
          </a>
        </div>
      )}
    </div>
  );
}
