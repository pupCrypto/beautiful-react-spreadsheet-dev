import React from "react";
import "./Columns.css";
import { useCellHeight, useCellWidth } from "../features/global/hooks";
import { useKeyColumns } from "../hooks/columns";

interface PropsType {
  onCornerClick: () => void
}

export default function Columns(props: PropsType) {
  const cellHeight = useCellHeight();
  const cellWidth = useCellWidth();
  const columns = useKeyColumns();
  return (
    <tr className="columns" style={{width: 800}}>
      <th
        className="columns__corner"
        onClick={props.onCornerClick}
        style={{
          height: cellHeight,
          width: cellWidth,
        }}
      />
      {columns.map((l, index) => (
        <th
          key={index}
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