import React from "react";
import { useCellHeight, useCellWidth } from "../features/global/hooks.ts";
import './Cell.css';


interface PropsType {
  defaultValue: number | string | boolean | undefined,
}

export default function Cell(props: PropsType) {
  const cellHeight = useCellHeight();
  const cellWidth = useCellWidth();
  const cellStyle = {
    height: cellHeight,
    width: cellWidth,    
  };
  return (
    <div className="cell" style={cellStyle}>{props.defaultValue}</div>
  );
}