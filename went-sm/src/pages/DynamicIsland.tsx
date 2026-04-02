import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import {
  FiBell,
  FiUser,
  FiHome,
  FiMessageCircle,
  FiSearch,
  FiUpload,
  FiArrowUp,
} from "react-icons/fi";
import { useSearch } from "../components/di_global_context/SearchContextMusic";
import { useFeedOptions } from "@/components/di_global_context/FeedE-FContext";
import { useDefaultOptions } from "@/components/di_global_context/default";
import SearchMusic from "@/components/di_animations/SearchMusic";
import FeedOptions from "@/components/di_animations/FeedOptions";

export default function DynamicIsland() {
  const islandRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { openSearch } = useSearch();
  const { openFeedOptions, gototop } = useFeedOptions();
  const { feed, message, notification, profile, upload, search } =
    useDefaultOptions();

  useEffect(() => {
    gsap.fromTo(
      islandRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
    );
  }, []);

  useEffect(() => {
    if (!islandRef.current) return;

    // Handle feed options expansion
    if (openFeedOptions) {
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
    } else if (!openFeedOptions) {
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
    // Handle search expansion
    else if (openSearch) {
      gsap.to(islandRef.current, {
        width: 420,
        height: 120,
        borderRadius: 24,
        duration: 0.4,
        ease: "power3.out",
      });
    }
    // Collapsed state
    else {
      gsap.to(islandRef.current, {
        width: 380,
        height: 56,
        borderRadius: 24,
        duration: 0.4,
      });
    }
  }, [openSearch, openFeedOptions]);

  const glowClass = "bg-white text-black hover:bg-[rgb(255,255,255,0.7)]";

  return (
    <div>
      <div className="flex justify-center">
        <div className="fixed z-50 mt-6 flex flex-col items-center">
          <div
            ref={islandRef}
            className="flex flex-col justify-center bg-[rgb(0,0,0,0.9)] border-2 border-gray-500 text-white shadow-xl rounded-full overflow-hidden"
          >
            <div ref={contentRef}>
              {!openSearch && !openFeedOptions && (
                <div className="flex items-center justify-center w-full ">
                  {!gototop && (
                    <button
                      className={`h-full py-5 px-5.5 hover:bg-[rgb(255,255,255,0.1)] ${
                        feed ? glowClass : ""
                      }`}
                    >
                      <FiHome className="transition" />
                    </button>
                  )}
                  {gototop && (
                    <button
                      className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${
                        feed ? glowClass : ""
                      }`}
                    >
                      <FiArrowUp className="transition " />
                    </button>
                  )}

                  <button
                    className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${
                      notification ? glowClass : ""
                    }`}
                  >
                    <FiBell className="transition" />
                  </button>

                  <button
                    className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${
                      message ? glowClass : ""
                    }`}
                  >
                    <FiMessageCircle className="transition" />
                  </button>

                  <button
                    className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${
                      profile ? glowClass : ""
                    }`}
                  >
                    <FiUser className="transition" />
                  </button>

                  <button
                    className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${
                      upload ? glowClass : ""
                    }`}
                  >
                    <FiUpload className="transition" />
                  </button>

                  <button
                    className={`h-full py-5 px-6 hover:bg-[rgb(255,255,255,0.1)] ${
                      search ? glowClass : ""
                    }`}
                  >
                    <FiSearch className="transition" />
                  </button>
                </div>
              )}

              {openSearch && <SearchMusic />}
              {openFeedOptions && <FeedOptions />}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
