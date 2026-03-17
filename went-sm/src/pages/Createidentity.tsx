import { useEffect, useState } from "react";
import { useSearch } from "../components/di_global_context/SearchContextMusic";

const CLIENT_ID = "ec687a946e3543f0bee1f3f184f3cea6";
const CLIENT_SECRET = "14f8c78ddabc4363b41793b61bf81f35";
const MOVIE_ID = "";

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

interface SelectedArtist {
  name: string;
  image: string;
}

interface SelectedAlbum {
  name: string;
  image: string;
  artist: string;
}

interface Track {
  name: string;
  artists: { name: string }[];
  album: {
    images: SpotifyImage[];
  };
}

interface SelectedTrack {
  name: string;
  artist: string;
  image: string;
}

interface SelectMovie {
  title: string;
  poster: string;
  year: string;
}

export default function Createidentity() {
  const { musicSearchInput, openSearch, setOpenSearch } = useSearch();

  const [accessToken, setAccessToken] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectArtistPanel, setSelectArtistPanel] = useState<boolean>(false);
  const [selectAlbumPanel, setSelectAlbumPanel] = useState<boolean>(false);
  const [selectTrackPanel, setSelectTrackPanel] = useState<boolean>(false);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // ✅ Added loading state
  const [error, setError] = useState<string | null>(null); // ✅ Added error state

  const [selectArtist, setSelectArtist] = useState<SelectedArtist | null>(null);
  const [selectAlbum, setSelectAlbum] = useState<SelectedAlbum | null>(null);
  const [selectTrack, setSelectTrack] = useState<SelectedTrack | null>(null);
  const [selectMovie, setSelectMovie] = useState<[] | null>(null);
  const [movie, setMovie] = useState<SelectMovie | null>(null);

  // Fetch Spotify access token once on mount

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=d635244f&s=${musicSearchInput}`,
    )
      .then((res) => res.json())
      .then((data) => setSelectMovie(data.search));
  }, []);

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((res) => res.json())
      .then((data) => {
        setAccessToken(data.access_token);
      })
      .catch(() => setError("Failed to authenticate with Spotify.")); // ✅ Error handling
  }, []);

  // ✅ Artist search effect — fixed deps to include accessToken and selectArtistPanel
  useEffect(() => {
    if (!selectArtistPanel) return;
    if (!accessToken || !musicSearchInput) return;

    const artistParameter = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };

    async function findArtist() {
      setIsLoading(true); // ✅ Show loading
      setError(null);
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${musicSearchInput}&type=artist&limit=10`,
          artistParameter,
        );
        const data = await response.json();
        setArtists(data.artists?.items ?? []);
      } catch {
        setError("Failed to fetch artists."); // ✅ Error handling
      } finally {
        setIsLoading(false); // ✅ Hide loading
      }
    }

    findArtist();
  }, [musicSearchInput, accessToken, selectArtistPanel]); // ✅ All deps listed

  // ✅ Album search effect — fixed deps, removed redundant double-check
  useEffect(() => {
    if (!selectAlbumPanel) return;
    if (!accessToken || !musicSearchInput) return;

    const albumParameter = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };

    async function findAlbum() {
      setIsLoading(true); // ✅ Show loading
      setError(null);
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${musicSearchInput}&type=album&limit=10`,
          albumParameter,
        );
        const data = await response.json();
        setAlbums(data.albums?.items ?? []);
      } catch {
        setError("Failed to fetch albums."); // ✅ Error handling
      } finally {
        setIsLoading(false); // ✅ Hide loading
      }
      // ✅ Removed: redundant `if (selectAlbumPanel) findAlbum()` — already guarded above
    }

    findAlbum();
  }, [musicSearchInput, accessToken, selectAlbumPanel]); // ✅ All deps listed

  // Track search effect
  useEffect(() => {
    if (!selectTrackPanel) return;
    if (!accessToken || !musicSearchInput) return;

    const trackParameter = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };

    async function findTrack() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${musicSearchInput}&type=track&limit=10`,
          trackParameter,
        );
        const data = await response.json();
        setTracks(data.tracks?.items ?? []);
      } catch {
        setError("Failed to fetch tracks.");
      } finally {
        setIsLoading(false);
      }
    }

    findTrack();
  }, [musicSearchInput, accessToken, selectTrackPanel]);

  // ✅ Helper to close all panels cleanly
  function closeAllPanels() {
    setOpenSearch(false);
    setSelectArtistPanel(false);
    setSelectAlbumPanel(false);
    setSelectTrackPanel(false);
  }

  return (
    <div>
      {/* Artist Panel Modal */}
      {openSearch && selectArtistPanel && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels} // ✅ Correctly closes both flags
        >
          <div className="mt-40 flex gap-6 justify-center flex-wrap">
            {/* ✅ Loading and error states */}
            {isLoading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-400">{error}</p>}

            {!isLoading &&
              artists.map((artist) => (
                <div
                  key={artist.id}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent modal close on card click
                    setSelectArtist({
                      name: artist.name,
                      image: artist.images?.[0]?.url,
                    });
                  }}
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
        onClick={() => {
          setOpenSearch(true);
          setSelectArtistPanel(true);
          setSelectAlbumPanel(false);
          setSelectTrackPanel(false); // ✅ Close track panel when opening artist
        }}
        className="text-black bg-amber-400 h-6"
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

      {/* Album Panel Modal */}
      {openSearch && selectAlbumPanel && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels} // ✅ Correctly closes both flags
        >
          <div className="mt-40 flex gap-6 justify-center flex-wrap">
            {/* ✅ Loading and error states */}
            {isLoading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-400">{error}</p>}

            {!isLoading &&
              albums.map(
                (
                  album, // ✅ Using album.id as key, not index
                ) => (
                  <div
                    key={album.id}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent modal close on card click
                      setSelectAlbum({
                        name: album.name,
                        image: album.images?.[0]?.url,
                        artist: album.artists?.[0]?.name, // ✅ correctly typed as string now
                      });
                    }}
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
                ),
              )}
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setOpenSearch(true);
          setSelectAlbumPanel(true);
          setSelectArtistPanel(false);
          setSelectTrackPanel(false); // ✅ Close track panel when opening album
        }}
        className="text-black bg-amber-400 h-6"
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

      {/* Track Panel Modal */}
      {openSearch && selectTrackPanel && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeAllPanels}
        >
          <div className="mt-40 flex flex-col gap-3 w-150 max-h-[60vh] overflow-y-auto px-4">
            {isLoading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-400">{error}</p>}

            {!isLoading &&
              tracks.map((track, i) => (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectTrack({
                      name: track.name,
                      artist: track.artists.map((a) => a.name).join(", "),
                      image: track.album.images?.[0]?.url,
                    });
                  }}
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
        onClick={() => {
          setOpenSearch(true);
          setSelectTrackPanel(true);
          setSelectArtistPanel(false);
          setSelectAlbumPanel(false);
        }}
        className="text-black bg-amber-400 h-6"
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
    </div>
  );
}
