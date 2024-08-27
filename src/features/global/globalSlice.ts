import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface GlobalState {
  cell: {
    height: number,
    width: number,
  }
}

const initialState = {
  cell: {
    height: 25,
    width: 70,
  }
} satisfies GlobalState

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setCellHeight: (state: GlobalState, action: PayloadAction<number>) => {
      state.cell = {width: state.cell.width, height: action.payload};
    },
    setCellWidth: (state: GlobalState, action: PayloadAction<number>) => {
      state.cell = {height: state.cell.height, width: action.payload};
    },
  },
});

export const { setCellHeight, setCellWidth } = globalSlice.actions;
export default globalSlice.reducer;