import { useState, useEffect } from "react";

import { Navigate } from "react-router-dom";

export const Teste = () => {
  const [authenticated, setauthenticated] = useState("");
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, [authenticated]);

  return <h2>Teste</h2>;
};
