import React from "react";
import { useCellHeight } from "../features/global/hooks.ts";
import { ContextMenuRefContext } from "../Spreadsheet.tsx";
import { useInMerge } from "../features/merge/hooks.ts";
import './Cell.css';
import { useOverflown } from "../hooks/overflow.ts";


interface PropsType {
  rowSpan: number;
  colSpan: number;
  colIdx: number;
  rowIdx: number;
  isActive?: boolean;
  defaultValue?: number | string | boolean | undefined;
  onCellPressed?: (colIdx: number, rowIdx: number) => void;
  onCellRelease?: (colIdx: number, rowIdx: number) => void;
}

export default function Cell(props: PropsType) {
  const contextMenuRef = React.useContext(ContextMenuRefContext);
  const [isEditing, setIsEditing] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const cellHeight = useCellHeight();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const isOverflown = useOverflown(inputRef);
  
  const cellStyle = {
    height: cellHeight,
  };

  const getValue = () => {
    return inputRef.current?.innerText;
  }

  const onMouseEnter = () => {
    setIsHovered(true);
  }

  const onMouseLeave = () => {
    setIsHovered(false);
  }

  const onClick = () => {
    // console.log(props.colIdx, props.rowIdx, getValue());
  }
  const onMouseDown = () => {
    setIsPressed(true);
    props.onCellPressed?.(props.colIdx, props.rowIdx);
  }
  const onMouseUp = () => {
    setIsPressed(false);
    props.onCellRelease?.(props.colIdx, props.rowIdx);
  }
  const onDoubleClick = () => {
    setIsEditing(true);
  }

  const onInput = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  }

  const onContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    contextMenuRef.current?.show(e);
  }

  React.useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  React.useEffect(() => {
    if (!props.isActive) {
      setIsEditing(false);
    }
  }, [props.isActive]);

  return (
    <td
      is-selected={props.isActive ? 'yes' : undefined}
      className="cell"
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onDoubleClick={onDoubleClick}
      onMouseEnter={onMouseEnter}
      onContextMenu={onContextMenu}
      onMouseLeave={onMouseLeave}
      colSpan={props.colSpan}
      rowSpan={props.rowSpan}
    >
      <div
        className="cell__container"
      >
        <div
          ref={inputRef}
          is-editing={isEditing ? 'yes' : undefined}
          className="cell__input"
          onInput={onInput}
          contentEditable
          style={cellStyle}
          spellCheck={false}
        >{props.defaultValue}</div>
      </div>
    </td>
  );
}