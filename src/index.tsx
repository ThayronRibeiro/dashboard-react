import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "alertifyjs/build/alertify.min.js";
import "alertifyjs/build/css/alertify.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./routes/login";
import { Cadastro } from "./routes/cadastro";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
