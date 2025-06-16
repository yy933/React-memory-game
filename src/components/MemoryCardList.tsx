"use client";
import MemoryCardItem from "./MemoryCardItem";
import { MemoryCardListProps } from "@/types";
import { useMemo } from "react";

export default function MemoryCard({
  handleClickAction,
  data,
  selectedCards,
  matchedCards
}: MemoryCardListProps) {
  const selectedSet = useMemo(
    () => new Set(selectedCards.map((c) => c.index)),
    [selectedCards]
  );
  const matchedSet = useMemo(
    () => new Set(matchedCards.map((c) => c.index)),
    [matchedCards]
  );

  if (data.length === 0) {
    return null;
  }

  
  return (
    <ul className="card-container">
      {data.map((emojiData, index) =>{ 
        return (
          <MemoryCardItem
            key={index}
            name={emojiData.name ?? "unknown"}
            index={index}
            htmlCode={emojiData?.htmlCode ?? []}
            handleClickAction={handleClickAction}
            selectedSet={selectedSet}
            matchedSet={matchedSet}
          />
        );})}
    </ul>
  );
}
