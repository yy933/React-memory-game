"use client";

import ErrorCard from "@/components/ErrorCard";
import StartGameBtn from "@/components/StartGameBtn";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { useGameLogic } from "@/hooks/useGameLogic";

export default function Home() {
  const isError = useEmojiStore((state) => state.isError);
  const isGameOn = useEmojiStore((state) => state.isGameOn);
  const { startGame, resetError } = useGameLogic();
  return (
    <main>
      {isError ? (
        <ErrorCard handleClick={resetError} />
      ) : (
        !isGameOn && <StartGameBtn handleSubmit={startGame} />
      )}
    </main>
  );
}
