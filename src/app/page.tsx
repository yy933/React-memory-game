"use client";

import ErrorCard from "@/components/ErrorCard";
import Form from "@/components/Form";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { useGameLogic } from "@/hooks/useGameLogic";

export default function Home() {
  const isError = useEmojiStore((state) => state.isError);
  const isGameOn = useEmojiStore((state) => state.isGameOn);
  const { startGame, handleFormChange, resetError } = useGameLogic();
  return (
    <main>
      {isError ? (
        <ErrorCard handleClick={resetError} />
      ) : (
        !isGameOn && (
          <Form
            handleSubmit={startGame}
            handleChange={handleFormChange}
          />
        )
      )}
    </main>
  );
}
