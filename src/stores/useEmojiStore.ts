// stores/useEmojiStore.ts
import { create } from "zustand";
import { EmojiData } from "@/types";

type EmojiStore = {
  emojisdata: EmojiData[];
  isGameOn: boolean;
  setEmojis: (data: EmojiData[]) => void;
  setGameOn: (isOn: boolean) => void;
};

export const useEmojiStore = create<EmojiStore>((set) => ({
  emojisdata: [],
  isGameOn: false,
  setEmojis: (data) => set({ emojisdata: data }),
  setGameOn: (isOn) => set({ isGameOn: isOn }),
}));
