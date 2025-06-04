"use client";
import Form from "./Form";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useEmojiStore } from "@/stores/useEmojiStore";

export default function ClientGame() {
  const { startGame } = useGameLogic();
  const isGameOn = useEmojiStore((state) => state.isGameOn);
  return <main>{!isGameOn && <Form handleSubmit={startGame} />}</main>;
}
