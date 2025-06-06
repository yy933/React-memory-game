import { EmojiButtonProps } from "@/types";
export default function EmojiButton({
  content,
  style,
  handleClickAction,
  name,
  index,
}: EmojiButtonProps) {
  return (
    <button
      className={style}
      onClick={(e) => {
        e.preventDefault();
        handleClickAction(name, index);
      }}
    >
      {content}
    </button>
  );
}
