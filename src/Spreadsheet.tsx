import React from "react";
import ColumnsContainer from "./columns/ColumnsContainer.tsx";
import RowsContainer from "./rows/RowsContainer.tsx";
import { ContextMenu } from "primereact/contextmenu";
import { useApi } from "./api.ts";
import "./Spreadsheet.css";

export const ContextMenuRefContext = React.createContext<React.RefObject<ContextMenu> | null>(null);

export default function BeautifulSpreadsheet() {
  const cm = React.useRef(null);
  const api = useApi();
  api.mergeCells({ colIdx: 0, rowIdx: 0 }, { colIdx: 1, rowIdx: 0 });
  return (
    <>
      <ContextMenuRefContext.Provider value={cm}>
        <table className="spreadsheet">
          <thead>
            <ColumnsContainer />
          </thead>
          <tbody>
            <RowsContainer />
          </tbody>
        </table>
      </ContextMenuRefContext.Provider>
      <ContextMenu
        className="spreadsheet__context-menu"
        ref={cm}
        model={[{ label: 'Copy', icon: 'pi pi-copy', command: () => console.log('copy') }]}
      />
    </>
  );
}