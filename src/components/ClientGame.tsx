"use client";
import Form from "./Form";
import { useGameLogic } from "@/hooks/useGameLogic";

export default function ClientGame() {
  const { isGameOn, startGame } = useGameLogic();
  return <main>{!isGameOn && <Form handleSubmit={startGame} />}</main>;
}
