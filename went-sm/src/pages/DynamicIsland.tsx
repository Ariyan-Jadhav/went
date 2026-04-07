import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import { useUserSearch } from "@/components/di_global_context/MainSearch";
import UserSearchDrawer from "@/components/di_animations/MainOptions";
import { useCallback } from "react";
import {
  FiBell,
  FiUser,
  FiHome,
  FiMessageCircle,
  FiSearch,
  FiUpload,
  FiArrowUp,
  FiX,
} from "react-icons/fi";
import { useSearch } from "../components/di_global_context/SearchContextMusic";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useDefaultOptions } from "@/components/di_global_context/default";
import { useProfileOptions } from "@/components/di_global_context/ProfileP-SContext";
import Shuffle from "@/components/Shuffle";
import FeedOptions from "@/components/di_animations/FeedOptions";
import ProfileOptions from "@/components/di_animations/ProfileOptions";
import { useUser, useAuth } from "@clerk/clerk-react";

export default function DynamicIsland() {
  const islandRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { user } = useUser();
  const { getToken } = useAuth();

  const username = user?.username;

  const {
    openSearch,
    musicSearchInput,
    setMusicSearchInput,
    setOpenSearch,
    searchMode,
    setSearchMode,
  } = useSearch();
  const { query, setQuery, setResults, setIsOpen, setIsLoading } =
    useUserSearch();

  const { openFeedOptions, gototop, scrollToTop } = useFeedOptions();
  const { openProfileOptions } = useProfileOptions();
  const {
    feed,
    message,
    notification,
    profile1,
    upload,
    search,
    textBox,
    openTextBox,
  } = useDefaultOptions();

  const searchUsers = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    setIsOpen(true); // open drawer as soon as user starts typing

    try {
      const res = await axios.get(`/api/users/search`, {
        params: { q }, // ✅ use function param
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      setResults(res.data.users ?? []);
    } catch {
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => searchUsers(query), 400); // 400ms debounce
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (searchMode !== "users") return;
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      setIsOpen(true);
      try {
        const res = await fetch(
          `/api/users/search?q=${encodeURIComponent(query)}`,
        );
        const data = await res.json();
        setResults(data.users ?? []);
      } catch {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [query, searchMode]);

  // ── Entry animation ───────────────────────────────────────────────────────
  useEffect(() => {
    gsap.fromTo(
      islandRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 1 },
    );
  }, []);

  // ── Island size animation based on state ──────────────────────────────────
  useEffect(() => {
    if (!islandRef.current) return;

    if (openSearch) {
      // Wide pill for search input
      gsap.to(islandRef.current, {
        width: 480,
        height: 56,
        borderRadius: 24,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      // Default collapsed pill with nav icons
      gsap.fromTo(
        islandRef.current,
        {
          width: 100,
          duration: 0.4,
          ease: "power3.out",
        },
        {
          width: 380,
          height: 56,
          borderRadius: 24,
          duration: 0.4,
          ease: "power3.out",
        },
      );
    }
  }, [openSearch, openFeedOptions, openProfileOptions, openTextBox]);

  const glowClass = "bg-white text-black hover:bg-[rgb(255,255,255,0.7)]";

  return (
    <div>
      <div className="flex justify-center">
        <div className="fixed z-50 mt-6 flex flex-col items-center">
          <div
            ref={islandRef}
            style={{ opacity: 0, transform: "translateY(-80px)" }}
            className="flex flex-col justify-center bg-[rgb(0,0,0,0.4)] border-2 border-gray-500 text-white shadow-xl rounded-full overflow-hidden"
          >
            <div ref={contentRef}>
              {/* ── Default nav icons ── */}
              {!openSearch &&
                !openFeedOptions &&
                !openProfileOptions &&
                !openTextBox && (
                  <div className="flex items-center justify-center w-full">
                    <NavLink to="/feed">
                      {!gototop ? (
                        <button
                          className={`h-full py-5 px-5.5 hover:bg-[rgb(255,255,255,0.1)] ${feed ? glowClass : ""}`}
                        >
                          <FiHome className="transition" />
                        </button>
                      ) : (
                        <button
                          onClick={scrollToTop}
                          className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${feed ? glowClass : ""}`}
                        >
                          <FiArrowUp className="transition" />
                        </button>
                      )}
                    </NavLink>

                    <NavLink to="/noti">
                      <button
                        className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${notification ? glowClass : ""}`}
                      >
                        <FiBell className="transition" />
                      </button>
                    </NavLink>

                    <NavLink to={`/profile/${username}`}>
                      <button
                        className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${profile1 ? glowClass : ""}`}
                      >
                        <FiUser className="transition" />
                      </button>
                    </NavLink>

                    <NavLink to="/justuploaditbrah">
                      <button
                        className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${upload ? glowClass : ""}`}
                      >
                        <FiUpload className="transition" />
                      </button>
                    </NavLink>
                    <NavLink to="/message">
                      <button
                        className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${message ? glowClass : ""}`}
                      >
                        <FiMessageCircle className="transition" />
                      </button>
                    </NavLink>

                    <button
                      onClick={() => {
                        setSearchMode("users");
                        setOpenSearch(true);
                      }}
                      className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${search ? glowClass : ""}`}
                    >
                      <FiSearch className="transition" />
                    </button>
                  </div>
                )}

              {/* ── Search input (inside the island) ── */}
              {openSearch && (
                <div className="flex items-center w-full px-4 gap-2">
                  <FiSearch className="text-zinc-400 shrink-0" />

                  {searchMode === "users" ? (
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="flex-1 bg-transparent text-white placeholder-zinc-500 text-sm outline-none"
                      autoFocus
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Pick your Pins..."
                      value={musicSearchInput}
                      onChange={(e) => setMusicSearchInput(e.target.value)}
                      className="flex-1 bg-transparent text-white placeholder-zinc-500 text-sm outline-none"
                      autoFocus
                    />
                  )}

                  <button
                    onClick={() => {
                      setOpenSearch(false);
                      setMusicSearchInput("");
                      setQuery("");
                      setResults([]);
                      setIsOpen(false);
                      setSearchMode("media"); // reset to default
                    }}
                    className="text-zinc-400 hover:text-white transition"
                  >
                    <FiX />
                  </button>
                </div>
              )}

              {/* ── Shuffle text ── */}
              {!openSearch && openTextBox && (
                <div className="flex items-center justify-center w-full text-white font-bold">
                  <Shuffle
                    text={textBox}
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover
                    respectReducedMotion={true}
                    loop={true}
                    loopDelay={2}
                  />
                </div>
              )}

              {/* ── Expanded panels ── */}
              {openFeedOptions && <FeedOptions />}
              {openProfileOptions && <ProfileOptions />}
            </div>
          </div>
        </div>
      </div>

      <Outlet />
      <UserSearchDrawer />
    </div>
  );
}
