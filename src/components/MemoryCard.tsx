"use client";
import { MemoryCardProps } from "@/types";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { decode } from "html-entities";
export default function MemoryCard({ handleClickAction }: MemoryCardProps) {
  const emojisdata = useEmojiStore((state) => state.emojisdata);

  const emojiEl = emojisdata.map((emojiData, index) => (
    <li key={index} className="card-item">
      <button className="btn btn--emoji" onClick={handleClickAction}>
        {emojiData?.htmlCode && emojiData.htmlCode[0]
          ? decode(emojiData.htmlCode[0])
          : "?"}
      </button>
    </li>
  ));
  console.log("emojiEl", emojiEl);

  return <ul className="card-container">{emojiEl}</ul>;
}
