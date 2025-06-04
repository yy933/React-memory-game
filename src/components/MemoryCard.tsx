'use client';
import { MemoryCardProps } from "@/types";
// import { useGameLogic } from "@/hooks/useGameLogic";
import { useEmojiStore } from "@/stores/useEmojiStore";
import { decode } from "html-entities";
export default function MemoryCard({ handleClick }: MemoryCardProps) {
  const emojisdata = useEmojiStore((state) => state.emojisdata);
  // const { emojisdata } = useGameLogic();
  const emojiArray = [
    "🐶",
    "🐷",
    "🐙",
    "🐛",
    "🐵",
    "🐶",
    "🐷",
    "🐙",
    "🐛",
    "🐵",
  ];

  const emojiEl = emojisdata.map((emojiData, index) => (
    <li key={index} className="card-item">
      <button className="btn btn--emoji" onClick={handleClick}>
        {emojiData?.htmlCode && emojiData.htmlCode[0]
        ? decode(emojiData.htmlCode[0])
        : "?"}
      </button>
    </li>
  ));
  console.log("emojiEl", emojiEl);

  return <ul className="card-container">{emojiEl}</ul>;
}
