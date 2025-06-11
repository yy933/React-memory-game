import { create } from "zustand";
import { EmojiStore } from "@/types";

export const useEmojiStore = create<EmojiStore>((set) => ({
  emojisdata: [],
  isGameOn: false,
  matchedCards: [],
  areAllCardsMatched: false,
  setEmojis: (emojis) => set({ emojisdata: emojis }),
  setGameOn: (isGameOn) => set({ isGameOn }),
  setMatchedCards: (cards) => set({ matchedCards: cards }),
  setAreAllCardsMatched: (areAllCardsMatched) => set({ areAllCardsMatched }),
}));
