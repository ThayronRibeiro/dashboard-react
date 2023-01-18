import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cards from "../components/Cards";
import { Menu } from "../components/Menu";
import { CardArea } from "../styles/Cards";
import * as SC from "../styles/ContainerContent";

export const Home = () => {
  const auth = localStorage.getItem("authenticated");
  const nav = useNavigate();
  document.title = "Home | Dashboard ReactJs";

  const clientesDb = localStorage.getItem("clientesDb");
  const userAuthId = localStorage.getItem("userAuthId");

  const [qtdeClientesCadastrados, setQtdeClientesCadastrados] =
    useState<number>();

  let cardValues = [
    { title: "Clientes cadastrados", qtde: qtdeClientesCadastrados },
    { title: "Teste", qtde: 0 },
  ];

  useEffect(() => {
    switch (auth) {
      case "false":
        nav("/");
        break;
    }
  }, [auth, nav]);

  useEffect(() => {
    if (clientesDb) {
      const parseClientes = JSON.parse(clientesDb);
      const clientesCadastrados = parseClientes.filter(
        (clienteDb: any) => clienteDb.userAuthId === userAuthId
      );
      console.log(clientesCadastrados.length);
      setQtdeClientesCadastrados(clientesCadastrados.length);
    }
  });

  if (!!auth) {
    return (
      <>
        <Menu />
        <SC.ContainerContent>
          <h2>Página Inicial</h2>
          <>
            <CardArea>
              {cardValues && (
                <>
                  {cardValues.map((cardItem) => {
                    return (
                      <>
                        <Cards title={cardItem.title} qtde={cardItem.qtde} />
                      </>
                    );
                  })}
                </>
              )}
            </CardArea>
          </>
        </SC.ContainerContent>
      </>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};
