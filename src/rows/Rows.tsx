import React from "react";
import './Rows.css';
import { useKeyRows } from "../hooks/rows";
import { useKeyColumns } from "../hooks/columns";
import Row from "./row/Row";

export default function Rows() {
  const rows = useKeyRows();
  const columns = useKeyColumns();
  return (
    <>
      {rows.map((num, rowIdx) => (
        <Row key={rowIdx} index={rowIdx} value={String(num)} columns={columns} />
      ))}
    </>
  );
}