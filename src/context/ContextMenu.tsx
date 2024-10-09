import React from "react";

export default function ContextMenu() {
  return (
    <div className="context-menu">
      <div className="context-menu__item">
        <div className="context-menu__item__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"></svg>
        </div>
        <div className="context-menu__item__label">
          <span>Copy</span>
        </div>
        <div className="context-menu__item__shortcut">
          <span>Ctrl+C</span>
        </div>
      </div>
    </div>
  )
};