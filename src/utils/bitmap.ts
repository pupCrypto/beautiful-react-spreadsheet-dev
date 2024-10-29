export function setTrueBitArea(
  bitmap: Array<Array<boolean>>,
  start: { colIdx: number, rowIdx: number },
  end: { colIdx: number, rowIdx: number }
) {
  for (let rowIdx = start.rowIdx; rowIdx <= end.rowIdx; rowIdx++) {
    for (let colIdx = start.colIdx; colIdx <= end.colIdx; colIdx++) {
      bitmap[rowIdx][colIdx] = true;
    }
  }
}

export function checkInMergeArea(
  bitmap: Array<Array<boolean>>,
  colIdx: number,
  rowIdx: number
) {
  return bitmap[rowIdx]?.[colIdx];
}