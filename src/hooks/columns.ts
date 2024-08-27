export function useKeyColumns(): Array<string> {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array(8).fill(0).map((startChar, index) => characters.at(startChar + index));
}