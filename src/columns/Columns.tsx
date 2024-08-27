import React from "react";
import "./Columns.css";
import { useCellHeight, useCellWidth } from "../features/global/hooks";

interface PropsType {
  onCornerClick: () => void
}

export default function Columns(props: PropsType) {
  const cellHeight = useCellHeight();
  const cellWidth = useCellWidth();
  return (
    <tr className="columns">
      <th
        className="columns__corner"
        onClick={props.onCornerClick}
        style={{
          height: cellHeight,
          width: cellWidth,
        }}
      />
      {['A', 'B', 'C', 'D', 'E'].map(l => (
        <th
          className="columns__column"
          style={{
            height: cellHeight,
            width: cellWidth,
          }}
        >{l}</th>
      ))}
    </tr>
  );
}