import { useState, useEffect } from "react";
import { Menu } from "../components/Menu";

import { Navigate } from "react-router-dom";

export const Teste = () => {
  const [authenticated, setauthenticated] = useState("");

  const auth = localStorage.getItem("authenticated");
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, [authenticated]);

  if (auth == "true") {
    return (
      <>
        <Menu />
        <h2>Teste</h2>
      </>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};
