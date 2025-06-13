import { create } from "zustand";
import { EmojiStore } from "@/types";

export const useEmojiStore = create<EmojiStore>((set) => ({
  emojisdata: [],
  isGameOn: false,
  matchedCards: [],
  isError: false,
  areAllCardsMatched: false,
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  setEmojis: (emojis) => set({ emojisdata: emojis }),
  setGameOn: (isGameOn) => set({ isGameOn }),
  setMatchedCards: (cards) => set({ matchedCards: cards }),
  setAreAllCardsMatched: (areAllCardsMatched) => set({ areAllCardsMatched }),
  setIsError: (isError) => set({ isError }),
}));
