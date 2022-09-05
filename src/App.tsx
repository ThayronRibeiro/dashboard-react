import React, { useState, useEffect } from "react";
import "./App.css";
import { Body } from "./styles/global";
import { Navigate } from "react-router-dom";

import { RoutesApp } from "./routes/RoutesApp";

//ROTAS
import { Login } from "./routes/login";

function App() {
  const [login, setLogin] = useState(false);

  const Private = ({ Item }: any) => {
    let signed = localStorage.getItem("authenticated");

    return signed ? Item : <Login loginOk={handleLoginOk} />;
  };

  const handleLoginOk = () => {
    setLogin(true);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser == "true") {
      setLogin(true);
      <Navigate replace to="/home" />;
    } else {
      setLogin(false);
    }
  }, [login]);

  return (
    <>
      <RoutesApp />
      <Body />
    </>
  );
}

export default App;
