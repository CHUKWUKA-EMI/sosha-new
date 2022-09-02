export type EmojiType = {
  emoji: string;
  description: string;
  keywords: Array<string>;
  category: string;
};

export type EmojiMapType = {
  categoryName: string;
  children: Array<EmojiType>;
  keywords: string[];
  descriptions: string[];
};
