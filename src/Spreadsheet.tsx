import React from "react";
import ColumnsContainer from "./columns/ColumnsContainer.tsx";
import "./Spreadsheet.css";
import RowsContainer from "./rows/RowsContainer.tsx";

export default function BeautifulSpreadsheet() {
  return (
    <div className="spreadsheet">
      <ColumnsContainer />
      <div className="spreadsheet__rows-and-cells">
        <RowsContainer />
      </div>
    </div>
  );
}