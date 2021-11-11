import React, { useEffect, useState } from "react";

export default function FunctionComp() {
  const [count, setCount] = useState(0);
  const [disable, seDisable] = useState(true);
  useEffect(() => {
    if (count % 2 === 0) {
      console.log(`func: ${count}`);
    }
    // 更新完成之后的操作
    return () => {
      //   console.log("新东西", count);
    };
  }, [count]);

  useEffect(() => {
    console.log("函数组件挂载");
    //组件挂载 Mount
    const handleClick = () => {
      console.log(1);
    };
    document.addEventListener("click", handleClick);
    //组件卸载 unMount
    return () => {
      console.log("函数组件卸载");
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      <button onClick={() => seDisable(!disable)}>
        {disable ? "禁用" : "启用"}
      </button>
      <h3>Hello function components{count}</h3>
      <button onClick={() => setCount(count + 1)}>变化</button>
    </div>
  );
}
