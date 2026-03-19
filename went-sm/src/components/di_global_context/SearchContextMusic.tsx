import { create } from "zustand";

type SearchState = {
  musicSearchInput: string;
  openSearch: boolean;
  setMusicSearchInput: (val: string) => void;
  setOpenSearch: (val: boolean) => void;
};

export const useSearch = create<SearchState>((set) => ({
  musicSearchInput: "",
  openSearch: false,
  setMusicSearchInput: (val) => set({ musicSearchInput: val }),
  setOpenSearch: (val) => set({ openSearch: val }),
}));
