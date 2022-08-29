import React, { useState, useEffect } from "react";
import "./App.css";
import { Body } from "./styles/global";
import { Menu } from "./components/Menu";
import { ContainerMain } from "./styles/ContainerMain";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import { ContainerContent } from "./styles/ContainerContent";

import { RoutesApp } from "./routes/RoutesApp";

//ROTAS
import { Login } from "./routes/login";
import { Home } from "./routes/home";
import { Teste } from "./routes/teste";

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
      {/* <ContainerMain>
        <BrowserRouter>
          {login && <Menu />}
          <ContainerContent>
            <Routes>
              <Route
                index
                element={<Private item={<Home />} loginOk={handleLoginOk} />}
              />
              <Route path="/home" element={<Home />} />
              <Route path="/teste" element={<Teste />} />
              <Route path="/novo" element={<Novo />} />
              <Route
                path="/login"
                element={<Login loginOk={handleLoginOk} />}
              />
            </Routes>
          </ContainerContent>
        </BrowserRouter>
      </ContainerMain> */}
    </>
  );
}

export default App;

function Teste2() {
  return <h2>Teste</h2>;
}

function Novo() {
  return <h2>Novo</h2>;
}
