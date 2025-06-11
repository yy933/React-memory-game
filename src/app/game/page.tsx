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
  const { getEmojiDatafromAPI, resetGame } = useGameLogic();
  const { turnCard, selectedCards, matchedCards, resetSelectedCards } = useMatchingLogic();

  // if the emoji data is empty, get the emoji data from API
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
          <GameOver
            handleClick={() => {
              resetGame();
              resetSelectedCards();
            }}
          />
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
