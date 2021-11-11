import React, { useRef, useEffect } from "react";

function Input() {
  const inputRef = useRef();
  useEffect(() => {
    console.log("mount");
    inputRef.current.focus();
  }, []);
  return <input ref={inputRef} />;
}

const FInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default function RefDemo() {
  const fInputRef = useRef();

  useEffect(() => {
    fInputRef.current.focus();
    setTimeout(() => {
      fInputRef.current.value = "Hello world";
    }, 1000);
  }, []);
  return (
    <div>
      {/* <Input /> */}
      <div>---------------------------------------------</div>
      <FInput ref={fInputRef} placeholder="请输入" />
    </div>
  );
}
