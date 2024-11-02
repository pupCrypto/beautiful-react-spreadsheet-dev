import { clear } from "@testing-library/user-event/dist/clear";
import {
  useCellFontSize,
  useDispatchSetFontSize,
  useCellItalic,
  useDispatchSetItalic,
  useCellValue,
  useCellBold,
  useDispatchSetBold,
  useCellsSelector,
  useDispatchSetCellValue,
  useDispatchSetActiveCell,
  useSpreadsheetSize,
  useBorders,
  useDispatchSetBorders,
  useDispatchSetPressedCell,
  usePressedCell,
  useDispatchSetSelectedRange,
  useSelectedRange,
} from "./features/cells/hooks";
import { Borders } from "./features/cells/slice";
import { useDispatchSetMerge } from "./features/merge/hooks";


export function useApi() {
  const { colsCount, rowsCount } = useSpreadsheetSize();
  const merge = useDispatchSetMerge();
  const setCellValue = useDispatchSetCellValue();
  const cellsSelector = useCellsSelector();
  const setActiveCell = useDispatchSetActiveCell();
  const setPressedCell = useDispatchSetPressedCell();
  const pressedCell = usePressedCell();
  const setSelectedRange = useDispatchSetSelectedRange();
  const selectedRange = useSelectedRange();

  return {
    activateCell: (colIdx: number, rowIdx: number) => {
      if (colIdx < 0) colIdx = 0;
      if (rowIdx < 0) rowIdx = 0;
      if (colIdx >= colsCount) colIdx = colsCount - 1;
      if (rowIdx >= rowsCount) rowIdx = rowsCount - 1;
      setActiveCell(colIdx, rowIdx);
    },
    mergeCells: (fromCell: {colIdx: number, rowIdx: number}, toCell: {colIdx: number, rowIdx: number}) => {
      if (fromCell.colIdx > toCell.colIdx) {
        throw new Error("toCell.colIdx must be greater than fromCell.colIdx");
      }
      if (fromCell.rowIdx > toCell.rowIdx) {
        throw new Error("toCell.rowIdx must be greater than fromCell.rowIdx");
      }
      merge(fromCell, toCell);
    },
    get selectedRange() {
      return selectedRange;
    },
    get pressedCell() {
      return pressedCell;
    },
    clearSelectedRange() {
      setSelectedRange({ colIdx: -1, rowIdx: -1 }, { colIdx: -1, rowIdx: -1 }); 
      return {
        start: { colIdx: -1, rowIdx: -1 },
        end: { colIdx: -1, rowIdx: -1 }, 
      };
    },
    setSelectedRange(start: { colIdx: number, rowIdx: number }, end: { colIdx: number, rowIdx: number }) {
      if (start.colIdx === end.colIdx && start.rowIdx === end.rowIdx) return;
      const newStart = {
        colIdx: Math.min(start.colIdx, end.colIdx),
        rowIdx: Math.min(start.rowIdx, end.rowIdx),
      };
      const newEnd = {
        colIdx: Math.max(start.colIdx, end.colIdx),
        rowIdx: Math.max(start.rowIdx, end.rowIdx),
      };
      setSelectedRange(newStart, newEnd);
      return {
        start: newStart,
        end: newEnd,
      };
    },
    setPressedCell: (colIdx: number, rowIdx: number) => {
      setPressedCell(colIdx, rowIdx);
    },
    setWidth: (colIdx: number, rowIdx: number, width: number) => {
      console.log(colIdx, rowIdx, width);
    },
    setHeight: (colIdx: number, rowIdx: number, height: number) => {
      console.log(colIdx, rowIdx, height);
    },
    cell(colIdx: number, rowIdx: number) {
      return {
        colIdx,
        rowIdx,
        get value() {
          return cellsSelector.cells[rowIdx][colIdx]?.value;
        },
        set value(value: string) {
          setCellValue(this.colIdx, this.rowIdx, value);
        },
      };
    },
  };
}

export function useCellApi(colIdx: number, rowIdx: number) {
  const borders = useBorders(colIdx, rowIdx);
  const setBorders = useDispatchSetBorders(colIdx, rowIdx);

  const value = useCellValue(colIdx, rowIdx);
  const setCellValue = useDispatchSetCellValue();

  const italic = useCellItalic(colIdx, rowIdx);
  const setItalic = useDispatchSetItalic(colIdx, rowIdx);

  const bold = useCellBold(colIdx, rowIdx);
  const setBold = useDispatchSetBold(colIdx, rowIdx);

  const fontSize = useCellFontSize(colIdx, rowIdx);
  const setFontSize = useDispatchSetFontSize(colIdx, rowIdx);
  return {
    get borders(): Borders {
      return borders;
    },
    set borders(v: object) {
      setBorders(v);
    },
    get fontSize() {
      return fontSize || 14;
    },
    set fontSize(v: number) {
      setFontSize(v);
    },
    get bold() {
      return bold || false;
    },
    set bold(v: boolean) {
      setBold(v);
    },
    get italic() {
      return italic || false;
    },
    set italic(v: boolean) {
      setItalic(v);
    },
    get value() {
      return value;
    },
    set value(v: string) {
      setCellValue(colIdx, rowIdx, v);
    }
  };
}
