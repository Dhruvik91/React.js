import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import { useState } from "react";

function App() {


  return (
    <UserContextProvider>
      <h1>Hello World</h1>
      <Login /> 
      <Profile />
    </UserContextProvider>
  );
}

export default App;
