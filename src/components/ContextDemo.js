import React, { useState, useContext } from "react";
const themeContext = React.createContext("#000");

const Child = () => {
  //消费
  //   const bgColor = useContext(themeContext);
  //   const style = {
  //     backgroundColor: bgColor,
  //   };
  //   return <div style={style}>Child</div>;
  return (
    <themeContext.Consumer>
      {(value) => <div style={{ backgroundColor: value }}>Child</div>}
    </themeContext.Consumer>
  );
};

const Demo = () => {
  return (
    <div>
      <div>Demo</div>
      <Child />
    </div>
  );
};

export default function ContextDemo() {
  const [bgColor, setBgColor] = useState("#000");
  return (
    <>
      {/* <button onClick={() => setBgColor("red")}>换色</button> */}
      <input type="color" onChange={(ev) => setBgColor(ev.target.value)} />
      <themeContext.Provider value={bgColor}>
        <Demo />
      </themeContext.Provider>
    </>
  );
}
