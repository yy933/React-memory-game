"use client";
import StartGameBtn from "./StartGameBtn";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useEmojiStore } from "@/stores/useEmojiStore";

export default function ClientGame() {
  const { startGame } = useGameLogic();
  const isGameOn = useEmojiStore((state) => state.isGameOn);
  return <main>{!isGameOn && <StartGameBtn handleSubmit={startGame} />}</main>;
}
