import { useState, useEffect, ChangeEvent } from "react";
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
  }, []);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setAuthenticated(!!loggedInUser);
  //   }
  // }, [authenticated, signed]);

  // const lerXml = (e: ChangeEvent<HTMLInputElement>) => {
  var loadXMLDoc = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let nameFile = e.target.files[0].name;

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", `${nameFile}`, false);
      xmlhttp.setRequestHeader("Content-Type", "text/xml");
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
          alert(xmlhttp.responseXML);
        }
      };
      xmlhttp.send();
      var xmlDoc = xmlhttp.responseXML;
      var i;

      //console.log(xmlDoc);

      var table = `<tr><th>Firstname</th><th>Lastname</th>
              <th>Title</th><th>Division</th>
              <th>Building</th><th>Room</th>
          </tr>`;
      if (xmlDoc) {
        var x = xmlDoc.getElementsByTagName("Employee");

        for (i = 0; i < x.length; i++) {
          table +=
            "<tr><td>" +
            x[i].getElementsByTagName("Firstname")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("Lastname")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("Division")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("Building")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("Room")[0].childNodes[0].nodeValue +
            "</td></tr>";
        }

        // Print the xml data in table form
        let tableHTML = document.getElementById("id");
        if (tableHTML) {
          tableHTML.innerHTML = table;
        }
      }
      console.log("teste");
    }
  };

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
