"use client";
import MemoryCardItem from "./MemoryCardItem";
import { MemoryCardListProps } from "@/types";

export default function MemoryCard({
  handleClickAction,
  data,
  selectedCards,
  matchedCards
}: MemoryCardListProps) {
  if (data.length === 0) {
    return null;
  }
  
  return (
    <ul className="card-container">
      {data.map((emojiData, index) =>{ 
        return(
        <MemoryCardItem
          key={index}
          name={emojiData.name ?? "unknown"}
          index={index}
          htmlCode={emojiData?.htmlCode ?? []}
          handleClickAction={handleClickAction}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )})}
    </ul>
  );
}
