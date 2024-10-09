import React from "react";
import Cell from "../../cell/Cell";
import { genCellKey } from "../../utils/spreadsheet";
import "./Row.css";
import { useActiveCell, useDispatchSetActiveCell } from "../../features/cells/hooks";


interface PropsType {
  index: number;
  value: string;
  columns: Array<string>;
}

export default function Row(props: PropsType) {
  const activeCell = useActiveCell();
  const isActiveRow = activeCell.rowIdx === props.index;
  const setActiveCell = useDispatchSetActiveCell();
  const onCellPressed = (colIdx: number, rowIdx: number) => {
    setActiveCell(colIdx, rowIdx);
  }
  const checkIfActive = (colIdx: number, rowIdx: number) => {
    return activeCell.colIdx === colIdx && activeCell.rowIdx === rowIdx;
  }
  return (
    <tr key={props.index}>
      <td className={`row ${isActiveRow ? 'active' : ''}`}>{props.value}</td>
      {props.columns.map((elem, colIdx) => (
        <Cell
          key={genCellKey(colIdx, props.index)}
          colIdx={colIdx}
          rowIdx={props.index}
          onCellPressed={onCellPressed}
          isActive={checkIfActive(colIdx, props.index)}
        />
        ))}
    </tr>
  );
}
