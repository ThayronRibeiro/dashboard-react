import React, { useState, useEffect } from "react";
import "./App.css";
import { Body } from "./styles/global";
import { Menu } from "./components/Menu";
import { ContainerMain } from "./styles/ContainerMain";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import { ContainerContent } from "./styles/ContainerContent";

//ROTAS
import { Login } from "./routes/login";
import { Home } from "./routes/home";
import { Teste } from "./routes/teste";

function App() {
  const [login, setLogin] = useState(false);

  const handleLoginOk = () => {
    setLogin(true);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser == "true") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login]);

  return (
    <>
      <Body />
      <ContainerMain>
        <BrowserRouter>
          {login && <Menu />}
          <ContainerContent>
            <Routes>
              {/* <Route path="*"> */}
              <Route index element={<Login loginOk={handleLoginOk} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/teste" element={<Teste />} />
              <Route path="/novo" element={<Novo />} />
              <Route
                path="/login"
                element={<Login loginOk={handleLoginOk} />}
              />
              {/* </Route> */}
            </Routes>
          </ContainerContent>
        </BrowserRouter>
      </ContainerMain>
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
