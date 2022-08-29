import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./login";
import { Home } from "./home";
import { Teste } from "./teste";
import { ErrorPage } from "./error";

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
          <Route path="/teste" element={<Private Item={<Teste />} />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};
