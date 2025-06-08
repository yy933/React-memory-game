import { decode } from "html-entities";
import EmojiButton from "./EmojiButton";
import { MemoryCardItemProps } from "@/types";
export default function MemoryCardItem({
  name,
  index,
  htmlCode,
  handleClickAction,
}: MemoryCardItemProps) {
  const content = htmlCode[0] ? decode(htmlCode[0]) : "?";
  return (
    <li className="card-item">
      <EmojiButton
        name={name ?? "unknown"}
        index={index}
        content={content}
        style="btn btn--emoji"
        handleClickAction={handleClickAction}
      />
    </li>
  );
}
