import React from "react";
import './Rows.css';
import Cell from "../cell/Cell";
import { useKeyRows } from "../hooks/rows";
import { useKeyColumns } from "../hooks/columns";
import { genCellKey } from "../utils/spreadsheet";

export default function Rows() {
  const rows = useKeyRows();
  const columns = useKeyColumns();
  return (
    <>
      {rows.map((num, rowIdx) => (
        <tr key={rowIdx}>
          <td className="row">{num}</td>
          {columns.map((elem, colIdx) => <Cell key={genCellKey(colIdx, rowIdx)} colIdx={colIdx} rowIdx={rowIdx} />)}

        </tr>
      ))}
    </>
  );
}