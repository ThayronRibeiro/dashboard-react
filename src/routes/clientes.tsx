import { useEffect, useState } from "react";
import { Lista } from "../components/Lista";
import { Menu } from "../components/Menu";
import { Navigate, useNavigate } from "react-router-dom";
import { ContainerContent } from "../styles/ContainerContent";
import alertify from "alertifyjs";
import ClientTable from "components/Clients/Table";
import { useClientService } from "app/services";
import { User } from "app/models/users";
import { Layout } from "components/common/Layout";
import { Client } from "app/models/clients";

//** Tipagem de Cliente */
export type ClientesType = {
  key?: string;
  id?: string;
  name?: string;
  email?: string;
  userAuthId?: string;
  selected?: boolean;
};

export const Clientes = () => {
  document.title = "Clientes | Dashboard ReactJs";

  alertify.set("notifier", "position", "top-right");

  const service = useClientService();

  const [clientesList, setClientesList] = useState<ClientesType[]>([]);
  const [clientList, setClientList] = useState<Client[]>([]);
  const clientesDb = localStorage.getItem("clientesDb");
  const userAuthId = localStorage.getItem("userAuthId");
  const auth = localStorage.getItem("authenticated");

  const nav = useNavigate();

  useEffect(() => {
    switch (auth) {
      case "false":
        nav("/");
        break;
    }
  }, [auth, nav]);

  // useEffect(() => {
  //   if (clientesDb) {
  //     const parseClientes = JSON.parse(clientesDb);
  //     const correctClientes = parseClientes.filter(
  //       (cliente: ClientesType) => cliente.userAuthId === userAuthId
  //     );
  //     //console.log(correctClientes);
  //     setClientesList(correctClientes);
  //   }
  // }, [clientesList, clientesDb, userAuthId]);

  useEffect(() => {
    service.listar().then((value) => {
      setClientList(value);
      console.log(value);
    });
  }, [userAuthId, clientList]);

  // const handleDel = () => {
  //   if (clientesDb) {
  //     const parseClientes = JSON.parse(clientesDb!);
  //     const clientesSaved = parseClientes.filter(
  //       (cliente: ClientesType) => cliente.selected !== true
  //     );
  //     if (clientesSaved) {
  //       setClientesList(clientesSaved);
  //       localStorage.setItem("clientesDb", JSON.stringify(clientesSaved));
  //       console.log(clientesSaved);
  //     }
  //   } else {
  //     alertify.error("Não há clientes cadastrados para serem excluídos!");
  //   }
  // };

  if (!!auth) {
    return (
      <>
        <Layout title="Clientes">
          <>
            <Lista arrayContent={clientList} />

            <ClientTable clients={clientList || []} />
          </>
        </Layout>
      </>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};
