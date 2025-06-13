import React from "react";
import RegularButton from "./RegularButton";
import { HandleSubmitProps } from "@/types";
// import Link from "next/link";

export default function StartGameBtn({ handleSubmit }: HandleSubmitProps) {
  return (
    <div className="container">
      <div className="form__inner-wrapper">{/*Category select goes here*/}</div>
      <div className="form__inner-wrapper">{/*Number select goes here*/}</div>
      <form className="wrapper">
        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
