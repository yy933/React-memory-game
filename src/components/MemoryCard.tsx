"use client";
import EmojiButton from "./EmojiButton";
import { decode } from "html-entities";
import { MemoryCardProps } from "@/types";



export default function MemoryCard({ handleClickAction, emojisdata }: MemoryCardProps) {
 
  const cardEl = emojisdata.map((emojiData, index) => (
    <li key={index} className="card-item">
      <EmojiButton
        name={emojiData.name ?? "unknown"}
        index={index}
        content={
          emojiData?.htmlCode && emojiData.htmlCode[0]
            ? decode(emojiData.htmlCode[0])
            : "?"
        }
        style="btn btn--emoji"
        handleClickAction={handleClickAction}
      />
    </li>
  ));
  

  return <ul className="card-container">{cardEl}</ul>;
}
