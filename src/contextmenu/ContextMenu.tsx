import React from "react";
import { ContextMenu as PrimeReactContextMenu } from "primereact/contextmenu";
import Copy from "./items/Copy.tsx";
import Cut from "./items/Cut.tsx";
import "./ContextMenu.css";
import Paste from "./items/Paste.tsx";


interface ContextMenuProps {
  cmRef: React.RefObject<PrimeReactContextMenu>;
}

export default function ContextMenu(props: ContextMenuProps) {
  return (
    <PrimeReactContextMenu
      style={{
        width: 300,
      }}
      ref={props.cmRef}
      className="spreadsheet__context-menu"
      model={[
        { label: 'Cut',  command: () => console.log('cut'), template: Cut },
        { label: 'Copy', command: () => console.log('copy'), template: Copy },
        { label: 'Paste', command: () => console.log('paste'), template: Paste },
      ]}
    />
  );
}