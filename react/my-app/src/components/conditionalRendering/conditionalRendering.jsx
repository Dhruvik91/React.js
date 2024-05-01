import React, { useState } from "react";

function ConditionalRendering({ props }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <ul>
        {props.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      {isLogin ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}
    </>
  );
}

export default ConditionalRendering;
