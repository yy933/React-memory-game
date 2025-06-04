"use client";

import { useState } from "react";
import Form from "./Form";
import MemoryCard from "./MemoryCard";

export default function ClientGame() {
  const [isGameOn, setIsGameOn] = useState(false);

  function startGame(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsGameOn(true);
  }

  function turnCard() {
    console.log("Memory card clicked");
  }

  return (
    <>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} />}
    </>
  );
}
