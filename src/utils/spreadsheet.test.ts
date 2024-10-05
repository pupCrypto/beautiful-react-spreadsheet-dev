import { genCellKey, getColumnNameByIndex } from './spreadsheet';

describe('spreadsheet utils', () => {
  it('genCellKey', () => {
    expect(genCellKey(0, 0)).toBe('0-0');
    expect(genCellKey(0, 22)).toBe('0-22');
  });
  it('getColumnNameByIndex', () => {
    expect(getColumnNameByIndex(0)).toBe('A');
    expect(getColumnNameByIndex(1)).toBe('B');
    // expect(getColumnNameByIndex(25)).toBe('Z');
    // expect(getColumnNameByIndex(26)).toBe('AA');
    // expect(getColumnNameByIndex(27)).toBe('AB');
  });
})