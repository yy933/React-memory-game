"use client";
import { useEffect } from "react";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useMatchingLogic } from "@/hooks/useMatchingLogic";
import MemoryCardList from "@/components/MemoryCardList";

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
      <MemoryCardList handleClickAction={turnCard} data={emojisdata} />
    </main>
  );
}
