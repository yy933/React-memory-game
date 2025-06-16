"use client";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { getRandomSample } from "@/utils/getRandomSample";
import { fetchEmojisByCategory } from "@/services/emojiService";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SanitizedEmojiData } from "@/types";
import DOMPurify from "dompurify";

export function useGameLogic() {
  const router = useRouter();

  // Zustand actions & states
  const {
    emojisdata,
    isGameOn,
    isError,
    isFirstRender,
    formData,
    setFormData,
    setEmojis,
    setGameOn,
    setMatchedCards,
    setAreAllCardsMatched,
    setIsError,
    setIsFirstRender
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
      const currentFormData = useEmojiStore.getState().formData;
      const data = await fetchEmojisByCategory(currentFormData.category)
      const dataSlice = getRandomSample(data, currentFormData.number / 2);
      const cleanData: SanitizedEmojiData[] = dataSlice.map((emoji) => {
        return {
          ...emoji,
          htmlString: DOMPurify.sanitize((emoji.htmlCode ?? []).join("")),
        };
      });

      setEmojis(cleanData);
      setGameOn(true);
      setIsFirstRender(false);
      return true;
    } catch (error) {
      console.error("Error: ", error);
      useEmojiStore.getState().setIsError(true);
      setIsFirstRender(true);
      return false;
    } finally {
      setIsLoading(false);
      setIsFirstRender(false);
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

  // handle form submission
  function handleFormChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "number" ? Number(value) : value,
    });
  }

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
    handleFormChange,
    resetError,
    isFirstRender,
  };
}
