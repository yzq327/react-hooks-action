import React, { useReducer } from "react";

export default function ReducerDemo() {
  const initialState = { count: 0, userName: "walker" };

  const reducer = (state, action) => {
    const { type, payload = 1 } = action;
    switch (type) {
      case "increment":
        return { ...state, count: state.count + payload };
      case "decrement":
        return { ...state, count: state.count - payload };
      case "rename":
        return { ...state, userName: payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      reducer {state.count} -- {state.userName}
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "rename", payload: "jack" })}>
        rename
      </button>
    </div>
  );
}
