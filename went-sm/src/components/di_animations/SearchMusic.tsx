import { useSearch } from "../di_global_context/SearchContextMusic";

export default function SearchMusic() {
  const { musicSearchInput, setMusicSearchInput, setOpenSearch } = useSearch();

  return (
    <div className="rounded-3xl mt-3 w-full flex bg-amber-50">
      <input
        type="text"
        placeholder="Pic your harmony"
        value={musicSearchInput}
        onChange={(e) => setMusicSearchInput(e.target.value)}
        className="w-full p-2 text-black outline-none"
      />

      <button
        onClick={() => setOpenSearch(false)}
        className="mr-2 p-2 text-black"
      >
        ✕
      </button>
    </div>
  );
}
