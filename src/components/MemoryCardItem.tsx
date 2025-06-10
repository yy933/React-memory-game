"use client";

import clsx from "clsx";
import { MemoryCardItemProps } from "@/types";
// import {useState} from "react";
export default function MemoryCardItem({
  name,
  index,
  htmlCode,
  handleClickAction,
  selectedCards,
  matchedCards,
}: MemoryCardItemProps) {
  const isSelected: boolean =
    Array.isArray(selectedCards) &&
    selectedCards.some((card) => card.index === index);
  const isMatched: boolean =
    Array.isArray(matchedCards) &&
    matchedCards.some((card) => card.index === index);

  const handleClick = () => {
    if (!isSelected && !isMatched) {
      handleClickAction(name, index);
    }
  };

  return (
    <li className="card-item">
      <button
        type="button"
        className={clsx("btn", "btn--emoji", {
          "btn--emoji--matched": isMatched,
          "btn--emoji--selected": isSelected,
        })}
        onClick={handleClick}
        disabled={isMatched}
      >
        <div
          className={clsx("card-face", "card-face--front")}
          dangerouslySetInnerHTML={{ __html: htmlCode.join("") }}
        />
        <div className={clsx("card-face", "card-face--back")}>?</div>
      </button>
    </li>
  );
}
