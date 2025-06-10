// stores/useEmojiStore.ts
import { create } from "zustand";
import { EmojiData } from "@/types";

type EmojiStore = {
  emojisdata: EmojiData[];
  isGameOn: boolean;
  matchedCards: { name: string; index: number }[];
  areAllCardsMatched: boolean;
  setEmojis: (emojis: EmojiData[]) => void;
  setGameOn: (isGameOn: boolean) => void;
  setMatchedCards: (cards: { name: string; index: number }[]) => void;
  setAreAllCardsMatched: (areAllCardsMatched: boolean) => void;
};

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
