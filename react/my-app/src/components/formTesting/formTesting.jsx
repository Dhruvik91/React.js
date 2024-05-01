import React from "react";

function FormComponent() {
  return (
    <>
      <div data-testId="Test">
        <h1>Hello World</h1>
        <h2>Hi</h2>
        <p>Hello World, Nice to meet you</p>
        <span title="close">This is Testing</span>
        <img scr="" alt="Hii"></img>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value="Hello" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>      
    </>
  );
}

export default FormComponent;
