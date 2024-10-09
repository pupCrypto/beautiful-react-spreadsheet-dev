import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CellsState {
  activeCell: {
    colIdx?: number,
    rowIdx?: number,
  },
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
    setActiveCell: (state: CellsState, action: PayloadAction<{ colIdx: number, rowIdx: number }>) => {
      state.activeCell = action.payload;
    },
    setSelectedRange: (state: CellsState, action: PayloadAction<{ start: { colIdx: number, rowIdx: number }, end: { colIdx: number, rowIdx: number } }>) => {
      state.selectedRange = action.payload;
    },
  },
});

export const { setActiveCell, setSelectedRange } = cellsSlice.actions;
export default cellsSlice.reducer;