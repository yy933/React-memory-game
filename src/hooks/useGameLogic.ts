import { useState } from "react";

export function useGameLogic() {
  const [isGameOn, setIsGameOn] = useState(false);

  function startGame(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsGameOn(true);
  }

  return { isGameOn, startGame };
}
