// game/page.tsx
"use client";
import MemoryCard from "@/components/MemoryCard";

export default function GamePage() {
  function turnCard() {
    console.log("Memory card clicked");
  }
  return (
    <main>
      <MemoryCard handleClick={turnCard} />
    </main>
  );
}
