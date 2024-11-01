import React from "react";
import ContextMenuItem from "../ContextMenuItem";
import { MdContentCut } from "react-icons/md";

export default function Cut() {
  return (
    <ContextMenuItem
      icon={<MdContentCut />}
      label="Cut"
      shortcut="Ctrl+X"
    />
  );
}