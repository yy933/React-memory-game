"use client";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { getRandomSample } from "@/utils/getRandomSample";
import { EmojiData } from "@/types";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export function useGameLogic() {
  const router = useRouter();

  // Zustand actions & states
  const {
    emojisdata,
    isGameOn,
    isError,
    setEmojis,
    setGameOn,
    setMatchedCards,
    setAreAllCardsMatched,
    setIsError,
  } = useEmojiStore();

  // local state
  const [isLoading, setIsLoading] = useState(false);

  // Reset Game
  const resetGame = useCallback(() => {
    setGameOn(false);
    setAreAllCardsMatched(false);
    setMatchedCards([]);
    setEmojis([]);
  }, [setGameOn, setAreAllCardsMatched, setMatchedCards, setEmojis]);

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

      setEmojis(dataSlice);
      setGameOn(true);
    } catch (error) {
      console.error("Error: ", error);
      useEmojiStore.getState().setIsError(true);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [resetGame, setEmojis, setGameOn, setIsError]);

  // Start Game: only route if data is fetched
  const startGame = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const success = await getEmojiDatafromAPI();
      if (success) {
        router.push("/game");
      }
    },
    [getEmojiDatafromAPI, router]
  );

  // reset error
  function resetError() {
    resetGame();
    setIsError(false);
  }

  return {
    isGameOn,
    isError,
    startGame,
    emojisdata,
    getEmojiDatafromAPI,
    resetGame,
    resetError,
  };
}
