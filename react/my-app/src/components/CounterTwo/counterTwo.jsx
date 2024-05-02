import React from "react";

function CounterTwo(props) {
  return (
    <>
      <h1>Counter</h1>
      <p>{props.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </>
  );
}

export default CounterTwo;
