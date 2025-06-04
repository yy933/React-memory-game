"use client";
import Form from "./Form";
import { useGameLogic } from "@/hooks/useGameLogic";
import { useEmojiStore } from "@/stores/useEmojiStore";
export default function ClientGame() {
  const { isGameOn, startGame, emojisdata } = useGameLogic();
  return <main>{!isGameOn && <Form handleSubmit={startGame} />}</main>;
}
