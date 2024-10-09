import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { setActiveCell } from "./cellsSlice.ts";

export function useActiveCell() {
  return useAppSelector(state => state.cells.activeCell);
}

export function useIsActiveCell(colIdx: number, rowIdx: number): boolean {
  const activeCell = useAppSelector(state => state.cells.activeCell);
  return activeCell.colIdx === colIdx && activeCell.rowIdx === rowIdx;
}

export function useIsActiveColumn(colIdx: number): boolean {
  const activeCell = useAppSelector(state => state.cells.activeCell);
  return activeCell.colIdx === colIdx;
}

export function useIsActiveRow(rowIdx: number): boolean {
  const activeCell = useAppSelector(state => state.cells.activeCell);
  return activeCell.rowIdx === rowIdx;
}

export function useDispatchSetActiveCell(): (colIdx: number, rowIdx: number) => void {
  const dispatch = useAppDispatch();
  return (colIdx: number, rowIdx: number) => {
    dispatch(setActiveCell({colIdx, rowIdx}));
  };
}
