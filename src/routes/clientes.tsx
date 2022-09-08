import { useEffect, useState } from "react";
import { Lista } from "../components/Lista";
import { Menu } from "../components/Menu";
import { ContainerContent } from "../styles/ContainerContent";
import alertify from "alertifyjs";

export type ClientesType = {
  key?: string;
  id?: string;
  name?: string;
  email?: string;
  userId?: string;
  selected?: boolean;
};

export const Clientes = () => {
  document.title = "Clientes | Dashboard ReactJs";

  const [clientesList, setClientesList] = useState<ClientesType[]>([]);

  // localStorage.setItem("clientesDb", JSON.stringify(clientesList));
  const clientesDb = localStorage.getItem("clientesDb");
  useEffect(() => {
    if (clientesDb) {
      const parseClientes = JSON.parse(clientesDb);
      setClientesList(parseClientes);
    }
  }, [clientesList, clientesDb]);

  const handleDel = () => {
    if (clientesDb) {
      const parseClientes = JSON.parse(clientesDb!);
      const clientesSaved = parseClientes.find(
        (cliente: ClientesType) => cliente.selected !== true
      );
      if (clientesSaved) {
        console.log(clientesSaved);
        setClientesList(clientesSaved);
        localStorage.setItem("clientesDb", JSON.stringify(clientesSaved));
      }
    } else {
      alertify.error("Não há clientes cadastrados para serem excluídos!");
    }
    // localStorage.setItem("clientesDb", JSON.stringify(clientesSaved));
  };

  return (
    <>
      <Menu />
      <ContainerContent>
        <h2>Clientes</h2>

        <Lista arrayContent={clientesList} handleDel={handleDel} />
      </ContainerContent>
    </>
  );
};
