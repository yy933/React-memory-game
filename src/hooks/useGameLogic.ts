import { useState } from "react";
import { EmojiData } from '@/types'
export function useGameLogic() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisdata, setEmojidata] = useState<EmojiData[]>([])
  console.log(emojisdata);

  async function startGame(e: React.MouseEvent<HTMLButtonElement>) {
    
    e.preventDefault();
    try {
      const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature");
      if (!response.ok){
        throw new Error('Could not fetch data')
      }
      const data = await response.json()
      const dataSample = data.slice(0, 5)
      
      setEmojidata(dataSample)
      setIsGameOn(true);
    } catch(error) {
      console.error("Error: ", error)

    }
    
  }

  return { isGameOn, startGame };
}
