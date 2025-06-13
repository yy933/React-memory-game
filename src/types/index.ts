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

export interface FormProps extends HandleSubmitProps {
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}
export interface GameOverProps {
  handleClick: HandleEvent;
}

export interface ErrorCardProps {
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

export interface formData {
  category: string;
  number: number;
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
  isError: boolean;
  areAllCardsMatched: boolean;
  isLoading: boolean;
  formData: formData;
  setFormData: (formData: { category: string; number: number }) => void;
  setIsLoading: (isLoading: boolean) => void;
  setEmojis: (emojis: EmojiData[]) => void;
  setGameOn: (isGameOn: boolean) => void;
  setMatchedCards: (cards: MemoryCard[]) => void;
  setAreAllCardsMatched: (areAllCardsMatched: boolean) => void;
  setIsError: (isError: boolean) => void;
}
