import React from "react";
import { useCellHeight, useCellWidth } from "../features/global/hooks";
import './Rows.css';

export default function Rows() {
  const cellHeight = useCellHeight();
  const cellWidth = useCellWidth();

  return (
    <div className="rows">
      {[1, 2, 3, 4, 5].map(num => (
        <div
          className="rows__row"
          style={{
            height: cellHeight,
            width: cellWidth,
          }}
        >{num}</div>
      ))}
    </div>
  );
}