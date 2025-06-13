import { create } from "zustand";
import { EmojiStore } from "@/types";

export const useEmojiStore = create<EmojiStore>((set) => ({
  emojisdata: [],
  isGameOn: false,
  matchedCards: [],
  isError: false,
  isFirstRender: true,
  areAllCardsMatched: false,
  isLoading: false,
  formData: { category: "animals-and-nature", number: 10 }, 
  setFormData: (formData) => set({ formData }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setEmojis: (emojisdata) => set({ emojisdata}),
  setGameOn: (isGameOn) => set({ isGameOn }),
  setMatchedCards: (cards) => set({ matchedCards: cards }),
  setAreAllCardsMatched: (areAllCardsMatched) => set({ areAllCardsMatched }),
  setIsError: (isError) => set({ isError }),
  setIsFirstRender: (isFirstRender) => set({ isFirstRender }),
}));
