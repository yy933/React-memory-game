import { RegularButtonProps } from "@/types";

export default function RegularButton({
  children,
  handleClick,
}: RegularButtonProps) {
  return (
    <button className="btn btn--text" onClick={handleClick}>
      {children}
    </button>
  );
}
