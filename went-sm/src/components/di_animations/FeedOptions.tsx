import { useFeedOptions } from "../di_global_context/FeedE-FContext";

function FeedOptions() {
  const { chooseFeedOptions, setChooseFeedOptions, setOpenFeedOptions } =
    useFeedOptions();

  return (
    <div className="w-full">
      <div className="flex bg-black/80 backdrop-blur-xl rounded-full shadow-2xl overflow-hidden w-full">
        <button
          className={`
            flex-1 px-9 py-3 text-sm font-medium tracking-wide transition-colors
            ${
              chooseFeedOptions === "explore"
                ? "text-white bg-white/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }
          `}
          onClick={() => setChooseFeedOptions("explore")}
        >
          Explore
        </button>
        <button
          className={`
            flex-1 px-9 py-3 text-sm font-medium tracking-wide transition-colors
            ${
              chooseFeedOptions === "following"
                ? "text-white bg-white/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }
          `}
          onClick={() => setChooseFeedOptions("following")}
        >
          Following
        </button>
        <div className="w-px h-8 bg-white/10 my-auto" />
        <button
          className="px-6 py-3 text-gray-500 hover:text-gray-300 text-xl font-light tracking-wide transition-colors hover:bg-white/5"
          onClick={() => setOpenFeedOptions(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default FeedOptions;
