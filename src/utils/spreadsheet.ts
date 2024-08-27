type CellKey = string;

export function genCellKey(colIdx: number, rowIdx: number): CellKey {
  return `${colIdx}-${rowIdx}`;
}