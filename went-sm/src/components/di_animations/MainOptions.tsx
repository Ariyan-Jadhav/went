import { useUserSearch } from "../di_global_context/MainSearch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UserSearchDrawer() {
  const { isOpen, setIsOpen, results, isLoading, query } = useUserSearch();
  const navigate = useNavigate();

  // close on ESC (optional but clean)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] sm:w-95 bg-black border-l border-gray-800 text-white z-40 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-base font-medium">
            {query ? `Results for "${query}"` : "Search users"}
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1 p-3 overflow-y-auto h-[calc(100%-60px)]">
          {isLoading && (
            <p className="text-sm text-gray-400 px-2 py-4 text-center">
              Searching...
            </p>
          )}

          {!isLoading && results.length === 0 && query && (
            <p className="text-sm text-gray-400 px-2 py-4 text-center">
              No users found for "{query}"
            </p>
          )}

          {!isLoading &&
            results.map((user) => (
              <button
                key={user.id}
                onClick={() => {
                  navigate(`/profile/${user.username}`);
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition text-left w-full"
              >
                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold text-white">
                  {user.profilePicUrl ? (
                    <img src={user.profilePicUrl} className="rounded-full" />
                  ) : (
                    user.username?.[0]?.toUpperCase()
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">@{user.username}</p>
                  {user.isBot === false ? (
                    <p className="text-xs text-gray-400 font-medium truncate">
                      {user.firstName} {user.lastName}
                    </p>
                  ) : (
                    <p className="text-xs text-yellow-400 font-medium truncate">
                      Breathing bot
                    </p>
                  )}
                </div>
              </button>
            ))}
        </div>
      </div>
    </>
  );
}
