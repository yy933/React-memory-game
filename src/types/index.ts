// handle event type
export type HandleEvent = (e: React.MouseEvent<HTMLButtonElement>) => void;

// common component types
export interface RegularButtonProps {
  handleClick: HandleEvent;
  children: React.ReactNode;
}

export interface HandleSubmitProps {
  handleSubmit: HandleEvent;
}
export interface GameOverProps {
  handleClick: HandleEvent;
}

export interface HomeLinkProps {
  children: React.ReactNode;
  className?: string;
}

// game data related types
export interface EmojiData {
  name?: string;
  category?: string;
  group?: string;
  htmlCode?: string[];
  unicode?: string[];
}

export interface MemoryCard {
  name: string;
  index: number;
}

export interface MemoryCardListProps {
  handleClickAction: (name: string, index: number) => void;
  data: EmojiData[];
  selectedCards: MemoryCard[];
  matchedCards: MemoryCard[];
}

export interface MemoryCardItemProps {
  name: string;
  index: number;
  htmlCode: string[];
  handleClickAction: (name: string, index: number) => void;
  selectedCards: MemoryCard[];
  matchedCards: MemoryCard[];
}

// assistive tech info type
export interface AssistiveTechInfoProps {
  emojisData: EmojiData[];
  matchedCards: MemoryCard[];
}

// Emoji store types
export interface EmojiStore {
  emojisdata: EmojiData[];
  isGameOn: boolean;
  matchedCards: MemoryCard[];
  areAllCardsMatched: boolean;
  setEmojis: (emojis: EmojiData[]) => void;
  setGameOn: (isGameOn: boolean) => void;
  setMatchedCards: (cards: MemoryCard[]) => void;
  setAreAllCardsMatched: (areAllCardsMatched: boolean) => void;
}
