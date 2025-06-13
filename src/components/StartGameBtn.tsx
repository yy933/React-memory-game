import React from "react";
import RegularButton from "./RegularButton";
import { HandleSubmitProps } from "@/types";

export default function StartGameBtn({ handleSubmit }: HandleSubmitProps) {
  return (
    <form className="wrapper">
      <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
    </form>
  );
}
