import { useDispatchSetMerge } from "./features/merge/hooks";


export function useApi() {
  const merge = useDispatchSetMerge();
  return {
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
  };
}

export function useCellApi(colIdx: number, rowIdx: number) {
  return {
    set width(w: number) {
      console.log(colIdx, rowIdx, w);
    },
    set height(h: number) {
      console.log(colIdx, rowIdx, h);
    },
  };
}
