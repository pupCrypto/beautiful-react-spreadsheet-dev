import React from "react";
import Rows from "./Rows";

export default function RowsContainer() {
  const [cellPressed, setCellPressed] = React.useState();
  return (
    <Rows />
  );
}