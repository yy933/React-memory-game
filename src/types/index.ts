// handle event type
export type HandleMouseEvent = (e: React.MouseEvent<HTMLButtonElement>) => void;
export type HandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => void;

// common component types
export interface RegularButtonProps {
  handleClick: HandleMouseEvent;
  children: React.ReactNode;
}

export interface HandleSubmitProps {
  handleSubmit: HandleMouseEvent;
}

// Form related components props type
export interface FormProps extends HandleSubmitProps {
  handleChange: HandleChange;
  isFirstRender: boolean;
}

export interface SelectProps {
  handleChange: HandleChange;
}

export interface OptionProps {
  valueArray: {
    name?: string;
    value: string;
  }[];
}

// GameOver related components props
export interface GameOverProps {
  handleClick: HandleMouseEvent;
}

export interface ErrorCardProps {
  handleClick: HandleMouseEvent;
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
  isFirstRender: boolean;
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
  setIsFirstRender: (isFirstRender: boolean) => void;
}
