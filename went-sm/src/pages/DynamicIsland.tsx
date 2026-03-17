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
} from "react-icons/fi";
import { useSearch } from "../components/di_global_context/SearchContextMusic";
import SearchMusic from "@/components/di_animations/SearchMusic";

export default function DynamicIsland() {
  const islandRef = useRef<HTMLDivElement>(null);
  const { openSearch, setOpenSearch } = useSearch();

  useEffect(() => {
    gsap.fromTo(
      islandRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
    );
  }, []);

  useEffect(() => {
    if (!islandRef.current) return;

    if (openSearch) {
      gsap.to(islandRef.current, {
        width: 420,
        height: 120,
        borderRadius: 24,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(islandRef.current, {
        width: 380,
        height: 56,
        borderRadius: 999,
        duration: 0.4,
      });
    }
  }, [openSearch]);

  return (
    <div>
      <div className="flex justify-center">
        <div className="fixed z-50 mt-6 flex flex-col items-center">
          <div
            ref={islandRef}
            className="flex flex-col justify-center bg-black text-white shadow-xl px-6 w-95 h-14 rounded-full"
          >
            {!openSearch && (
              <div className="flex items-center justify-around w-full">
                <FiBell className="cursor-pointer hover:scale-125 transition" />
                <FiHome className="cursor-pointer hover:scale-125 transition" />
                <FiMessageCircle className="cursor-pointer hover:scale-125 transition" />
                <FiUser className="cursor-pointer hover:scale-125 transition" />
                <FiUpload className="cursor-pointer hover:scale-125 transition" />
                <FiSearch className="cursor-pointer hover:scale-125 transition" />
              </div>
            )}

            {openSearch && <SearchMusic />}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
