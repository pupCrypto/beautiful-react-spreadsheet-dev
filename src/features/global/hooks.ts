import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
import { Mode } from "./globalSlice.ts";
import { setMode } from "./globalSlice.ts";



export function useCellHeight(): number {
  return useAppSelector(state => state.global.cell.height);
}

export function useCellWidth(): number {
  return useAppSelector(state => state.global.cell.width);
}

export function useMode(): Mode {
  return useAppSelector(state => state.global.mode);
}

export function useDispatchSetMode(): (mode: Mode) => void {
  const dispatch = useAppDispatch();
  return (mode: Mode) => {
    dispatch(setMode(mode));
  };
}