import React from "react";
import ContextMenuItem from "../ContextMenuItem";
import { MdContentCopy } from "react-icons/md";

export default function Copy() {
  return (
    <ContextMenuItem
      icon={<MdContentCopy />}
      label="Copy"
      shortcut="Ctrl+C"
    />
  );
}