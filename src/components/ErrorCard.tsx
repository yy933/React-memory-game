"use client";
import { useRef, useEffect } from "react";
import RegularButton from "./RegularButton";
import HomeLink from "./HomeLink";
import { ErrorCardProps } from "@/types";
export default function ErrorCard({ handleClick }: ErrorCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, []);
  return (
    <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
      <p className="p--large">Sorry, there was an error.</p>
      <p className="p--regular">
        Please come back later or click the button below to try restarting the
        game.
      </p>
      <RegularButton handleClick={handleClick}>
        <HomeLink>Back to Home</HomeLink>
      </RegularButton>
    </div>
  );
}
