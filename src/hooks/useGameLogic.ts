"use client";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { getRandomSample } from "@/utils/getRandomSample";
import { EmojiData } from "@/types";

export function useGameLogic() {
  const emojisdata = useEmojiStore((state) => state.emojisdata);
  const isGameOn = useEmojiStore((state) => state.isGameOn);
  const setEmojidata = useEmojiStore((state) => state.setEmojis);
  const setIsGameOn = useEmojiStore((state) => state.setGameOn);

  async function startGame(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = (await response.json()) as EmojiData[];
      const dataSample = getRandomSample(data, 10);

      setEmojidata(dataSample);
      setIsGameOn(true);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  return { isGameOn, startGame, emojisdata };
}
