import React, { useEffect, useRef, useState } from "react";

const usePrevState = (state: number) => {
  const ref = useRef<number>();
  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref;
};

export default function PreviousState() {
  const [state, setState] = useState(1);
  const prev = usePrevState(state);

  return (
    <div>
      <button type="button" onClick={() => setState(state + 1)}>
        ahihi
      </button>
      <div>Prev: {prev.current}</div>
      <div>Now: {state}</div>
    </div>
  );
}
