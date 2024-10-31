import React from "react";
import { useExtendedActiveCell } from "../features/cells/hooks";
import "./TopBar.css";

export default function TopBar() {
  const cell = useExtendedActiveCell();
  return (
    <div className="topbar">
      <div className="topbar__bold">B</div>
      <div className="topbar__italic">I</div>
    </div>
  );
}