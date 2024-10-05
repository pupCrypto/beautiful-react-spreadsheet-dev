import React from "react";
import { useCellHeight, useCellWidth } from "../features/global/hooks.ts";
import VDelimiter from "../delimiter/VDelimiter.tsx";
import './Cell.css';


interface PropsType {
  colIdx: number;
  defaultValue?: number | string | boolean | undefined;
  rowIdx: number;
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
    console.log(props.colIdx, props.rowIdx, getValue());
  }
  return (
    <td className="cell" onClick={onClick} onMouseDown={() => console.log('down')}>
      <div className="cell__container">
        <VDelimiter />
        <div
          ref={inputRef}
          contentEditable
          className="cell__input"
          style={cellStyle}
        >{props.defaultValue}</div>
      </div>
    </td>
  );
}