import React from "react";
import { useCellHeight, useCellWidth } from "../features/global/hooks.ts";
import './Cell.css';


interface PropsType {
  colIdx: number;
  defaultValue?: number | string | boolean | undefined;
  rowIdx: number;
}

export default function Cell(props: PropsType) {
  const cellHeight = useCellHeight();
  const cellStyle = {
    height: cellHeight,
  };
  const onClick = () => {
    console.log(props.colIdx, props.rowIdx);
  }
  return (
    <td className="cell" onClick={onClick} onMouseDown={() => console.log('down')}>
      <div className="cell__input" style={cellStyle}>{props.defaultValue}</div>
    </td>
  );
}