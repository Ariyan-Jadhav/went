import { create } from "zustand";

type FeedState = {
  chooseProfileOptions: "posted" | "saved";
  setChooseProfileOptions: (val: "posted" | "saved") => void;
  openProfileOptions: boolean;
  setOpenProfileOptions: (val: boolean) => void;
};

export const useProfileOptions = create<FeedState>((set) => ({
  chooseProfileOptions: "posted",
  setChooseProfileOptions: (val) => set({ chooseProfileOptions: val }),
  openProfileOptions: false,
  setOpenProfileOptions: (val) => set({ openProfileOptions: val }),
}));
