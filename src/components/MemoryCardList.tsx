"use client";
import MemoryCardItem from "./MemoryCardItem";
import { MemoryCardProps } from "@/types";

export default function MemoryCard({
  handleClickAction,
  data,
}: MemoryCardProps) {
  return (
    <ul className="card-container">
      {data.map((emojiData, index) => (
        <MemoryCardItem
          key={index}
          name={emojiData.name ?? "unknown"}
          index={index}
          htmlCode={emojiData?.htmlCode ?? []}
          handleClickAction={handleClickAction}
        />
      ))}
    </ul>
  );
}
