import { useEffect, useState } from "react";
import { Lista } from "../components/Lista";
import { Menu } from "../components/Menu";
import { ContainerContent } from "../styles/ContainerContent";

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

  useEffect(() => {
    const clientesDb = localStorage.getItem("clientesDb");
    if (clientesDb) {
      const parseClientes = JSON.parse(clientesDb);
      setClientesList(parseClientes);
    }
  }, [clientesList]);

  return (
    <>
      <Menu />
      <ContainerContent>
        <h2>Clientes</h2>

        <Lista arrayContent={clientesList} />
      </ContainerContent>
    </>
  );
};
