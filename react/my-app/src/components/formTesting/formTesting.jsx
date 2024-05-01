import React from "react";

function FormComponent() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Hi</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default FormComponent;
