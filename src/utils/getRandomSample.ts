export function getRandomSample<T>(data: T[], size: number): T[] {
  if (data.length <= size) return data;
  const randomIndicesArray: number[] = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (!randomIndicesArray.includes(randomIndex)) {
      randomIndicesArray.push(randomIndex);
    } else {
      i--;
    }
  }
  const dataSlice = randomIndicesArray.reduce<T[]>((array, index) => {
    array.push(data[index]);
    return array;
  }, []);

  function getEmojiArray(data: T[]) {
    const pairedEmojisArray: T[] = [...data, ...data];
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pairedEmojisArray[i];
      pairedEmojisArray[i] = pairedEmojisArray[j];
      pairedEmojisArray[j] = temp;
    }

    return pairedEmojisArray;
  }
  return getEmojiArray(dataSlice);
}
