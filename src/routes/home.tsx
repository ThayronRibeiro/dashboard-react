import { useState, useEffect } from "react";

import { Navigate } from "react-router-dom";

export const Home = () => {
  const [authenticated, setauthenticated] = useState("");
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  return <h2>Home</h2>;
};
