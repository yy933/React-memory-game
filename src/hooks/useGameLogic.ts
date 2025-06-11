"use client";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { getRandomSample } from "@/utils/getRandomSample";
import { EmojiData } from "@/types";
import { useCallback, useState } from "react";

export function useGameLogic() {
  // Accessing the store state and actions
  const emojisdata = useEmojiStore((state) => state.emojisdata);
  const isGameOn = useEmojiStore((state) => state.isGameOn);
  const setEmojidata = useEmojiStore((state) => state.setEmojis);
  const setIsGameOn = useEmojiStore((state) => state.setGameOn);
  const setMatchedCards = useEmojiStore((state) => state.setMatchedCards);
  const setAreAllCardsMatched = useEmojiStore(
    (state) => state.setAreAllCardsMatched
  );
  const [isLoading, setIsLoading] = useState(false);

  // Reset Game
  const resetGame = useCallback(() => {
    setIsGameOn(false);
    setAreAllCardsMatched(false);
    setMatchedCards([]);
    setEmojidata([]);
  }, [setIsGameOn, setAreAllCardsMatched, setMatchedCards, setEmojidata]);


  // get emoji data from API
  const getEmojiDatafromAPI = useCallback(async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      resetGame();
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = (await response.json()) as EmojiData[];
      const dataSlice = getRandomSample(data, 10);

      setEmojidata(dataSlice);
      setIsGameOn(true);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  }, [resetGame, setEmojidata, setIsGameOn]);


  // Start Game
  const startGame = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      getEmojiDatafromAPI();
    },
    [getEmojiDatafromAPI]
  );

  
  return {
    isGameOn,
    startGame,
    emojisdata,
    getEmojiDatafromAPI,
    resetGame,
  };
}
