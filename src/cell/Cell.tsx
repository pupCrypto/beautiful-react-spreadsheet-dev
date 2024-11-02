import React from "react";
import { useCellHeight } from "../features/global/hooks.ts";
import { ContextMenuRefContext } from "../Spreadsheet.tsx";
import { useApi, useCellApi } from "../api.ts";
import './Cell.css';
import { useOverflown } from "../hooks/overflow.ts";


interface PropsType {
  rowSpan: number;
  colSpan: number;
  colIdx: number;
  rowIdx: number;
  isActive?: boolean;
  defaultValue?: number | string | boolean | undefined;
  isInSelection?: boolean;
  onCellPressed?: (colIdx: number, rowIdx: number) => void;
  onCellRelease?: (colIdx: number, rowIdx: number) => void;
}

export default function Cell(props: PropsType) {
  const globalApi = useApi();
  const api = useCellApi(props.colIdx, props.rowIdx);
  const contextMenuRef = React.useContext(ContextMenuRefContext);
  const [isEditing, setIsEditing] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const cellHeight = useCellHeight();
  const [value, setValue] = React.useState<string | undefined>();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const isOverflown = useOverflown(inputRef);

  const cellStyle = {  // TODO: redo on classes
    height: cellHeight,
    fontWeight: api.bold ? 'bold' : 'normal',
    fontStyle: api.italic ? 'italic' : 'normal',
    fontSize: api.fontSize,
  };

  const tdStyle = {
    borderTop: api.borders?.top ? `${api.borders?.top?.width}px solid ${api.borders?.top?.color}` : undefined,
    borderBottom: api.borders?.bottom ? `${api.borders?.bottom?.width}px solid ${api.borders?.bottom?.color}` : undefined,
    borderLeft: api.borders?.left ? `${api.borders?.left?.width}px solid ${api.borders?.left?.color}` : undefined,
    borderRight: api.borders?.right ? `${api.borders?.right?.width}px solid ${api.borders?.right?.color}` : undefined,
  }

  const getValue = () => {
    return inputRef.current?.innerText;
  }

  const onMouseEnter = () => {
    setIsHovered(true);
  }

  const onMouseLeave = () => {
    setIsHovered(false);
  }

  const onFocus = () => {}

  const onClick = () => {
    setIsClicked(true);
    inputRef.current?.focus();
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      inputRef.current?.blur();
      setIsClicked(false);
      return globalApi.activateCell(props.colIdx, props.rowIdx + 1);
    }

    if (!isClicked) {
      if (e.key in ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'])
        e.preventDefault();
      if (e.key === 'ArrowUp') globalApi.activateCell(props.colIdx, props.rowIdx - 1);
      if (e.key === 'ArrowDown') globalApi.activateCell(props.colIdx, props.rowIdx + 1);
      if (e.key === 'ArrowLeft') globalApi.activateCell(props.colIdx - 1, props.rowIdx);
      if (e.key === 'ArrowRight') globalApi.activateCell(props.colIdx + 1, props.rowIdx);
      return setIsClicked(false);
    }

    if (!isEditing) {
      setIsEditing(true);
    }
    api.value = getValue();
  }

  const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {}

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
    if (props.isActive) {
      inputRef.current?.focus();
    }
  }, [props.isActive]);

  React.useEffect(() => {
    setValue(api.value);
  }, []);

  return (
    <td
      is-selected={props.isActive ? 'yes' : undefined}
      in-selection={props.isInSelection ? 'yes' : undefined}
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
      style={tdStyle}
    >
      <div
        className="cell__container"
      >
        <div
          ref={inputRef}
          is-editing={isEditing ? 'yes' : undefined}
          className="cell__input"
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          contentEditable
          style={cellStyle}
          spellCheck={false}
        >{value}</div>
      </div>
    </td>
  );
}