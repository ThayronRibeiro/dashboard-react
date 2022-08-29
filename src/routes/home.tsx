import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";

export const Home = () => {
  const auth = localStorage.getItem("authenticated");
  const nav = useNavigate();

  useEffect(() => {
    switch (auth) {
      case "false":
        nav("/");
        break;
    }
    // if (auth == "false") {
    //   console.log("Teste Ok!");
    //   nav("/");
    // } else {
    //   <Navigate replace to="/" />;
    // }
  }, []);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setAuthenticated(!!loggedInUser);
  //   }
  // }, [authenticated, signed]);

  if (!!auth) {
    return (
      <>
        <Menu />
        <h2>Home</h2>
      </>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};
