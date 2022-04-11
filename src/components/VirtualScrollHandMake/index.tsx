import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const dummyList = Array(1000)
  .fill(0)
  .map((value, index) => {
    return {
      name: `Data ${index}`,
    };
  });

export default function VirtualScrollHandMake() {
  return (
    <VirtualStyled>
      {dummyList.map((item, index) => (
        <VirtualScrollChild>
          <div>{item.name}</div>
        </VirtualScrollChild>
      ))}
    </VirtualStyled>
  );
}

const VirtualScrollChild = ({ children }: any) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  // const style = {
  //   height:
  // }
  return <div ref={ref}>{inView ? children : null}</div>;
};

const VirtualStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
