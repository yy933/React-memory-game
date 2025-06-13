import { EmojiData } from "@/types";

export async function fetchEmojisByCategory(category: string) {
  const response = await fetch(
    `https://emojihub.yurace.pro/api/all/category/${category}`
  );
  if (!response.ok) throw new Error("Could not fetch data");
  const data = (await response.json()) as EmojiData[];
  return data;
}
