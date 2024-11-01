import React from "react";
import ColumnsContainer from "./columns/ColumnsContainer.tsx";
import RowsContainer from "./rows/RowsContainer.tsx";
import ContextMenu from "./contextmenu/ContextMenu.tsx";
import { ContextMenu as PrimeReactContextMenu } from "primereact/contextmenu";
import { useApi, useCellApi } from "./api.ts";
import "./Spreadsheet.css";

export const ContextMenuRefContext = React.createContext<React.RefObject<PrimeReactContextMenu> | null>(null);

export default function BeautifulSpreadsheet() {
  const cm = React.useRef(null);
  const api = useApi();
  const cellApi = useCellApi(0, 0);
  const cellApi1 = useCellApi(2, 2);

  React.useEffect(() => {
    api.mergeCells({ colIdx: 0, rowIdx: 0 }, { colIdx: 1, rowIdx: 2 });
    api.activateCell(2, 4);
    cellApi1.borders = {
      top: { color: 'red', width: 2 },
      left: { color: 'red', width: 2 },
      right: { color: 'red', width: 2 },
      bottom: { color: 'red', width: 2 },
    };
  }, []);

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
      <ContextMenu cmRef={cm} />
    </>
  );
}