"use client";
import { useEffect } from "react";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { useGameLogic } from "@/hooks/useGameLogic"; 
import MemoryCard from "@/components/MemoryCard";

export default function GamePage() {
  const emojisdata = useEmojiStore((state) => state.emojisdata);
  const { getEmojiDatafromAPI } = useGameLogic();
    useEffect(() => {
    if (emojisdata.length === 0) {
      getEmojiDatafromAPI()
    }
  }, [emojisdata, getEmojiDatafromAPI]);
  function turnCard() {
    console.log("Memory card clicked");
  }
  return (
    <main>
      <MemoryCard handleClickAction={turnCard} />
    </main>
  );
}
