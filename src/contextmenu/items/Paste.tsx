import React from "react";
import ContextMenuItem from "../ContextMenuItem";
import { MdContentPaste } from "react-icons/md";

export default function Paste() {
  return (
    <ContextMenuItem
      icon={<MdContentPaste />}
      label="Paste"
      shortcut="Ctrl+V"
    />
  );
}