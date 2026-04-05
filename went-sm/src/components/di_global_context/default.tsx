import { create } from "zustand";

type DefaultDI = {
  feed: boolean;
  setFeed: (val: boolean) => void;

  message: boolean;
  setMessage: (val: boolean) => void;

  notification: boolean;
  setNotification: (val: boolean) => void;

  profile1: boolean;
  setProfile1: (val: boolean) => void;

  upload: boolean;
  setUpload: (val: boolean) => void;

  search: boolean;
  setSearch: (val: boolean) => void;

  openTextBox: boolean;
  setOpenTextBox: (val: boolean) => void;

  textBox: string;
  setTextBox: (val: string) => void;
};

export const useDefaultOptions = create<DefaultDI>((set) => ({
  feed: false,
  setFeed: (val) => set({ feed: val }),

  message: false,
  setMessage: (val) => set({ message: val }),

  notification: false,
  setNotification: (val) => set({ notification: val }),

  profile1: false,
  setProfile1: (val) => set({ profile1: val }),

  upload: false,
  setUpload: (val) => set({ upload: val }),

  search: false,
  setSearch: (val) => set({ search: val }),

  openTextBox: false,
  setOpenTextBox: (val) => set({ openTextBox: val }),

  textBox: "WENT",
  setTextBox: (val) => set({ textBox: val }),
}));
