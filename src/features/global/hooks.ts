import { useAppSelector } from "../../app/hooks";


export function useCellHeight(): number {
  return useAppSelector(state => state.global.cell.height);
}

export function useCellWidth(): number {
  return useAppSelector(state => state.global.cell.width);
}
