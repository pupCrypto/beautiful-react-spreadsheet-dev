import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CellsState {
  cells: Array<Array<{
    value?: string;
    bold?: boolean;
    italic?: boolean;
    font?: string;
    color?: string;
    underline?: boolean;
    fontSize?: number;
  }>>;
  activeCell: {
    colIdx?: number,
    rowIdx?: number,
  };
  selectedRange: {
    start: {
      colIdx?: number,
      rowIdx?: number,
    },
    end: {
      colIdx?: number,
      rowIdx?: number,
    },
  }
}

const initialState = {
  cells: Array(10).fill(0).map((elem, index) => Array(10).fill(Object.assign({}))),
  activeCell: {
    colIdx: -1,
    rowIdx: -1,
  },
  selectedRange: {
    start: {
      colIdx: -1,
      rowIdx: -1,
    },
    end: {
      colIdx: -1,
      rowIdx: -1,
    },
  }
} satisfies CellsState;

const cellsSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    setCellValue: (state: CellsState, action: PayloadAction<{ colIdx: number, rowIdx: number, value: string }>) => {
      state.cells[action.payload.rowIdx][action.payload.colIdx].value = action.payload.value;
    },
    setActiveCell: (state: CellsState, action: PayloadAction<{ colIdx: number, rowIdx: number }>) => {
      state.activeCell = action.payload;
    },
    setSelectedRange: (state: CellsState, action: PayloadAction<{ start: { colIdx: number, rowIdx: number }, end: { colIdx: number, rowIdx: number } }>) => {
      state.selectedRange = action.payload;
    },
  },
});

export const { setActiveCell, setSelectedRange, setCellValue } = cellsSlice.actions;
export default cellsSlice.reducer;