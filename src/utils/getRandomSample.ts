export function getRandomSample<T>(array: T[], size: number): T[] {
  if (array.length <= size) return array;
  const maxStartIndex = array.length - size;
  const startIndex = Math.floor(Math.random() * (maxStartIndex + 1));
  return array.slice(startIndex, startIndex + size);
}
