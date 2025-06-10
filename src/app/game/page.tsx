"use client";
import { useEffect } from "react";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useMatchingLogic } from "@/hooks/useMatchingLogic";
import MemoryCardList from "@/components/MemoryCardList";
import AssistiveTechInfo from "@/components/AssistiveTechInfo";

export default function GamePage() {
  const emojisData = useEmojiStore((state) => state.emojisdata);
  const { getEmojiDatafromAPI } = useGameLogic();
  const { turnCard, selectedCards, matchedCards } = useMatchingLogic();
  useEffect(() => {
    if (emojisData.length === 0) {
      getEmojiDatafromAPI();
    }
  }, [emojisData, getEmojiDatafromAPI]);

  return (
    <main>
      <AssistiveTechInfo emojisData={emojisData} matchedCards={matchedCards} />
      <MemoryCardList
        handleClickAction={turnCard}
        data={emojisData}
        selectedCards={selectedCards}
        matchedCards={matchedCards}
      />
    </main>
  );
}
