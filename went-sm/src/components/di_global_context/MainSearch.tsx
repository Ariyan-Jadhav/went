import { create } from "zustand";

type UserResult = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  profilePicUrl: string | null;
  isBot: boolean;
};

type UserSearchStore = {
  query: string;
  setQuery: (val: string) => void;

  results: UserResult[];
  setResults: (val: UserResult[]) => void;

  isLoading: boolean;
  setIsLoading: (val: boolean) => void;

  isOpen: boolean; // controls the Sheet (right drawer)
  setIsOpen: (val: boolean) => void;
};

export const useUserSearch = create<UserSearchStore>((set) => ({
  query: "",
  setQuery: (val) => set({ query: val }),

  results: [],
  setResults: (val) => set({ results: val }),

  isLoading: false,
  setIsLoading: (val) => set({ isLoading: val }),

  isOpen: false,
  setIsOpen: (val) => set({ isOpen: val }),
}));
