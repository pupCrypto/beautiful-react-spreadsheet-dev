import React from "react";
import "./Columns.css";
import { useCellHeight, useCellWidth } from "../features/global/hooks";
import { useKeyColumns } from "../hooks/columns";
import Column from "./column/Column";

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
        <Column
          key={index}
          index={index}
          label={l}
          defaultHeight={cellHeight}
          defaultWidth={cellWidth}
        />
      ))}
    </tr>
  );
}