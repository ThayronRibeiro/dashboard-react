import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Menu } from "../components/Menu";

export const Home = () => {
  const auth = localStorage.getItem("authenticated");

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setAuthenticated(!!loggedInUser);
  //   }
  // }, [authenticated, signed]);

  if (auth) {
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
