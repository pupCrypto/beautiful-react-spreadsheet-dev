type CellKey = string;

export function genCellKey(colIdx: number, rowIdx: number): CellKey {
  return `${colIdx}-${rowIdx}`;
}

export function getColumnNameByIndex(index: number): string {
  const offset = 65;
  let name = '';
  while (index >= 0) {
    const remainder = index % 25;
    name = String.fromCharCode(offset + remainder) + name;
    if (remainder < 25) break;
    index = Math.floor(index / 25) - 1;
  }
  return name;
}
