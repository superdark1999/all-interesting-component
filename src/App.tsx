import "antd/dist/antd.css";
import Input from "components/CustomInput/InputPassRef";
import LazyLoading from "components/LazyLoading/LazyLoading";
import InfiniteScroll from "components/InfiniteScrollRef";
import MasterCss from "CssComponent/MasterCss";
import React from "react";
import Navbar from "CssComponent/NavBar/Navbar";
import "./App.css";
import VirtualScroll from "components/VirtualScroll/VirtualScroll";
import GridImage from "CssComponent/GridImage/GridImage";

function App() {
  return (
    <div className="App">
      {/* <ClickOutsideButton /> */}
      {/* <RapidClickingButton>ahihi</RapidClickingButton> */}
      {/* <MasterCss /> */}
      {/* <PreviousState /> */}
      {/* <Input /> */}
      {/* <LazyLoading /> */}
      {/* <Navbar></Navbar> */}
      {/* <VirtualScroll /> */}
      <GridImage />
    </div>
  );
}

export default App;
