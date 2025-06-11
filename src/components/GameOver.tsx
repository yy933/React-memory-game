import RegularButton from "./RegularButton";
import { GameOverProps } from "@/types";
import HomeLink from "./HomeLink";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function GameOver({ handleClick }: GameOverProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div className="wrapper wrapper--accent" ref={ref} tabIndex={-1}>
      <p className="p--large">You&apos;ve matched all the memory cards!</p>
      <RegularButton handleClick={handleClick}>
        <Link href="/game">Play again</Link>
      </RegularButton>

      <RegularButton handleClick={handleClick}>
        <HomeLink>Back to Home</HomeLink>
      </RegularButton>
    </div>
  );
}
