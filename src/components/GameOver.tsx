import RegularButton from "./RegularButton";
import { GameOverProps } from "@/types";
import HomeLink from "./HomeLink";
import Link from "next/link";

export default function GameOver({ handleClick }: GameOverProps) {
  return (
    <div className="wrapper wrapper--accent">
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
