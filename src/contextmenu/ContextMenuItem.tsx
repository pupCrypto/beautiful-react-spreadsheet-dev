import React from "react";

interface ContextMenuItemProps {
  icon?: React.ReactNode;
  label: string | React.ReactNode;
  shortcut: string | React.ReactNode;
}

export default function ContextMenuItem(props: ContextMenuItemProps ) {
  return (
    <div className="context-menu__item">
      <div className="context-menu__item__icon">
        {props.icon}
      </div>
      <div className="context-menu__item__label">
        {props.label}
      </div>
      <div className="context-menu__item__shortcut">
        {props.shortcut}
      </div>
    </div>
  )
};