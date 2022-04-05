import React, { useState } from "react";
import { List, AutoSizer } from "react-virtualized";
import "./styled.css";

const dummyList = Array(1000)
  .fill(0)
  .map((value, index) => {
    return {
      name: `Data ${index}`,
    };
  });

export default function VirtualScroll() {
  const [list, setList] = useState(dummyList);
  console.log("render");

  const renderItem = ({ index, style }: any) => {
    return <div style={style}>{dummyList[index].name}</div>;
  };
  return (
    <div className="virtual-scroll">
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            rowCount={list.length}
            rowHeight={20}
            rowRenderer={renderItem}
          />
        )}
      </AutoSizer>
    </div>
  );
}
