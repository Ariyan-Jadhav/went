import { useEffect, useRef, useState } from "react";
import { useSearch } from "../components/di_global_context/SearchContextMusic";
import { MicVocal, Disc3, AudioLines, Clapperboard } from "lucide-react";
import TrueFocus from "@/components/TrueFocus";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useNavigate } from "react-router-dom";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Zodiac } from "@/components/Zodiac";
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
import { useDefaultOptions } from "@/components/di_global_context/Default";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useProfileOptions } from "@/components/di_global_context/ProfileP-SContext";

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
  album: { images: SpotifyImage[] };
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

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ── Sub-components ────────────────────────────────────────────────────────────

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
      className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 cursor-pointer ${
        active
          ? "bg-blue-400 border-white text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]"
          : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-white hover:text-white"
      }`}
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

// ── Main Component ────────────────────────────────────────────────────────────

export default function Createidentity() {
  const { musicSearchInput, openSearch, setOpenSearch, setSearchMode } =
    useSearch();

  const {
    setFeed,
    setMessage,
    setNotification,
    setProfile1,
    setSearch,
    setUpload,
    setOpenTextBox,
    setTextBox,
  } = useDefaultOptions();

  const { setOpenProfileOptions } = useProfileOptions();

  const navigate = useNavigate();

  const { setOpenFeedOptions, setGototop } = useFeedOptions();
  const { user } = useUser();
  const { getToken } = useAuth();

  // ── Clerk state ──
  const fileRef = useRef<HTMLInputElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [pfpPreview, setPfpPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Sync Clerk user data once loaded
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName ?? "");
      setLastName(user.lastName ?? "");
      setUsername(user.username ?? "");
    }
  }, [user]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPfpPreview(URL.createObjectURL(file));
  }

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

  // ── Profession & Location state ──
  const [selectedProfession, setSelectedProfession] =
    useState<string>("Berozgar");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [profileLoaded, setProfileLoaded] = useState(false);

  // ── Gender state ──
  const [gender, setGender] = useState<"male" | "female" | "">("");

  // ── Birthday state ──
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

  // ── Loading / feedback ──
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // ── Selected media ──
  const [selectArtist, setSelectArtist] = useState<SelectedArtist | null>(null);
  const [selectAlbum, setSelectAlbum] = useState<SelectedAlbum | null>(null);
  const [selectTrack, setSelectTrack] = useState<SelectedTrack | null>(null);
  const [selectMovie, setSelectMovie] = useState<SelectedMovie | null>(null);

  const allFieldsFilled =
    !!selectArtist &&
    !!selectAlbum &&
    !!selectTrack &&
    !!selectMovie &&
    !!firstName.trim() &&
    !!lastName.trim() &&
    !!username.trim() &&
    !!bio.trim() &&
    !!gender &&
    !!date &&
    !!selectedProfession &&
    !!selectedLocation &&
    selectedHobbies.length > 0;

  // ── Hobbies categories ──
  const category = [
    "General",
    "Sports and Outdoors",
    "Education",
    "Collection",
    "Competition",
    "Observation",
  ];

  // ── Zodiac emoji map ──
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

  // ── Spotify token (on mount) ──────────────────────────────────────────────────
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

  // ── Load existing profile ─────────────────────────────────────────────────────
  useEffect(() => {
    async function loadProfile() {
      try {
        const token = await getToken();
        const { data } = await axios.get("profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (data) {
          if (data.bio) setBio(data.bio);
          if (data.gender) setGender(data.gender);
          if (data.profession) setSelectedProfession(data.profession);
          if (data.location) setSelectedLocation(data.location);
          if (data.hobby) setSelectedHobbies(data.hobby);
          if (data.birthday) setDate(new Date(data.birthday));

          if (data.artists?.[0])
            setSelectArtist({
              name: data.artists[0].name,
              image: data.artists[0].image,
            });
          if (data.albums?.[0])
            setSelectAlbum({
              name: data.albums[0].name,
              image: data.albums[0].image,
              artist: "",
            });
          if (data.tracks?.[0])
            setSelectTrack({
              name: data.tracks[0].name,
              artist: data.tracks[0].artist,
              image: data.tracks[0].image,
            });
          if (data.movies?.[0])
            setSelectMovie({
              title: data.movies[0].title,
              year: data.movies[0].year,
              type: data.movies[0].type,
              poster: data.movies[0].poster,
              imdbID: "",
            });
        }
      } catch {
        // Fresh user — no profile yet, that's fine
      } finally {
        setProfileLoaded(true);
      }
    }
    loadProfile();
  }, []);

  useEffect(() => {
    setFeed(false);
    setMessage(false);
    setNotification(false);
    setSearch(false);
    setUpload(false);
    setOpenFeedOptions(false);
    setGototop(false);
    setOpenProfileOptions(false);
  }, []);

  useEffect(() => {
    setTextBox("IDENTITY");
    setProfile1(false);
    setOpenTextBox(true);
  }, []);

  // ── Spotify: Artist search ────────────────────────────────────────────────────
  useEffect(() => {
    if (!selectArtistPanel || !accessToken || !musicSearchInput) return;
    async function findArtist() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/search?q=${musicSearchInput}&type=artist&limit=10`,
          {
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

  // ── Spotify: Album search ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!selectAlbumPanel || !accessToken || !musicSearchInput) return;
    async function findAlbum() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/search?q=${musicSearchInput}&type=album&limit=10`,
          {
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

  // ── Spotify: Track search ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!selectTrackPanel || !accessToken || !musicSearchInput) return;
    async function findTrack() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/search?q=${musicSearchInput}&type=track&limit=10`,
          {
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

  // ── OMDB: Movie search ────────────────────────────────────────────────────────
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

  function openPanel(panel: "artist" | "album" | "track" | "movie") {
    setOpenSearch(true);
    setSearchMode("media");
    setSelectArtistPanel(panel === "artist");
    setSelectAlbumPanel(panel === "album");
    setSelectTrackPanel(panel === "track");
    setSelectMoviePanel(panel === "movie");
  }

  // ── Submit ────────────────────────────────────────────────────────────────────
  const createIdentity = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!user?.id) {
      setError("You're not authenticated.");
      return;
    }

    try {
      setLoading(true);

      // 1. Safe to update without verification
      await user.update({ firstName, lastName });
      if (imageFile) await user.setProfileImage({ file: imageFile });

      // 2. Username — only update if it actually changed
      if (username !== user.username) {
        try {
          await user.update({ username });
        } catch (clerkErr: any) {
          const msg = clerkErr?.errors?.[0]?.message ?? "";
          if (msg.toLowerCase().includes("verification")) {
            setError(
              "Username change requires email verification. Please update it from your account settings.",
            );
            // Continue saving the rest anyway
          } else {
            throw clerkErr; // Re-throw unexpected errors
          }
        }
      }

      // 3. Update your DB
      const token = await getToken();
      const headers = { Authorization: `Bearer ${token}` };

      await Promise.all([
        axios.put(
          "profile/me/user",
          { firstName, lastName, username, profilePicUrl: user?.imageUrl },
          { headers },
        ),
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

      const verify = await axios.post("api/profile/me/verify", {}, { headers });

      if (verify.data.message === true) {
        setOpenTextBox(false);
        setProfile1(true);
      }

      setSuccess(true);
      setImageFile(null);
      await user.reload();
      navigate("/feed");
    } catch (err: any) {
      console.error("e:", err);
      setError(
        err?.errors?.[0]?.message ?? "Failed to save. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  // ── Modal shared spinner ──────────────────────────────────────────────────────
  const ModalSpinner = ({ label }: { label: string }) => (
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      <p className="text-white/80">{label}</p>
    </div>
  );

  const dynamicIslandAllow = async () => {
    const token = await getToken();
    const headers = { Authorization: `Bearer ${token}` };
    const verify = await axios.post("api/profile/me/verify", {}, { headers });
    console.log(verify.data.message, "omj");
    if (verify.data.message === true) {
      setOpenTextBox(false);
      setProfile1(true);
    }
  };

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
            {isLoading && <ModalSpinner label="Fetching Artists..." />}
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
                    <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>
                  <p className="text-white font-medium text-sm truncate w-36 text-center">
                    {artist.name}
                  </p>
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
            {isLoading && <ModalSpinner label="Fetching Albums..." />}
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
                  <div className="relative">
                    <img
                      src={album.images?.[0]?.url}
                      alt={album.name}
                      className="w-40 h-40 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>
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
            {isLoading && <ModalSpinner label="Fetching Tracks..." />}
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
                    <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
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
            {isLoading && <ModalSpinner label="Fetching Movies..." />}
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

      {/* ── Page ── */}
      <div className="min-h-screen bg-zinc-950 text-white flex">
        <div className="fixed inset-0 pointer-events-none w-[50%] opacity-[0.03]" />

        <div className="relative z-10 max-w-2xl px-10 py-12 pb-24">
          {(user?.publicMetadata?.verified as boolean) && (
            <button
              onClick={() => navigate(`/profile/${String(user?.username)}`)}
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-sm font-medium">Back to profile</span>
            </button>
          )}
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Create Your Identity
            </h1>
            <div className="mt-4 h-px w-16 bg-blue-400/60 rounded" />
          </div>

          {/* ── Section 00: Account ───────────────────────────────────────────── */}
          <div className="mb-10">
            <SectionHeader
              step="00"
              label="Your Account"
              sublabel="The face of your profile. Make it worthy."
            />

            {/* PFP */}
            <div className="flex items-center gap-5 mb-6">
              <div
                className="relative group cursor-pointer"
                onClick={() => fileRef.current?.click()}
              >
                <img
                  src={pfpPreview ?? user?.imageUrl}
                  alt="pfp"
                  className="w-20 h-20 rounded-full object-cover border border-zinc-700"
                />
                <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Change</span>
                </div>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Profile Photo</p>
                <p className="text-zinc-500 text-xs mt-0.5">
                  JPG, PNG up to 10MB
                </p>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Name + Username */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
                  First Name
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
                  Last Name
                </label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500 transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
                  Username
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
                    @
                  </span>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-8 pr-4 py-2.5 text-white text-sm outline-none focus:border-zinc-500 transition"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-zinc-800/80 my-10" />

          {/* ── Section 01: Media Tastes ──────────────────────────────────────── */}
          <div className="mb-10">
            <SectionHeader
              step="01"
              label="Your Taste in Media"
              sublabel="What defines your vibe? Music, films — spill it."
            />

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

          <div className="h-px bg-zinc-800/80 my-10" />

          {/* ── Section 02: Bio ───────────────────────────────────────────────── */}
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
                className="w-full bg-zinc-900 border border-zinc-700/80 rounded-2xl px-4 py-3.5 text-white placeholder-zinc-600 text-sm resize-none focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-200"
              />
              <span className="absolute bottom-3 right-4 text-zinc-600 text-xs">
                {bio.length}/300
              </span>
            </div>
          </div>

          <div className="h-px bg-zinc-800/80 my-10" />

          {/* ── Section 03: Personal Details ─────────────────────────────────── */}
          <div className="mb-10">
            <SectionHeader
              step="03"
              label="A Bit About You"
              sublabel="Just the basics. We promise not to sell it to advertisers."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Pronouns */}
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
                        <span title={zodiac}>
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
                  key={`profession-${profileLoaded}`}
                  items={professions}
                  defaultValue={selectedProfession}
                  onValueChange={(value) =>
                    setSelectedProfession(value as string)
                  }
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
                  key={`location-${profileLoaded}`}
                  items={states}
                  defaultValue={selectedLocation}
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

          <div className="h-px bg-zinc-800/80 my-10" />

          {/* ── Section 04: Hobbies ───────────────────────────────────────────── */}
          <div className="mb-10 cursor-default">
            <SectionHeader
              step="04"
              label="Your Hobbies"
              sublabel="The weirder, the better. We don't judge here."
            />

            <div className="flex flex-col gap-4">
              {/* Category */}
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2.5">
                  Category
                </label>
                <Combobox
                  items={category}
                  defaultValue="General"
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
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          {success && (
            <p className="text-green-400 text-sm mb-4">
              Identity saved successfully! 🎉
            </p>
          )}
          {!allFieldsFilled && !loading && (
            <div className="flex flex-wrap gap-2 mb-4">
              <h1 className="font-bold text-red-500">Missing :</h1>
              {!firstName.trim() && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  First name
                </span>
              )}
              {!lastName.trim() && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Last name
                </span>
              )}
              {!username.trim() && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Username
                </span>
              )}
              {!bio.trim() && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Bio
                </span>
              )}
              {!gender && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Pronouns
                </span>
              )}
              {!date && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Birthday
                </span>
              )}
              {!selectedProfession && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Profession
                </span>
              )}
              {!selectedLocation && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Location
                </span>
              )}
              {selectedHobbies.length === 0 && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Hobbies
                </span>
              )}
              {!selectArtist && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Artist
                </span>
              )}
              {!selectAlbum && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Album
                </span>
              )}
              {!selectTrack && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Track
                </span>
              )}
              {!selectMovie && (
                <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-full">
                  Movie
                </span>
              )}
            </div>
          )}

          {/* ── Submit ───────────────────────────────────────────────────────── */}
          <button
            onClick={createIdentity}
            disabled={loading || !allFieldsFilled}
            className="w-full py-4 rounded-2xl hover:bg-white hover:text-black font-semibold text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                Saving...
              </span>
            ) : (
              "Save My Identity →"
            )}
          </button>
        </div>

        {/* ── Right panel ── */}
        <div className="flex-1 flex flex-col gap-2 justify-center w-[50%] items-center min-h-screen">
          <div className="flex justify-center w-full">
            <img src="/logo/white-went.png" className="w-[40%]" />
          </div>
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
