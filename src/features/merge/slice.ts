import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setTrueBitArea } from "../../utils/bitmap";

interface MergeState {
  globalMerge: Array<Array<boolean>>;
}

const initialState = {
  globalMerge: Array(10).fill(0).map((elem, index) => Array(10).fill(false)),
} satisfies MergeState;

const mergeSlice = createSlice({
  name: "merge",
  initialState,
  reducers: {
    setBitmap: (state: MergeState, action: PayloadAction<Array<Array<boolean>>>) => {
      state.globalMerge = action.payload;
    },
    merge: (state: MergeState, action: PayloadAction<{ start: { colIdx: number, rowIdx: number }, end: { colIdx: number, rowIdx: number } }>) => {
      setTrueBitArea(state.globalMerge, action.payload.start, action.payload.end);
    },
  },
});

export const { setBitmap, merge } = mergeSlice.actions;
export default mergeSlice.reducer;
