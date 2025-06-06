import { useEffect, useState } from "react";
import { useEmojiStore } from "@/stores/useEmojiStore";
export function useMatchingLogic() {
  const emojisdata = useEmojiStore((state) => state.emojisdata);
  const matchedCards = useEmojiStore((state) => state.matchedCards);
  const setMatchedCards = useEmojiStore((state) => state.setMatchedCards);
  const setGameOver = useEmojiStore((state) => state.setGameOver);

  const [selectedCards, setSelectedCards] = useState<
    { name: string; index: number }[]
  >([]);

  // if selected cards match, add them to matched cards and reset selected cards
  useEffect(() => {
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      setMatchedCards([...matchedCards, ...selectedCards]);

      setTimeout(() => {
        setSelectedCards([]);
      }, 500);
    }
  }, [selectedCards, matchedCards, setMatchedCards]);

  useEffect(() => {
    if (emojisdata.length && matchedCards.length === emojisdata.length) {
      setGameOver(true);
    }
  }, [matchedCards, emojisdata, setGameOver]);

  // when user selecting a card, add it to selected cards array
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
