import React from "react";
import RegularButton from "./RegularButton";
import Select from "./Select";
import { FormProps } from "@/types";


export default function Form({ handleSubmit, handleChange }: FormProps) {
  return (
    <div className="container">
      <form className="wrapper">
        <Select handleChange={handleChange} />
        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
