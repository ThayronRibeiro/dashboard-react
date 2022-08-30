import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import * as SC from "../styles/ContainerContent";

export const Home = () => {
  const auth = localStorage.getItem("authenticated");
  const nav = useNavigate();

  useEffect(() => {
    switch (auth) {
      case "false":
        nav("/");
        break;
    }

    document.title = "Home | Dashboard ReactJs";
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
        <SC.ContainerContent>
          <h2>Home</h2>
        </SC.ContainerContent>
      </>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};
