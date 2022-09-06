import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import { ContainerContent } from "../styles/ContainerContent";
import { ClientesType } from "./clientes";

import { FaSave, FaTrash } from "react-icons/fa";

import * as SC from "../styles/ClientePage";

export const ClientesInfo = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const clientesDb = localStorage.getItem("clientesDb");

  const [cliente, setCliente] = useState<ClientesType>();

  useEffect(() => {
    if (clientesDb) {
      const parseClientes = JSON.parse(clientesDb);
      const searchCliente = parseClientes.find(
        (cliente: any) => cliente.id === id
      );
      console.log(searchCliente);
      setCliente(searchCliente);
    }
  }, [clientesDb]);

  return (
    <>
      <Menu />
      <ContainerContent>
        <h3
          onClick={() => nav("/clientes")}
          style={{ cursor: "pointer" }}
        >{`< Voltar`}</h3>

        <SC.ClienteContainer>
          <SC.ButtonGroup>
            <button>
              <FaSave />
              Salvar
            </button>
            <button>
              <FaTrash />
              Excluir
            </button>
          </SC.ButtonGroup>
          <SC.ClienteTitle>
            <h2>
              {cliente?.key} - {cliente?.name}
            </h2>
          </SC.ClienteTitle>
          <SC.ClienteContent>
            {cliente && (
              <>
                <span>Nome: {cliente.name}</span>
                <span>Email: {cliente.email}</span>
              </>
            )}
          </SC.ClienteContent>
        </SC.ClienteContainer>
      </ContainerContent>
    </>
  );
};
