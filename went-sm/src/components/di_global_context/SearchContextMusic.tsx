import { createContext, useContext, useState } from "react";

const SearchContext = createContext<any>(null);

export function SearchProvider({ children }: any) {
  const [musicSearchInput, setMusicSearchInput] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        musicSearchInput,
        setMusicSearchInput,
        openSearch,
        setOpenSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used inside SearchProvider");
  }

  return context;
};
