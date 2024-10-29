export function useKeyRows(): number[] {
  return Array(10).fill(0).map((elem, index) => index + 1);
}