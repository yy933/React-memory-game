import { useEffect, useState } from "react";
import { useEmojiStore } from "@/stores/useEmojiStore";
export function useMatchingLogic() {
  const emojisdata = useEmojiStore((state) => state.emojisdata);
  const matchedCards = useEmojiStore((state) => state.matchedCards);
  const setMatchedCards = useEmojiStore((state) => state.setMatchedCards);
  const setAreAllCardsMatched = useEmojiStore((state) => state.setAreAllCardsMatched);

  const [selectedCards, setSelectedCards] = useState<
    { name: string; index: number }[]
  >([]);

  // if selected cards match, add them to matched cards and reset selected cards
  useEffect(() => {
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      // avoid the cards that already matched to be added again
      const newMatchedCards = selectedCards.filter((card) => {
        return !matchedCards.some((prevCard) => prevCard.index === card.index);
      });
      setMatchedCards([...matchedCards, ...newMatchedCards]);

      setTimeout(() => {
        setSelectedCards([]);
      }, 500);
    } else if (selectedCards.length === 2) {
      setTimeout(() => {
        setSelectedCards([]);
      }, 500);
    }
  }, [selectedCards, setMatchedCards]);

  // if all cards are matched, set game over
  useEffect(() => {
    if (emojisdata.length && matchedCards.length === emojisdata.length) {
      setAreAllCardsMatched(true);
    }
  }, [matchedCards, emojisdata, setAreAllCardsMatched]);

  // when user selecting a card, add it to selected cards array
  function turnCard(name: string, index: number) {
    const selectedCardEntry = selectedCards.find(
      (card) => card.index === index
    );
    if (!selectedCardEntry && selectedCards.length < 2) {
      setSelectedCards((prevSelectedCards) => [
        ...prevSelectedCards,
        { name, index }
      ]);
    } else if (!selectedCardEntry && selectedCards.length === 2) {
      setSelectedCards([{ name, index }]);
    }
  }

  return { turnCard, selectedCards, matchedCards };
}
