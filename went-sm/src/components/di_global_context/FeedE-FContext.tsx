import { create } from "zustand";

type FeedState = {
  openFeedOptions: boolean;
  setOpenFeedOptions: (val: boolean) => void;
  chooseFeedOptions: "explore" | "following";
  setChooseFeedOptions: (val: "explore" | "following") => void;
  gototop: boolean;
  setGototop: (val: boolean) => void;
  scrollToTop: () => void;
  setScrollToTop: (fn: () => void) => void;
};

export const useFeedOptions = create<FeedState>((set) => ({
  openFeedOptions: false,
  chooseFeedOptions: "explore",
  setChooseFeedOptions: (val) => set({ chooseFeedOptions: val }),
  setOpenFeedOptions: (val) => set({ openFeedOptions: val }),
  gototop: false,
  setGototop: (val) => set({ gototop: val }),
  scrollToTop: () => {},
  setScrollToTop: (fn) => set({ scrollToTop: fn }),
}));
