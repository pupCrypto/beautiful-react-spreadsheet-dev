export function useSpreadsheetApi() {
  return {
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
