import React from "react";
import Cell from "../../cell/Cell";
import { genCellKey } from "../../utils/spreadsheet";
import { useMergeBitmap } from "../../features/merge/hooks";
import { checkInMergeArea } from "../../utils/bitmap";
import "./Row.css";
import { useActiveCell, useDispatchSetActiveCell } from "../../features/cells/hooks";


interface PropsType {
  index: number;
  value: string;
  columns: Array<string>;
}

export default function Row(props: PropsType) {
  const mergeBitmap = useMergeBitmap();
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
      {props.columns.map((elem, colIdx) => {
        var rowIdx = props.index;
        var pass = false;
        if (checkInMergeArea(mergeBitmap, colIdx, rowIdx)) {  // TODO: here need some logic
          if (
            checkInMergeArea(mergeBitmap, colIdx - 1, rowIdx) ||
            checkInMergeArea(mergeBitmap, colIdx , rowIdx - 1)
          ) {
            console.log('here', colIdx, rowIdx)
          }
        }
        return (
          pass ? undefined : <Cell
            colSpan={1}
            rowSpan={1}
            key={genCellKey(colIdx, props.index)}
            colIdx={colIdx}
            rowIdx={props.index}
            onCellPressed={onCellPressed}
            isActive={checkIfActive(colIdx, props.index)}
          />
      );
      })}
    </tr>
  );
}
