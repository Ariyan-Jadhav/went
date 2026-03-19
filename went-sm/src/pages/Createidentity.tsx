import { useEffect, useState } from "react";
import { useSearch } from "../components/di_global_context/SearchContextMusic";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Zodiac from "@/components/Zodiac";
import searchEngineHobbie from "@/components/Hobbies";
import { professions } from "@/components/Profession";
import { states } from "@/components/Location";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
  ComboboxInput,
} from "@/components/ui/combobox";

import axios from "axios";
import { useUser, useAuth } from "@clerk/clerk-react";

const CLIENT_ID = "ec687a946e3543f0bee1f3f184f3cea6";
const CLIENT_SECRET = "14f8c78ddabc4363b41793b61bf81f35";
const OMDB_API_KEY = "d635244f";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

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
  artists: { name: string }[];
  album: {
    images: SpotifyImage[];
  };
}

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
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
  image: string;
}

interface SelectedMovie {
  title: string;
  year: string;
  type: string;
  poster: string;
  imdbID: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

// Capitalize first letter of type (movie → Movie)
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ── Component ─────────────────────────────────────────────────────────────────

// ── MovieCard — handles broken image URLs with onError fallback ───────────────
function MovieCard({ movie, onClick }: { movie: Movie; onClick: () => void }) {
  const [imgFailed, setImgFailed] = useState(false);
  const hasposter = movie.Poster !== "N/A" && !imgFailed;

  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-1 cursor-pointer w-28 group"
    >
      {hasposter ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          onError={() => setImgFailed(true)}
          className="w-28 h-40 object-cover rounded-lg group-hover:ring-2 group-hover:ring-amber-400 transition"
        />
      ) : (
        <div className="w-28 h-40 bg-white/10 rounded-lg group-hover:ring-2 group-hover:ring-amber-400 transition flex flex-col items-center justify-center gap-2 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875M6 18.375V6.75M6 6.75A2.25 2.25 0 018.25 4.5h7.5A2.25 2.25 0 0118 6.75M6 6.75h12M18 6.75v11.625M18 18.375c0 .621.504 1.125 1.125 1.125h1.5m0-13.5v13.5M4.5 7.5h1.5m-1.5 3h1.5m-1.5 3h1.5m13.5-6h-1.5m1.5 3h-1.5m1.5 3h-1.5"
            />
          </svg>
          <p className="text-gray-400 text-xs text-center line-clamp-3 leading-tight">
            {movie.Title}
          </p>
        </div>
      )}
      <p className="text-white text-xs text-center truncate w-full">
        {movie.Title}
      </p>
      <p className="text-gray-400 text-xs">{movie.Year}</p>
      <p className="text-amber-400 text-xs">{capitalize(movie.Type)}</p>
    </div>
  );
}

export default function Createidentity() {
  const { musicSearchInput, openSearch, setOpenSearch } = useSearch();

  // ── Bio state ──
  const [bio, setBio] = useState<string>("");

  // ── Hobbies state ──
  const [selectCategory, setSelectCategory] = useState<
    | "general"
    | "sports_and_outdoors"
    | "education"
    | "collection"
    | "competition"
    | "observation"
  >("general");
  const anchor = useComboboxAnchor();
  const [query, setQuery] = useState("");
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  // ── Profession state ──
  const [selectedProfession, setSelectedProfession] =
    useState<string>("Berozgar");

  // ── location state ──
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  // ── pronounce state ──
  const [gender, setGender] = useState<"male" | "female" | "">("");

  // ── Bday state ──
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const zodiac = date ? Zodiac(date) : "";

  // ── Spotify state ──
  const [accessToken, setAccessToken] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);

  // ── Movie state ──
  const [movies, setMovies] = useState<Movie[]>([]);

  // ── Panel visibility ──
  const [selectArtistPanel, setSelectArtistPanel] = useState(false);
  const [selectAlbumPanel, setSelectAlbumPanel] = useState(false);
  const [selectTrackPanel, setSelectTrackPanel] = useState(false);
  const [selectMoviePanel, setSelectMoviePanel] = useState(false);

  // ── Shared loading/error ──
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // ── Selected items ──
  const [selectArtist, setSelectArtist] = useState<SelectedArtist | null>(null);
  const [selectAlbum, setSelectAlbum] = useState<SelectedAlbum | null>(null);
  const [selectTrack, setSelectTrack] = useState<SelectedTrack | null>(null);
  const [selectMovie, setSelectMovie] = useState<SelectedMovie | null>(null);

  // ── Submit into database ─────────────────────────────────────────────────────
  const { user } = useUser();
  const { getToken } = useAuth();

  const createIdentityArtist = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const userId = user?.id;
    if (!userId) throw new Error("the user isn't authenticated");

    try {
      setLoading(true);
      const response = await axios.put(
        "profile/me/artist",
        {
          name: selectArtist?.name,
          image: selectArtist?.image,
        },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      if (!response.data.success) {
        console.error("No data returned from server");
        setError("Something went wrong. Try again.");
        return;
      }
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Failed to post.");
    } finally {
      setLoading(false);
    }
  };
  const createIdentityAlbum = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const userId = user?.id;
    if (!userId) throw new Error("the user isn't authenticated");

    try {
      setLoading(true);
      const response = await axios.put(
        "profile/me/album",
        {
          name: selectAlbum?.name,
          image: selectAlbum?.image,
        },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      if (!response.data.success) {
        console.error("No data returned from server");
        setError("Something went wrong. Try again.");
        return;
      }
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Failed to post.");
    } finally {
      setLoading(false);
    }
  };
  const createIdentityTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const userId = user?.id;
    if (!userId) throw new Error("the user isn't authenticated");

    try {
      setLoading(true);
      const response = await axios.put(
        "profile/me/track",
        {
          name: selectTrack?.name,
          image: selectTrack?.image,
          artist: selectTrack?.artist,
        },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      if (!response.data.success) {
        console.error("No data returned from server");
        setError("Something went wrong. Try again.");
        return;
      }
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Failed to post.");
    } finally {
      setLoading(false);
    }
  };
  const createIdentityMovie = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const userId = user?.id;
    if (!userId) throw new Error("the user isn't authenticated");

    try {
      setLoading(true);
      const response = await axios.put(
        "profile/me/movie",
        {
          title: selectMovie?.title,
          year: selectMovie?.year,
          poster: selectMovie?.poster,
          type: selectMovie?.type,
        },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      if (!response.data.success) {
        console.error("No data returned from server");
        setError("Something went wrong. Try again.");
        return;
      }
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Failed to post.");
    } finally {
      setLoading(false);
    }
  };
  const createIdentity = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const userId = user?.id;
    if (!userId) throw new Error("the user isn't authenticated");

    try {
      const response = await axios.put(
        "profile/me",
        {
          bio,
          gender,
          hobby: selectedHobbies,
          birthday: date,
          profession: selectedProfession,
          location: selectedLocation,
        },
        { headers: { Authorization: `Bearer ${await getToken()}` } },
      );
      if (!response.data.success) {
        console.error("No data returned from server");
        setError("Something went wrong. Try again.");
        return;
      }
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Failed to post.");
    } finally {
      setLoading(false);
    }
  };

  // ── Hobbies ──────────────────────────────────────
  const category = [
    "general",
    "sports_and_outdoors",
    "education",
    "collection",
    "competition",
    "observation",
  ];

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

  // ── Movie search ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!selectMoviePanel || !musicSearchInput) return;

    async function findMovie() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(musicSearchInput)}`,
        );
        const data = await res.json();

        if (data.Response === "False") {
          setMovies([]);
          setError(data.Error ?? "No movies found.");
        } else {
          setMovies(data.Search ?? []);
        }
      } catch {
        setError("Failed to fetch movies.");
      } finally {
        setIsLoading(false);
      }
    }

    findMovie();
  }, [musicSearchInput, selectMoviePanel]);

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
            className="mt-40 flex flex-col gap-3 w-150 max-h-[60vh] overflow-y-auto px-4"
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
                      image: track.album.images?.[0]?.url,
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
                  </div>
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
        </div>
      )}

      {/* ── Movie Modal ── */}
      {openSearch && selectMoviePanel && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels}
        >
          <div
            className="mt-24 flex flex-col gap-4 w-170 max-h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && <p className="text-white text-center">Loading...</p>}
            {error && <p className="text-red-400 text-center">{error}</p>}

            {/* Movie poster grid */}
            {!isLoading && (
              <div className="flex gap-4 flex-wrap justify-center overflow-y-auto px-2">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onClick={() =>
                      setSelectMovie({
                        title: movie.Title,
                        year: movie.Year,
                        type: movie.Type,
                        poster: movie.Poster,
                        imdbID: movie.imdbID,
                      })
                    }
                  />
                ))}
              </div>
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
            <div className="w-32 h-48 bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.875M6 18.375V6.75M6 6.75A2.25 2.25 0 018.25 4.5h7.5A2.25 2.25 0 0118 6.75M6 6.75h12M18 6.75v11.625M18 18.375c0 .621.504 1.125 1.125 1.125h1.5m0-13.5v13.5M4.5 7.5h1.5m-1.5 3h1.5m-1.5 3h1.5m13.5-6h-1.5m1.5 3h-1.5m1.5 3h-1.5"
                />
              </svg>
              <p className="text-gray-500 text-xs text-center line-clamp-3 leading-tight">
                {selectMovie.title}
              </p>
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
      <Field className="mx-auto w-44 mt-100">
        <FieldLabel htmlFor="date">Date of birth</FieldLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="justify-start font-normal"
            >
              {date ? date.toLocaleDateString() : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              defaultMonth={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      {date && (
        <div className="mt-3 text-sm">
          <p>Selected: {date.toLocaleDateString()}</p>
          <p className="font-medium">Zodiac: {zodiac}</p>
        </div>
      )}

      <textarea
        onChange={(e) => setBio(e.target.value)}
        className="bg-taupe-500"
      ></textarea>

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value as "female" | "male" | "")}
      >
        <option value="female">female</option>
        <option value="male">male</option>
      </select>

      <div className="flex flex-col gap-4">
        {/* CATEGORY SELECT */}
        <Combobox
          items={category}
          onValueChange={(value) =>
            setSelectCategory(
              value as
                | "general"
                | "sports_and_outdoors"
                | "education"
                | "collection"
                | "competition"
                | "observation",
            )
          }
        >
          <ComboboxInput placeholder="Select category" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        {/* HOBBIES SEARCH */}
        <Combobox
          multiple
          autoHighlight
          items={searchEngineHobbie(selectCategory, query)}
          defaultValue={[]}
          value={selectedHobbies}
          onValueChange={setSelectedHobbies}
        >
          <ComboboxChips ref={anchor} className="w-full max-w-xs">
            <ComboboxValue>
              {(values) => (
                <>
                  {values.map((value: string) => (
                    <ComboboxChip key={value}>{value}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search hobbies..."
                  />
                </>
              )}
            </ComboboxValue>
          </ComboboxChips>

          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item, i) => (
                <ComboboxItem key={i} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>

      <div>
        <Combobox
          items={professions}
          onValueChange={(value) => setSelectedProfession(value as string)}
          defaultValue={"Berozgar"}
        >
          <ComboboxInput placeholder="Select category" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item, i) => (
                <ComboboxItem key={i} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>

      <div>
        <Combobox
          items={states}
          onValueChange={(value) => setSelectedLocation(value as string)}
        >
          <ComboboxInput placeholder="Select Location" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item, i) => (
                <ComboboxItem key={i} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div>
        <button onClick={createIdentity}>createIdentity</button>
        <button onClick={createIdentityAlbum}>createIdentityAlbum</button>
        <button onClick={createIdentityArtist}>createIdentityArtist</button>
        <button onClick={createIdentityMovie}>createIdentityMovie</button>
        <button onClick={createIdentityTrack}>createIdentityTrack</button>
      </div>
    </div>
  );
}
