"use client";
import { useEffect } from "react";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useMatchingLogic } from "@/hooks/useMatchingLogic";
import MemoryCardList from "@/components/MemoryCardList";
import AssistiveTechInfo from "@/components/AssistiveTechInfo";
import GameOver from "@/components/GameOver";
import Confetti from "react-confetti";

export default function GamePage() {
  const emojisData = useEmojiStore((state) => state.emojisdata);
  const areAllCardsMatched = useEmojiStore((state) => state.areAllCardsMatched);
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
      {typeof window !== "undefined" && areAllCardsMatched && (
        <>
          <GameOver />
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </>
      )}
      <MemoryCardList
        handleClickAction={turnCard}
        data={emojisData}
        selectedCards={selectedCards}
        matchedCards={matchedCards}
      />
    </main>
  );
}
