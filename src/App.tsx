import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import RapidClickingButton from "./components/RapidClickingButton/RapidClickingButton";
import InfiniteScroll from 'components/InfiniteScroll/InfiniteScroll'
import ClickOutsideButton from 'components/ClickOutside/ClickOutside'

function App() {
  return (
    <div className="App">
      <ClickOutsideButton />
      {/* <RapidClickingButton>ahihi</RapidClickingButton> */}
      {/* <InfiniteScroll/> */}
    </div>
  );
}

export default App;
