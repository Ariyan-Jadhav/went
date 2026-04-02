import { create } from "zustand";

type DefaultDI = {
  feed: boolean;
  setFeed: (val: boolean) => void;

  message: boolean;
  setMessage: (val: boolean) => void;

  notification: boolean;
  setNotification: (val: boolean) => void;

  profile: boolean;
  setProfile: (val: boolean) => void;

  upload: boolean;
  setUpload: (val: boolean) => void;

  search: boolean;
  setSearch: (val: boolean) => void;
};

export const useDefaultOptions = create<DefaultDI>((set) => ({
  feed: false,
  setFeed: (val) => set({ feed: val }),

  message: false,
  setMessage: (val) => set({ message: val }),

  notification: false,
  setNotification: (val) => set({ notification: val }),

  profile: false,
  setProfile: (val) => set({ profile: val }),

  upload: false,
  setUpload: (val) => set({ upload: val }),

  search: false,
  setSearch: (val) => set({ search: val }),
}));
