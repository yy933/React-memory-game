"use client";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useMatchingLogic } from "@/hooks/useMatchingLogic";
import MemoryCardList from "@/components/MemoryCardList";
import AssistiveTechInfo from "@/components/AssistiveTechInfo";
import GameOver from "@/components/GameOver";
import StartGameBtn from "@/components/StartGameBtn";
import Confetti from "react-confetti";

export default function GamePage() {
  const emojisData = useEmojiStore((state) => state.emojisdata);
  const areAllCardsMatched = useEmojiStore((state) => state.areAllCardsMatched);
  const { startGame, resetGame } = useGameLogic();
  const { turnCard, selectedCards, matchedCards, resetSelectedCards } = useMatchingLogic();

 

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
      {emojisData.length === 0 ? (
        <StartGameBtn handleSubmit={startGame} />
      ) : (
        <MemoryCardList
          handleClickAction={turnCard}
          data={emojisData}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}
    </main>
  );
}
