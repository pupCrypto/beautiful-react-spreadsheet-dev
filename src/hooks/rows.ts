export function useKeyRows(): number[] {
  return Array(200).fill(0).map((elem, index) => index + 1);
}