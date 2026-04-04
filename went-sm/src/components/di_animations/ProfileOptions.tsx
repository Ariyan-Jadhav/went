import { useProfileOptions } from "../di_global_context/ProfileP-SContext";

export default function ProfileOptions() {
  const {
    chooseProfileOptions,
    setChooseProfileOptions,
    setOpenProfileOptions,
  } = useProfileOptions();
  return (
    <div>
      {" "}
      <div className="flex bg-black/80 backdrop-blur-xl rounded-full shadow-2xl overflow-hidden w-full">
        <button
          className={`
            flex-1 px-9 py-3 text-sm font-medium tracking-wide transition-colors
            ${
              chooseProfileOptions === "posted"
                ? "text-white bg-white/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }
          `}
          onClick={() => setChooseProfileOptions("posted")}
        >
          Posted
        </button>
        <button
          className={`
            flex-1 px-9 py-3 text-sm font-medium tracking-wide transition-colors
            ${
              chooseProfileOptions === "saved"
                ? "text-white bg-white/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }
          `}
          onClick={() => setChooseProfileOptions("saved")}
        >
          Saved
        </button>
        <div className="w-px h-8 bg-white/10 my-auto" />
        <button
          className="px-6 py-3 text-gray-500 hover:text-gray-300 text-xl font-light tracking-wide transition-colors hover:bg-white/5"
          onClick={() => setOpenProfileOptions(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
