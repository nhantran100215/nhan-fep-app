import React from "react";
import { useState, useEffect, useSelector, useDispatch } from "react-redux";
import { selectLogin } from "../manageState/reducers/featureSlice.js";
import "./styles/app.css";
import LoginPage from "./login-signIn/login-signIn";

function App() {
  const login = useSelector(selectLogin);

  console.log(login);
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
