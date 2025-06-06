"use client";
import { useEffect } from "react";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useMatchingLogic } from "@/hooks/useMatchingLogic";
import MemoryCard from "@/components/MemoryCard";

export default function GamePage() {
  const emojisdata = useEmojiStore((state) => state.emojisdata);
  const { getEmojiDatafromAPI } = useGameLogic();
  const { turnCard } = useMatchingLogic();
  useEffect(() => {
    if (emojisdata.length === 0) {
      getEmojiDatafromAPI();
    }
  }, [emojisdata, getEmojiDatafromAPI]);

  return (
    <main>
      <MemoryCard handleClickAction={turnCard} />
    </main>
  );
}
