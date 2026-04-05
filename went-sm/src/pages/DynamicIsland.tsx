import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
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

export default function DynamicIsland() {
  const islandRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { openSearch, musicSearchInput, setMusicSearchInput, setOpenSearch } =
    useSearch();
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

  // ── Entry animation ───────────────────────────────────────────────────────
  useEffect(() => {
    gsap.fromTo(
      islandRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
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
    } else if (openFeedOptions || openProfileOptions) {
      // Medium expansion for options menus
      gsap.to(islandRef.current, {
        width: 380,
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
  }, [openSearch, openFeedOptions, openProfileOptions]);

  const glowClass = "bg-white text-black hover:bg-[rgb(255,255,255,0.7)]";

  return (
    <div>
      <div className="flex justify-center">
        <div className="fixed z-50 mt-6 flex flex-col items-center">
          <div
            ref={islandRef}
            className="flex flex-col justify-center bg-[rgb(0,0,0,0.4)] border-2 border-gray-500 text-white shadow-xl rounded-full overflow-hidden"
          >
            <div ref={contentRef}>
              {/* ── Default nav icons ── */}
              {!openSearch &&
                !openFeedOptions &&
                !openProfileOptions &&
                !openTextBox && (
                  <div className="flex items-center justify-center w-full">
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

                    <button
                      className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${notification ? glowClass : ""}`}
                    >
                      <FiBell className="transition" />
                    </button>

                    <button
                      className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${message ? glowClass : ""}`}
                    >
                      <FiMessageCircle className="transition" />
                    </button>

                    <button
                      className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${profile1 ? glowClass : ""}`}
                    >
                      <FiUser className="transition" />
                    </button>

                    <button
                      className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${upload ? glowClass : ""}`}
                    >
                      <FiUpload className="transition" />
                    </button>

                    <button
                      onClick={() => setOpenSearch(true)}
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
                  <input
                    type="text"
                    placeholder="Pick your Pins..."
                    value={musicSearchInput}
                    onChange={(e) => setMusicSearchInput(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-zinc-500 text-sm outline-none"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setOpenSearch(false);
                      setMusicSearchInput("");
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
                    loopDelay={5}
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
    </div>
  );
}
