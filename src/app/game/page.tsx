// game/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useEmojiStore } from "@/stores/useEmojiStore";
import MemoryCard from "@/components/MemoryCard";

export default function GamePage() {
  const emojisdata = useEmojiStore((state) => state.emojisdata);
  const router = useRouter();

  // 防呆：如果沒有 emoji 資料，導回首頁
  useEffect(() => {
    if (emojisdata.length === 0) {
      router.replace("/");
    
    }
  }, [emojisdata, router]);
  function turnCard() {
    console.log("Memory card clicked");
  }
  return (
    <main>
      <MemoryCard handleClickAction={turnCard} />
    </main>
  );
}
