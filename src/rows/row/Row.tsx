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

  const getColRowSpan = (colIdx: number, rowIdx: number, pass: boolean) => {
    var colSpan = 1;
    var rowSpan = 1;
    if (pass) {
      return { colSpan, rowSpan };
    }
    if (checkInMergeArea(mergeBitmap, colIdx, rowIdx)) {
      var prevColIdx = colIdx;
      for (++colIdx; checkInMergeArea(mergeBitmap, colIdx, rowIdx); ++colSpan, ++colIdx) {} 
      for (++rowIdx; checkInMergeArea(mergeBitmap, prevColIdx, rowIdx); ++rowSpan, ++rowIdx) {}
    }
    return {
      colSpan,
      rowSpan,
    };
  };

  const checkMustPass = (colIdx: number, rowIdx: number) => {
    if (
      checkInMergeArea(mergeBitmap, colIdx, rowIdx) &&
      (
        checkInMergeArea(mergeBitmap, colIdx - 1, rowIdx) ||
        checkInMergeArea(mergeBitmap, colIdx, rowIdx - 1)
      )
    ) {
      return true;
    }
    return false;
  };
  return (
    <tr key={props.index}>
      <td className={`row ${isActiveRow ? 'active' : ''}`}>{props.value}</td>
      {props.columns.map((elem, colIdx) => {
        var rowIdx = props.index;
        var pass = checkMustPass(colIdx, rowIdx);
        var {colSpan, rowSpan} = getColRowSpan(colIdx, rowIdx, pass);
        // pass && console.log(rowIdx, colIdx);
        return (
          pass ?
          undefined :
          <Cell
            colSpan={colSpan}
            rowSpan={rowSpan}
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
