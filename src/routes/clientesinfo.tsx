import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import { ContainerContent } from "../styles/ContainerContent";
import { ClientesType } from "./clientes";

import { FaSave, FaTrash } from "react-icons/fa";

import * as SC from "../styles/ClientePage";
import { useClientService } from "app/services";
import { Client } from "app/models/clients";

export const ClientesInfo = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const clientesDb = localStorage.getItem("clientesDb");

  const service = useClientService();

  const [cliente, setCliente] = useState<Client>();

  useEffect(() => {
    if (clientesDb) {
      const parseClientes = JSON.parse(clientesDb);
      const searchCliente = parseClientes.find(
        (cliente: any) => cliente.id === id
      );
      console.log(searchCliente);
      setCliente(searchCliente);
    }
  }, [clientesDb, id]);

  useEffect(() => {
    service.infoCliente(id).then((value) => {
      setCliente(value);
    });
  }, [cliente]);

  return (
    <>
      <Menu />
      <ContainerContent>
        <h3
          onClick={() => nav("/clientes")}
          style={{ cursor: "pointer" }}
        >{`< Voltar`}</h3>

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
        <SC.ClienteContainer>
          <SC.ClienteTitle>
            <h2>
              {cliente?.id} - {cliente?.nome}
            </h2>
          </SC.ClienteTitle>
          <SC.ClienteContent>
            {cliente && (
              <>
                <span>Nome: {cliente.nome}</span>
                <span>Email: {cliente.email}</span>
              </>
            )}
          </SC.ClienteContent>
        </SC.ClienteContainer>
      </ContainerContent>
    </>
  );
};
