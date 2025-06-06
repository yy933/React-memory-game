import { useEffect, useState } from "react";
export function useMatchingLogic() {
  const [selectedCards, setSelectedCards] = useState<
    { name: string; index: number }[]
  >([]);
  const [matchedCards, setMatchedCards] = useState<
    { name: string; index: number }[]
  >([]);
  console.log("MatchedCards:",matchedCards)
  console.log("selectedCards: ", selectedCards);
  useEffect(() => {
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      setMatchedCards((prevMatchedCards) => [
        ...prevMatchedCards,
        ...selectedCards
      ]);
      setTimeout(() => {
        setSelectedCards([]);
      }, 500);
    }
  }, [selectedCards]);

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
