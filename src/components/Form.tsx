import React from "react";
import RegularButton from "./RegularButton";
import { FormProps } from "@/types";

export default function Form({ handleSubmit }: FormProps) {
  return (
    <form className="wrapper">
      <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
    </form>
  );
}
