"use client";
import clsx from "clsx";
import { MemoryCardItemProps } from "@/types";
import React from "react";

const MemoryCardItem = React.memo(function MemoryCardItem({
  name,
  index,
  htmlString,
  handleClickAction,
  selectedSet,
  matchedSet,
}: MemoryCardItemProps) {
  const isSelected = selectedSet.has(index);
  const isMatched = matchedSet.has(index);

  const handleClick = () => {
    if (!isSelected && !isMatched) {
      handleClickAction(name, index);
    }
  };
 
  const btnAria = isMatched
    ? `${name}. Matched.`
    : isSelected
    ? `${name}}. Not matched yet.`
    : "Card upside down.";

  return (
    <li className="card-item">
      <button
        type="button"
        className={clsx("btn", "btn--emoji", {
          "btn--emoji--matched": isMatched,
          "btn--emoji--selected": isSelected,
        })}
        onClick={handleClick}
        disabled={isMatched || isSelected}
        aria-live="polite"
        aria-label={`Position ${index + 1}. ${btnAria}`}
      >
        <div
          className={clsx("card-face", "card-face--front")}
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
        <div className={clsx("card-face", "card-face--back")}>?</div>
      </button>
    </li>
  );
});

export default MemoryCardItem;
