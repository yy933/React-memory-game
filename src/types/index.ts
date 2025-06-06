// Event handler function type
type HandleEvent = (e: React.MouseEvent<HTMLButtonElement>) => void;
export type HandleClickProps = {
  handleClick: HandleEvent;
};

export type HandleSubmitProps = {
  handleSubmit: HandleEvent;
};

// Form props type
export type FormProps = HandleSubmitProps;

// Memory Card props type
export type MemoryCardProps = {
  handleClickAction: (name: string, index: number) => void;
  data: EmojiData[];
};

// Emoji Button props type
export type EmojiButtonProps = {
  content: string;
  style?: string;
  name: string;
  index: number;
  handleClickAction: (name: string, index: number) => void;
};

// Regular button props type
export type RegularButtonProps = HandleClickProps & {
  children: React.ReactNode;
};

// Home link props type
export type HomeLinkProps = {
  children: React.ReactNode;
  className?: string;
};

// Emoji data type
export type EmojiData = {
  name?: string;
  category?: string;
  group?: string;
  htmlCode?: string[];
  unicode?: string[];
};
