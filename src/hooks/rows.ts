export function useKeyRows() {
  return Array(500).fill(0).map((elem, index) => index + 1);
}