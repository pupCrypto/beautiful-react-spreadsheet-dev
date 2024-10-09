import React from "react";
import { useCellHeight } from "../features/global/hooks.ts";
import './Cell.css';


interface PropsType {
  colIdx: number;
  rowIdx: number;
  isActive?: boolean;
  defaultValue?: number | string | boolean | undefined;
  onCellPressed?: (colIdx: number, rowIdx: number) => void;
  onCellRelease?: (colIdx: number, rowIdx: number) => void;
}

export default function Cell(props: PropsType) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const cellHeight = useCellHeight();
  
  const cellStyle = {
    height: cellHeight,
  };

  const getValue = () => {
    return inputRef.current?.innerText;
  }

  const onClick = () => {
    // console.log(props.colIdx, props.rowIdx, getValue());
  }
  const onMouseDown = () => {
    props.onCellPressed?.(props.colIdx, props.rowIdx);
  }
  const onMouseUp = () => {
    props.onCellRelease?.(props.colIdx, props.rowIdx);
  }
  return (
    <td
      is-selected={props.isActive && 'yes'}
      className="cell"
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <div className="cell__container">
        <div
          ref={inputRef}
          // contentEditable
          className="cell__input"
          style={cellStyle}
        >{props.defaultValue}</div>
      </div>
    </td>
  );
}