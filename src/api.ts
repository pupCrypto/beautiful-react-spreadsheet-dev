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
} from "./features/cells/hooks";
import { Borders } from "./features/cells/slice";
import { useDispatchSetMerge } from "./features/merge/hooks";


export function useApi() {
  const { colsCount, rowsCount } = useSpreadsheetSize();
  const merge = useDispatchSetMerge();
  const setCellValue = useDispatchSetCellValue();
  const cellsSelector = useCellsSelector();
  const setActiveCell = useDispatchSetActiveCell();
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
