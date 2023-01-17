import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import * as SC from "../styles/ContainerContent";

export const Home = () => {
  const auth = localStorage.getItem("authenticated");
  const nav = useNavigate();
  document.title = "Home | Dashboard ReactJs";
  useEffect(() => {
    switch (auth) {
      case "false":
        nav("/");
        break;
    }
  }, [auth, nav]);

  if (!!auth) {
    return (
      <>
        <Menu />
        <SC.ContainerContent>
          <h2>Home</h2>

          {/* <label htmlFor="xml" style={{ cursor: "pointer" }}>
            <div>
              <span>Importar XML</span>
            </div>
          </label>
          <input
            id="xml"
            type="file"
            accept=".xml"
            onChange={loadXMLDoc}
            style={{ visibility: "hidden" }}
          ></input>

          <table id="id"></table> */}
        </SC.ContainerContent>
      </>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};
