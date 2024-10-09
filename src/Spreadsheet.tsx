import React from "react";
import ColumnsContainer from "./columns/ColumnsContainer.tsx";
import "./Spreadsheet.css";
import RowsContainer from "./rows/RowsContainer.tsx";

export default function BeautifulSpreadsheet() {
  
  return (
    <table className="spreadsheet">
      <thead>
        <ColumnsContainer />
      </thead>
      <tbody>
        <RowsContainer />
      </tbody>
    </table>
  );
}