import React from "react";
import "./Column.css";
import { useIsActiveColumn } from "../../features/cells/hooks";

interface PropsType {
  index: number;
  defaultHeight: number;
  defaultWidth: number;
  label: string;
}

function ColumnEdgeDetector(props: { colIdx: number, side: 'left' | 'right', height: number }) {
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('enter', props.colIdx, props.side, e);
  }
  const onMouseLeave = () => {
    console.log('leave', props.colIdx, props.side);
  }
  return (
    <div
      className="column__edge-detector"
      style={{height: props.height}}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}

export default function Column(props: PropsType) {
  const [height, setHeight] = React.useState(props.defaultHeight);
  const [width, setWidth] = React.useState(props.defaultWidth);
  const isActiveColumn = useIsActiveColumn(props.index);
  return (
    <>
      <th
        className={`columns__column ${isActiveColumn ? 'active' : ''}`}
        style={{
          height: height,
          width: width,
        }}
      >
        <div className="column__container">
          <ColumnEdgeDetector colIdx={props.index} side="left" height={height} />
          <div className="column__label">
            <span>
              {props.label}
            </span>
          </div>
          <ColumnEdgeDetector colIdx={props.index} side="right" height={height} />
          </div>
      </th>
    </>
  );
}
