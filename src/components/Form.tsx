import React from "react";
import RegularButton from "./RegularButton";
import Select from "./Select";
import { FormProps } from "@/types";
import { useRef, useEffect } from "react";


export default function Form({ handleSubmit, handleChange, isFirstRender }: FormProps) {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isFirstRender && divRef.current) {
        divRef.current.focus();
      }
    }, 100); 

    return () => clearTimeout(timer);
  }, [isFirstRender]);
  
  return (
    <div className="container" ref={divRef} tabIndex={-1}>
      <form className="wrapper">
        <Select handleChange={handleChange}  />
        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
