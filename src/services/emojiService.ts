import { EmojiData } from "@/types";
import { useEffect } from "react";

export async function fetchEmojisByCategory(category: string) {
  if (typeof window !== "undefined") {
    // check if data is cached in local storage

    const cacheKey = `emojisData-${category}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < 5 * 60 * 1000) {
        return data as EmojiData[];
      } else {
        localStorage.removeItem(cacheKey);
      }
    }

    // if not, fetch data from API
    const response = await fetch(
      `https://emojihub.yurace.pro/api/all/category/${category}`
    );
    if (!response.ok) throw new Error("Could not fetch data");
    const data = (await response.json()) as EmojiData[];

    const payload = {
      data,
      timestamp: Date.now(),
    };

    // save fetched data to  local storage
    localStorage.setItem(cacheKey, JSON.stringify(payload));

    return data;
  }
}

// clear emoji cache on unload
export function useClearEmojisCacheOnUnload() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("emojisData-")) {
          localStorage.removeItem(key);
        }
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);
}
