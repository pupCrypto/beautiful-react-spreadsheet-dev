export function useKeyRows(): number[] {
  return Array(100).fill(0).map((elem, index) => index + 1);
}