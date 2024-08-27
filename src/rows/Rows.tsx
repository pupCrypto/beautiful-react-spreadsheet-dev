import React from "react";
import { useCellHeight, useCellWidth } from "../features/global/hooks";
import './Rows.css';

export default function Rows() {
  const cellHeight = useCellHeight();
  const cellWidth = useCellWidth();

  return (
    <>
      {[1, 2, 3, 4, 5].map(num => (
        <tr
          style={{
            height: cellHeight,
            width: cellWidth,
          }}
        > <td>{num}</td></tr>  // todo move td to cell
      ))}
    </>
  );
}