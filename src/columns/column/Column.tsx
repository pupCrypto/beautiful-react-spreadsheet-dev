import React from "react";
import "./Column.css";

interface PropsType {
  index: number;
  defaultHeight: number;
  defaultWidth: number;
  label: string;
}

export default function Column(props: PropsType) {
  const [height, setHeight] = React.useState(props.defaultHeight);
  const [width, setWidth] = React.useState(props.defaultWidth);

  return (
    <>
      <th
        className="columns__column"
        style={{
          height: height,
          width: width,
        }}
      >
        <div className="column__label">
          <span>
            {props.label}
          </span>
          <div className="column__delimiter" style={{height: height}} />
        </div>
      </th>
    </>
  );
}
