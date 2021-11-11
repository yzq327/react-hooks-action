import React, { useState } from "react";
import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
import ReducerDemo from "./components/ReducerDemo";
import ContextDemo from "./components/ContextDemo";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <ClassComp />
      <button className="btn btn" onClick={() => setVisible(!visible)}>
        函数组件{visible ? "隐藏" : "显示"}
      </button>
      {visible && <FuncComp />}
      <ReducerDemo />
      <ContextDemo />
    </div>
  );
}

export default App;
