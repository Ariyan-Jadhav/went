import { useEffect, useState } from "react";
import { useSearch } from "../components/di_global_context/SearchContextMusic";
import { MicVocal, Disc3, AudioLines, Clapperboard } from "lucide-react";
import TrueFocus from "@/components/TrueFocus";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
// import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Zodiac } from "@/components/Zodiac";
import searchEngineHobbie from "@/components/Hobbies";
import { professions } from "@/components/Profession";
import { states } from "@/components/Location";
import { useDefaultOptions } from "@/components/di_global_context/default";

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

const CLIENT_ID = import.meta.env.VITE_MUSIC_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_MUSIC_CLIENT_SECRET;
const OMDB_API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

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

function SelectedMediaCard({
  image,
  title,
  subtitle,
  badge,
  imdbID,
  onClear,
}: {
  image?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  imdbID?: string;
  onClear: () => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const hasImage = image && image !== "N/A" && !imgFailed;

  return (
    <div className="relative flex items-center gap-4 bg-zinc-900 border border-zinc-700/60 rounded-2xl p-4 group">
      <div className="shrink-0">
        {hasImage ? (
          <img
            src={image}
            alt={title}
            onError={() => setImgFailed(true)}
            className="w-14 h-14 rounded-xl object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-600">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold truncate text-sm">{title}</p>
        {subtitle && (
          <p className="text-zinc-400 text-xs mt-0.5 truncate">{subtitle}</p>
        )}
        <div className="flex items-center gap-2 mt-1.5">
          {badge && (
            <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-blue-400/15 text-amber-400 border border-amber-400/20">
              {badge}
            </span>
          )}
          {imdbID && (
            <a
              href={`https://www.imdb.com/title/${imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              IMDb ↗
            </a>
          )}
        </div>
      </div>
      <button
        onClick={onClear}
        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-500 transition-all opacity-0 group-hover:opacity-100"
      >
        <svg
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

function MediaPillButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-sm font-medium
        transition-all duration-200 cursor-pointer
        ${
          active
            ? "bg-blue-400 border-white text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-white hover:text-white"
        }
      `}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}

function SectionHeader({
  step,
  label,
  sublabel,
}: {
  step: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="shrink-0 w-9 h-9 rounded-full bg-blue-400/10 border border-blue-400/40 flex items-center justify-center">
        <span className="text-blue-400 text-xs font-mono font-bold">
          {step}
        </span>
      </div>
      <div>
        <h2 className="text-white font-semibold text-lg leading-tight tracking-wide">
          {label}
        </h2>
        {sublabel && <p className="text-zinc-500 text-xs mt-0.5">{sublabel}</p>}
      </div>
    </div>
  );
}

export default function Createidentity() {
  const { musicSearchInput, openSearch, setOpenSearch } = useSearch();

  const { setOpenTextBox } = useDefaultOptions();

  // ── Bio state ──
  const [bio, setBio] = useState<string>("");

  // ── Hobbies state ──
  const [selectCategory, setSelectCategory] = useState<
    | "General"
    | "Sports and Outdoors"
    | "Education"
    | "Collection"
    | "Competition"
    | "Observation"
  >("General");
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

  const allMediaSelected =
    !!selectArtist && !!selectAlbum && !!selectTrack && !!selectMovie;

  // ── Submit into database ─────────────────────────────────────────────────────
  const { user } = useUser();
  const { getToken } = useAuth();

  const createIdentity = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!user?.id) {
      setError("You're not authenticated.");
      return;
    }

    try {
      setLoading(true);
      const token = await getToken();
      const headers = { Authorization: `Bearer ${token}` };

      await Promise.all([
        axios.put(
          "profile/me",
          {
            bio,
            gender,
            hobby: selectedHobbies,
            birthday: date,
            profession: selectedProfession,
            location: selectedLocation,
          },
          { headers },
        ),
        axios.put(
          "profile/me/artist",
          { name: selectArtist?.name, image: selectArtist?.image },
          { headers },
        ),
        axios.put(
          "profile/me/album",
          { name: selectAlbum?.name, image: selectAlbum?.image },
          { headers },
        ),
        axios.put(
          "profile/me/track",
          {
            name: selectTrack?.name,
            image: selectTrack?.image,
            artist: selectTrack?.artist,
          },
          { headers },
        ),
        axios.put(
          "profile/me/movie",
          {
            title: selectMovie?.title,
            year: selectMovie?.year,
            poster: selectMovie?.poster,
            type: selectMovie?.type,
          },
          { headers },
        ),
      ]);

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Failed to save. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // ── Hobbies ──────────────────────────────────────
  const category = [
    "General",
    "Sports and Outdoors",
    "Education",
    "Collection",
    "Competition",
    "Observation",
  ];

  // ── zodiac Emoji ──────────────────────────────────────
  const zodiacEmoji: Record<string, string> = {
    Aries: "♈",
    Taurus: "♉",
    Gemini: "♊",
    Cancer: "♋",
    Leo: "♌",
    Virgo: "♍",
    Libra: "♎",
    Scorpio: "♏",
    Sagittarius: "♐",
    Capricorn: "♑",
    Aquarius: "♒",
    Pisces: "♓",
  };

  // ── Spotify token fetch (once on mount) ──────────────────────────────────────
  useEffect(() => {
    setOpenTextBox(true);

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

  // Single function to open any panel — closes all others automatically
  function openPanel(panel: "artist" | "album" | "track" | "movie") {
    setOpenSearch(true);
    setSelectArtistPanel(panel === "artist");
    setSelectAlbumPanel(panel === "album");
    setSelectTrackPanel(panel === "track");
    setSelectMoviePanel(panel === "movie");
  }

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen">
      {/* ── Artist Modal ── */}
      {openSearch && selectArtistPanel && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels}
        >
          <div
            className="mt-40 max-w-5xl w-full px-6 py-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex gap-8 justify-center flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <p className="text-white/80">Fetching Artists...</p>
              </div>
            )}

            {/* Error */}
            {/* {error && (
              <p className="text-red-400 bg-red-500/10 px-4 py-2 rounded-lg border border-red-400/20">
                {error}
              </p>
            )} */}

            {!isLoading &&
              artists.map((artist) => (
                <div
                  key={artist.id}
                  onClick={() => {
                    setSelectArtist({
                      name: artist.name,
                      image: artist.images?.[0]?.url,
                    });
                    closeAllPanels();
                  }}
                  className="group flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={artist.images?.[0]?.url}
                      alt={artist.name}
                      className="w-40 h-40 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>

                  {/* Text */}
                  <div className="text-center">
                    <p className="text-white font-medium text-sm truncate w-36">
                      {artist.name}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* ── Album Modal ── */}
      {openSearch && selectAlbumPanel && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={closeAllPanels}
        >
          <div
            className="mt-40 max-w-5xl w-full px-6 py-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex gap-8 justify-center flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading */}
            {isLoading && (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <p className="text-white/80">Fetching albums...</p>
              </div>
            )}

            {/* Error */}
            {/* {error && (
              <p className="text-red-400 bg-red-500/10 px-4 py-2 rounded-lg border border-red-400/20">
                {error}
              </p>
            )} */}

            {/* Albums */}
            {!isLoading &&
              albums.map((album) => (
                <div
                  key={album.id}
                  onClick={() => {
                    setSelectAlbum({
                      name: album.name,
                      image: album.images?.[0]?.url,
                      artist: album.artists?.[0]?.name,
                    });
                    closeAllPanels();
                  }}
                  className="group flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
                >
                  {/* Album Image */}
                  <div className="relative">
                    <img
                      src={album.images?.[0]?.url}
                      alt={album.name}
                      className="w-40 h-40 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>

                  {/* Text */}
                  <div className="text-center">
                    <p className="text-white font-medium text-sm truncate w-36">
                      {album.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {album.artists?.[0]?.name}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      {/* ── Track Modal ── */}
      {openSearch && selectTrackPanel && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels}
        >
          <div
            className="mt-40 max-w-5xl w-full px-6 py-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex gap-8 justify-center flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <p className="text-white/80">Fetching Tracks...</p>
              </div>
            )}

            {/* {error && (
              <p className="text-red-400 bg-red-500/10 px-4 py-2 rounded-lg border border-red-400/20">
                {error}
              </p>
            )} */}
            {!isLoading &&
              tracks.map((track) => (
                <div
                  key={track.id}
                  onClick={() => {
                    setSelectTrack({
                      name: track.name,
                      artist: track.artists.map((a) => a.name).join(", "),
                      image: track.album.images?.[0]?.url,
                    });
                    closeAllPanels();
                  }}
                  className="group flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={track.album.images?.[0]?.url}
                      alt={track.name}
                      className="w-40 h-40 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium text-sm truncate w-36">
                      {track.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {track.artists?.[0]?.name}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* ── Movie Modal ── */}
      {openSearch && selectMoviePanel && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels}
        >
          <div
            className="mt-40 max-w-5xl w-full px-6 py-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex gap-8 justify-center flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <p className="text-white/80">Fetching Movies...</p>
              </div>
            )}

            {/* Movie poster grid */}
            {!isLoading && (
              <div className="gap-9 grid-cols-5 grid px-2">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onClick={() => {
                      setSelectMovie({
                        title: movie.Title,
                        year: movie.Year,
                        type: movie.Type,
                        poster: movie.Poster,
                        imdbID: movie.imdbID,
                      });
                      closeAllPanels();
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="min-h-screen bg-zinc-950 text-white flex">
        <div className="fixed inset-0 pointer-events-none w-[50%] opacity-[0.03]" />

        <div className="relative z-10 max-w-2xl px-10 py-12 pb-24">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Create Your Identity
            </h1>
            <div className="mt-4 h-px w-16 bg-blue-400/60 rounded" />
          </div>

          {/* ── Media Tastes Section ───────────────────────────────────────────── */}
          <div className="mb-10">
            <SectionHeader
              step="01"
              label="Your Taste in Media"
              sublabel="What defines your vibe? Music, films — spill it."
            />

            {/* Media type buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <MediaPillButton
                icon={<MicVocal className="text-white h-5" />}
                label="Artist"
                active={selectArtistPanel && openSearch}
                onClick={() => openPanel("artist")}
              />
              <MediaPillButton
                icon={<Disc3 className="text-white h-5" />}
                label="Album"
                active={selectAlbumPanel && openSearch}
                onClick={() => openPanel("album")}
              />
              <MediaPillButton
                icon={<AudioLines className="text-white h-5" />}
                label="Track"
                active={selectTrackPanel && openSearch}
                onClick={() => openPanel("track")}
              />
              <MediaPillButton
                icon={<Clapperboard className="text-white h-5" />}
                label="Movie"
                active={selectMoviePanel && openSearch}
                onClick={() => openPanel("movie")}
              />
            </div>

            {/* Selected media display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectArtist && (
                <SelectedMediaCard
                  image={selectArtist.image}
                  title={selectArtist.name}
                  badge="Artist"
                  onClear={() => setSelectArtist(null)}
                />
              )}
              {selectAlbum && (
                <SelectedMediaCard
                  image={selectAlbum.image}
                  title={selectAlbum.name}
                  subtitle={selectAlbum.artist}
                  badge="Album"
                  onClear={() => setSelectAlbum(null)}
                />
              )}
              {selectTrack && (
                <SelectedMediaCard
                  image={selectTrack.image}
                  title={selectTrack.name}
                  subtitle={selectTrack.artist}
                  badge="Track"
                  onClear={() => setSelectTrack(null)}
                />
              )}
              {selectMovie && (
                <SelectedMediaCard
                  image={selectMovie.poster}
                  title={selectMovie.title}
                  subtitle={selectMovie.year}
                  badge={capitalize(selectMovie.type)}
                  imdbID={selectMovie.imdbID}
                  onClear={() => setSelectMovie(null)}
                />
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-800/80 my-10" />

          {/* ── Bio Section ──────────────────────────────────────────────────── */}
          <div className="mb-10">
            <SectionHeader
              step="02"
              label="Your Bio"
              sublabel="One paragraph. Make it count."
            />
            <div className="relative">
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="I'm someone who believes the best conversations happen at 2am with the right playlist going..."
                maxLength={300}
                rows={4}
                className="w-full bg-zinc-900 border border-zinc-700/80 rounded-2xl px-4 py-3.5 text-white placeholder-zinc-600 text-sm resize-none focus:outline-none focus:border-mauve-400 focus:ring-1 focus:ring-mauve-400 transition-all duration-200"
              />
              <span className="absolute bottom-3 right-4 text-zinc-600 text-xs">
                {bio.length}/300
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-800/80 my-10" />

          {/* ── Personal Details ──────────────────────────────────────────────── */}
          <div className="mb-10">
            <SectionHeader
              step="03"
              label="A Bit About You"
              sublabel="Just the basics. We promise not to sell it to advertisers."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
                  Pronouns
                </label>
                <div className="flex gap-2">
                  {(["male", "female"] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-150 ${
                        gender === g
                          ? g === "male"
                            ? "bg-blue-500 border-blue-400 text-white"
                            : "bg-pink-500 border-pink-400 text-white"
                          : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500"
                      }`}
                    >
                      {g === "male" ? "He / Him" : "She / Her"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Birthday */}
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
                  Birthday
                </label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      className="w-full justify-between bg-zinc-900 hover:text-white border-zinc-700 hover:border-zinc-600 rounded-xl h-11 px-4 font-normal text-sm"
                    >
                      {date ? (
                        <span>{date.toLocaleDateString()}</span>
                      ) : (
                        <span className="text-zinc-500">
                          Select your birthday
                        </span>
                      )}
                      {zodiac && (
                        <span className="" title={zodiac}>
                          {zodiacEmoji[zodiac] || zodiac}
                        </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      defaultMonth={date}
                      captionLayout="dropdown"
                      onSelect={(d) => {
                        setDate(d);
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Profession */}
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
                  Profession
                </label>
                <Combobox
                  items={professions}
                  onValueChange={(value) =>
                    setSelectedProfession(value as string)
                  }
                  defaultValue={"Berozgar"}
                >
                  <ComboboxInput
                    placeholder="What do you do for a living?"
                    className="bg-zinc-900 border-zinc-700 text-white rounded-xl h-11 px-4 text-sm placeholder:text-zinc-600"
                  />
                  <ComboboxContent className="bg-zinc-900 border-zinc-700">
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item, i) => (
                        <ComboboxItem
                          key={i}
                          value={item}
                          className="text-white hover:bg-zinc-800"
                        >
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
                  Location
                </label>
                <Combobox
                  items={states}
                  onValueChange={(value) =>
                    setSelectedLocation(value as string)
                  }
                >
                  <ComboboxInput
                    placeholder="Where are you based?"
                    className="bg-zinc-900 border-zinc-700 text-white rounded-xl h-11 px-4 text-sm placeholder:text-zinc-600"
                  />
                  <ComboboxContent className="bg-zinc-900 border-zinc-700">
                    <ComboboxEmpty>No states found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item, i) => (
                        <ComboboxItem
                          key={i}
                          value={item}
                          className="text-white hover:bg-zinc-800"
                        >
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-800/80 my-10" />

          {/* ── Hobbies Section ───────────────────────────────────────────────── */}
          <div className="mb-10 cursor-default">
            <SectionHeader
              step="04"
              label="Your Hobbies"
              sublabel="The weirder, the better. We don't judge here."
            />

            <div className="flex flex-col gap-4">
              {/* Category select */}
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
                  Category
                </label>
                <Combobox
                  items={category}
                  defaultValue={"General"}
                  onValueChange={(value) =>
                    setSelectCategory(value as typeof selectCategory)
                  }
                >
                  <ComboboxInput
                    placeholder="Pick a category first..."
                    className="bg-zinc-900 border-zinc-700 text-white rounded-xl h-11 px-4 text-sm placeholder:text-zinc-600"
                  />
                  <ComboboxContent className="bg-zinc-900 border-zinc-700">
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item) => (
                        <ComboboxItem
                          key={item}
                          value={item}
                          className="text-white hover:bg-zinc-800"
                        >
                          {item
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (c: any) => c.toUpperCase())}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>

              {/* Hobbies multi-select */}
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5 cursor-default">
                  Pick Hobbies
                </label>
                <Combobox
                  multiple
                  autoHighlight
                  items={searchEngineHobbie(selectCategory, query) ?? []}
                  defaultValue={[]}
                  value={selectedHobbies}
                  onValueChange={setSelectedHobbies}
                >
                  <ComboboxChips
                    ref={anchor}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl min-h-11 px-3 py-2 gap-2 text-sm"
                  >
                    <ComboboxValue>
                      {(values) => (
                        <>
                          {values.map((value: string) => (
                            <ComboboxChip
                              key={value}
                              className="bg-blue-400/15 border-amber-400/30 text-amber-300 text-xs px-2.5 py-1 rounded-full"
                            >
                              {value}
                            </ComboboxChip>
                          ))}
                          <ComboboxChipsInput
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={
                              selectedHobbies.length === 0
                                ? "Search hobbies..."
                                : ""
                            }
                            className="text-white placeholder:text-zinc-600 bg-transparent outline-none text-sm"
                          />
                        </>
                      )}
                    </ComboboxValue>
                  </ComboboxChips>
                  <ComboboxContent
                    anchor={anchor}
                    className="bg-zinc-900 border-zinc-700"
                  >
                    <ComboboxEmpty>No hobbies found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item, i) => (
                        <ComboboxItem
                          key={i}
                          value={item}
                          className="text-white hover:bg-zinc-800"
                        >
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            </div>
          </div>

          {/* ── Feedback ─────────────────────────────────────────────────────── */}

          {/* ── Submit Button ─────────────────────────────────────────────────── */}
          <button
            onClick={createIdentity}
            disabled={loading || !allMediaSelected}
            className="w-full py-4 rounded-2xl hover:bg-white hover:text-black font-semibold text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border "
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                Saving...
              </span>
            ) : (
              "Save My Identity →"
            )}
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-20 justify-center w-[50%] items-center min-h-screen">
          <div>
            <TrueFocus
              sentence="Developed By OMJ"
              manualMode={true}
              blurAmount={5}
              borderColor="#5227FF"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
