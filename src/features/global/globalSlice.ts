import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export enum Mode {
  free = 'free',
  select = 'select',
}

interface GlobalState {
  cell: {
    height: number,
    width: number,
  },
  mode: Mode
}

const initialState = {
  cell: {
    height: 20,
    width: 95,
  },
  mode: Mode.free,
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
    setMode: (state: GlobalState, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
    },
    setDefaultMode: (state: GlobalState) => {
      state.mode = Mode.free;
    },
  },
});

export const { setCellHeight, setCellWidth, setMode, setDefaultMode } = globalSlice.actions;
export default globalSlice.reducer;