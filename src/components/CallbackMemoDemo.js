import React, { useState, useEffect, useCallback, useMemo } from "react";

export default function CallbackMemoDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1); //
    }, 1000);
  }, []);
  //   console.log("count", count);
  const handleClick = useCallback((ev) => {
    console.log("count", ev.target);
  }, []);

  const result = useMemo(() => {
    return count * 100;
  }, [count]);

  return (
    <div onClick={handleClick}>
      {count}---{result}
    </div>
  );
}
