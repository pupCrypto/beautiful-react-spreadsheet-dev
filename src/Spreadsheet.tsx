import React from "react";
import ColumnsContainer from "./columns/ColumnsContainer.tsx";
import "./Spreadsheet.css";
import RowsContainer from "./rows/RowsContainer.tsx";
import { Provider } from "react-redux";
import store from "./app/store.ts";

export default function BeautifulSpreadsheet() {
  
  return (
    <Provider store={store}>
      <table className="spreadsheet">
        <thead>
          <ColumnsContainer />
        </thead>
        <tbody>
          <RowsContainer />
        </tbody>
      </table>
    </Provider>
  );
}