import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
}

export default Counter;
