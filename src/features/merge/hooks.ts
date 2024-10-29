import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { merge, setBitmap } from "./slice.ts";

export function useMergeBitmap(): Array<Array<boolean>> {
  return useAppSelector(state => state.merge.globalMerge);
}

export function useInMerge(colIdx: number, rowIdx: number) {
  const mergeBitmap = useMergeBitmap();
  return mergeBitmap[colIdx][rowIdx];
}

export function useDispatchSetMerge() {
  var dispatch = useAppDispatch();
  return (start: { colIdx: number, rowIdx: number }, end: { colIdx: number, rowIdx: number }) => {
    dispatch(merge({ start, end }));
  };
}

export function useDispatchSetMergeBitmap() {
  var dispatch = useAppDispatch();
  return (bitmap: Array<Array<boolean>>) => {
    dispatch(setBitmap(bitmap));
  };
}
