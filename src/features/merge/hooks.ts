import { useAppDispatch } from "../../app/hooks.ts";
import { setMerge } from "./slice.ts";

export function useInMerge(colIdx: number, rowIdx: number) {}

export function useDispatchSetMerge() {
  var dispatch = useAppDispatch();
  return (start: { colIdx: number, rowIdx: number }, end: { colIdx: number, rowIdx: number }) => {
    dispatch(setMerge({ start, end }));
  };
}