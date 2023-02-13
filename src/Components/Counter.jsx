import React, { useState } from "react";

// render, re-render

// state change
// props change
// Parent re-render

const Counter = () => {
  let [count, setCount] = useState(0);

  function handleIncCount() {
    setCount(count + 1);
  }

  function handleDecCount() {
    if(count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <button onClick={handleIncCount}>+</button>
      <span>{count}</span>
      <button onClick={handleDecCount}>-</button>
    </div>
  );
};

export default Counter;
