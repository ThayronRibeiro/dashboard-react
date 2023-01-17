import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./login";
import { Home } from "./home";
//import { Teste } from "./teste";
import { ErrorPage } from "./error";
import { Cadastro } from "./cadastro";
import { Configuracoes } from "./configuracoes";
import { Clientes } from "./clientes";
import { ClientesInfo } from "./clientesinfo";
import { ClientesAdd } from "./addPages/clientesAdd";

const Private = ({ Item }: any) => {
  let signed = localStorage.getItem("authenticated");

  return signed ? Item : <Login />;
};

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={<Home />} />} />
          <Route path="/clientes" element={<Private Item={<Clientes />} />} />
          <Route
            path="/clientes/add"
            element={<Private Item={<ClientesAdd />} />}
          />
          <Route
            path="/clientes/:id"
            element={<Private Item={<ClientesInfo />} />}
          />
          <Route
            path="/configuracoes"
            element={<Private Item={<Configuracoes />} />}
          />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};
