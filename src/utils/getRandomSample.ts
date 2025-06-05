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
  return dataSlice;
}
