// handle event type
export type HandleEvent = (e: React.MouseEvent<HTMLButtonElement>) => void;

// common component types
export type RegularButtonProps = {
  handleClick: HandleEvent;
  children: React.ReactNode;
};

export type HandleSubmitProps = { handleSubmit: HandleEvent };
export type FormProps = HandleSubmitProps;
export type GameOverProps = { handleClick: HandleEvent };

export type HomeLinkProps = {
  children: React.ReactNode;
  className?: string;
};

// game data related types
export type EmojiData = {
  name?: string;
  category?: string;
  group?: string;
  htmlCode?: string[];
  unicode?: string[];
};

export type MemoryCard = {
  name: string;
  index: number;
};

export type MemoryCardListProps = {
  handleClickAction: (name: string, index: number) => void;
  data: EmojiData[];
  selectedCards: MemoryCard[];
  matchedCards: MemoryCard[];
};

export type MemoryCardItemProps = {
  name: string;
  index: number;
  htmlCode: string[];
  handleClickAction: (name: string, index: number) => void;
  selectedCards: MemoryCard[];
  matchedCards: MemoryCard[];
};

// assistive tech info type
export type AssistiveTechInfoProps = {
  emojisData: EmojiData[];
  matchedCards: MemoryCard[];
};


// Emoji store types
export type EmojiStore = {
  emojisdata: EmojiData[];
  isGameOn: boolean;
  matchedCards: MemoryCard[];
  areAllCardsMatched: boolean;
  setEmojis: (emojis: EmojiData[]) => void;
  setGameOn: (isGameOn: boolean) => void;
  setMatchedCards: (cards: MemoryCard[]) => void;
  setAreAllCardsMatched: (areAllCardsMatched: boolean) => void;
};