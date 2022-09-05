import { useState } from "react";
import { Lista } from "../components/Lista";
import { Menu } from "../components/Menu";
import { ContainerContent } from "../styles/ContainerContent";

export type ClientesType = {
  id?: string;
  name?: string;
  email?: string;
};

export const Clientes = () => {
  document.title = "Clientes | Dashboard ReactJs";
  const [clientesList, setClientesList] = useState<ClientesType[]>([
    { id: "1", name: "Teste", email: "teste@teste.com" },
    { id: "2", name: "Teste2", email: "teste2@teste.com" },
  ]);

  console.log(clientesList);

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
