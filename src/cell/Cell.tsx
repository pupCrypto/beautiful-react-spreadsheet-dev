import React from "react";
import { useCellHeight } from "../features/global/hooks.ts";
import './Cell.css';


interface PropsType {
  colIdx: number;
  rowIdx: number;
  isActive?: boolean;
  defaultValue?: number | string | boolean | undefined;
  onCellPressed?: (colIdx: number, rowIdx: number) => void;
  onCellRelease?: (colIdx: number, rowIdx: number) => void;
}

export default function Cell(props: PropsType) {
  const [isEditing, setIsEditing] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const cellHeight = useCellHeight();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  
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
    console.log('context menu');
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
      onMouseLeave={onMouseLeave}
    >
      <div
        className="cell__container"
        onContextMenu={onContextMenu}
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