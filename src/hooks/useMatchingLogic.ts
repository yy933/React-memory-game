import { useEmojiStore } from "@/stores/useEmojiStore";
import { useState } from "react";
export function useMatchingLogic() {
  const [selectedCards, setSelectedCards] = useState<
    { name: string; index: number }[]
  >([]);

  const emojisdata = useEmojiStore((state) => state.emojisdata);
  function turnCard(name: string, index: number) {
    const selectedCardEntry = selectedCards.find(
      (card) => card.index === index
    );
    if (!selectedCardEntry && selectedCards.length < 2) {
      setSelectedCards((prevSelectedCards) => [
        ...prevSelectedCards,
        { name, index },
      ]);
    } else if (!selectedCardEntry && selectedCards.length === 2) {
      setSelectedCards([{ name, index }]);
    }
  }

  return { turnCard, selectedCards };
}
