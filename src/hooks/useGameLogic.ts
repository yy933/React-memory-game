"use client";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { getRandomSample } from "@/utils/getRandomSample";
import { EmojiData } from "@/types";

export function useGameLogic() {
  const emojisdata = useEmojiStore((state) => state.emojisdata);
  const isGameOn = useEmojiStore((state) => state.isGameOn);
  const setEmojidata = useEmojiStore((state) => state.setEmojis);
  const setIsGameOn = useEmojiStore((state) => state.setGameOn);

  async function getEmojiDatafromAPI() {
    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = (await response.json()) as EmojiData[];
      const dataSlice = getDataSlice(data);

      setEmojidata(dataSlice);
      setIsGameOn(true);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  function startGame(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    getEmojiDatafromAPI();
  }

  return { isGameOn, startGame, emojisdata, getEmojiDatafromAPI };
}

function getDataSlice(data: EmojiData[]) {
  const randomIndices = getRandomSample(data, 10);
  const dataSlice = randomIndices.map((randomData: EmojiData) =>
    randomData ? randomData : {}
  );
  return dataSlice;
}
