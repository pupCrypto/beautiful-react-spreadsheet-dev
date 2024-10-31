import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { editCell, setActiveCell, setCellValue } from "./slice.ts";
import { useMergeBitmap } from "../merge/hooks";


export function useCellFontSize(colIdx: number, rowIdx: number) {
  return useAppSelector(state => state.cells.cells[rowIdx][colIdx].fontSize);
}

export function useDispatchSetFontSize(colIdx: number, rowIdx: number) {
  const dispatch = useAppDispatch();
  return (v: number) => {
    dispatch(editCell({ colIdx, rowIdx, data: { fontSize: v } }));
  }
}

export function useCellItalic(colIdx: number, rowIdx: number) {
  return useAppSelector(state => state.cells.cells[rowIdx][colIdx].italic);
}

export function useDispatchSetItalic(colIdx: number, rowIdx: number) {
  const dispatch = useAppDispatch();
  return (v: boolean) => {
    dispatch(editCell({ colIdx, rowIdx, data: { italic: v } }));
  }
}

export function useActiveCell() {
  return useAppSelector(state => state.cells.activeCell);
}

export function useCell(colIdx: number, rowIdx: number) {
  return useAppSelector(state => state.cells.cells[rowIdx][colIdx]);
}

export function useCellValue(colIdx: number, rowIdx: number): string {
  return useAppSelector(state => state.cells.cells[rowIdx][colIdx].value);
}

export function useCellBold(colIdx: number, rowIdx: number): boolean {
  return useAppSelector(state => state.cells.cells[rowIdx][colIdx].bold);
}

export function useCellsSelector() {
  return useAppSelector(state => state.cells);
}

export function useDispatchSetBold(colIdx: number, rowIdx: number) {
  const editCell = useDispatchEditCell(colIdx, rowIdx);
  return (bold: boolean) => {
    editCell({ bold });
  }
}

export function useIsActiveCell(colIdx: number, rowIdx: number): boolean {
  return useAppSelector(
    state => state.cells.activeCell.colIdx === colIdx && state.cells.activeCell.rowIdx === rowIdx
  );
}

export function useIsActiveColumn(colIdx: number): boolean {
  const activeCell = useAppSelector(state => state.cells.activeCell);
  const mergeBitmap = useMergeBitmap();
  const flag = (
      activeCell.colIdx === colIdx || (
      mergeBitmap[activeCell?.rowIdx]?.[colIdx] &&
      mergeBitmap[activeCell?.rowIdx]?.[activeCell?.colIdx]
    )
  );
  if (flag) {
    return true;
  }
  return activeCell.colIdx === colIdx;
}

export function useIsActiveRow(rowIdx: number): boolean {
  const activeCell = useAppSelector(state => state.cells.activeCell);
  const mergeBitmap = useMergeBitmap();
  const flag = (
      activeCell.rowIdx === rowIdx || (
      mergeBitmap[rowIdx]?.[activeCell?.colIdx] &&
      mergeBitmap[activeCell?.rowIdx]?.[activeCell?.colIdx]  // TODO: something wrong here
    )
  );
  if (flag) {
    return true;
  }
  return activeCell.rowIdx === rowIdx;
}

export function useDispatchEditCell(colIdx: number, rowIdx: number) {
  const dispatch = useAppDispatch();
  return (data: object) => {
    dispatch(editCell({ colIdx, rowIdx, data }));
  }
}

export function useDispatchSetActiveCell(): (colIdx: number, rowIdx: number) => void {
  const dispatch = useAppDispatch();
  return (colIdx: number, rowIdx: number) => {
    dispatch(setActiveCell({colIdx, rowIdx}));
  };
}

export function useDispatchSetCellValue(): (colIdx: number, rowIdx: number, value: string) => void {
  const dispatch = useAppDispatch();
  return (colIdx: number, rowIdx: number, value: string) => {
    dispatch(setCellValue({ colIdx, rowIdx, value }));
  };
}
