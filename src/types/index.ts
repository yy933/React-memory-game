type HandleEvent = (e: React.MouseEvent<HTMLButtonElement>) => void;
export type HandleClickProps = {
  handleClick: HandleEvent;
};

export type HandleSubmitProps = {
  handleSubmit: HandleEvent;
};

// Form props type
export type FormProps = HandleSubmitProps;

// Memory card props type
export type MemoryCardProps = HandleClickProps;

// Regular button props type
export type RegularButtonProps = HandleClickProps & {
  children: React.ReactNode;
};

// Emoji data type
export type EmojiData = {
  name?: string;
  category?: string;
  group?: string;
  htmlCode?: string[];
  unicode?: string[];
};
