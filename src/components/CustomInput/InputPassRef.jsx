import { useRef } from "react";
function CustomTextInput({ inputRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

function Parent() {
  const ref = useRef();

  const handleSetRef = (e) => {
    ref.current = e;
  };

  const handleFocus = () => {
    ref.current.focus();
  };

  return (
    <div>
      <CustomTextInput inputRef={handleSetRef} />
      <button onClick={handleFocus}>ahihi</button>
    </div>
  );
}

export default Parent;
