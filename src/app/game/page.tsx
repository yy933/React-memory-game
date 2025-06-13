"use client";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useMatchingLogic } from "@/hooks/useMatchingLogic";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MemoryCardList from "@/components/MemoryCardList";
import AssistiveTechInfo from "@/components/AssistiveTechInfo";
import GameOver from "@/components/GameOver";
import Form from "@/components/Form";
import Confetti from "react-confetti";

export default function GamePage() {
  const router = useRouter();
  const isError = useEmojiStore((state) => state.isError);
  const isFirstRender = useEmojiStore((state) => state.isFirstRender);
  const emojisData = useEmojiStore((state) => state.emojisdata);
  const areAllCardsMatched = useEmojiStore((state) => state.areAllCardsMatched);
  const { startGame, resetGame, handleFormChange } = useGameLogic();
  const { turnCard, selectedCards, matchedCards, resetSelectedCards } =
    useMatchingLogic();

  // If there is an error, redirect to the home page
  useEffect(() => {
    if (isError) {
      router.push("/");
    }
  }, [isError, router]);

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
        <Form handleSubmit={startGame} handleChange={handleFormChange} isFirstRender={isFirstRender}/>
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
