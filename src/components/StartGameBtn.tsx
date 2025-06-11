import React from "react";
import RegularButton from "./RegularButton";
import { StartGameBtnProps } from "@/types";
import Link from "next/link";

export default function StartGameBtn({ handleSubmit }: StartGameBtnProps) {
  return (
    <form className="wrapper">
      <RegularButton handleClick={handleSubmit}>
        <Link href="/game">Start Game</Link>
      </RegularButton>
    </form>
  );
}
