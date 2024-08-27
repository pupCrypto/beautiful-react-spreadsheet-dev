import React from "react";
import Columns from "./Columns";

export default function ColumnsContainer() {
  const onCornerClick = () => {
    console.log('corner clicked');
  }
  return (
    <Columns onCornerClick={onCornerClick} />
  );
}