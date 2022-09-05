import { useParams, useNavigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import { ContainerContent } from "../styles/ContainerContent";

export const ClientesInfo = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const searchCliente = () => {};

  return (
    <>
      <Menu />
      <ContainerContent>
        <h3
          onClick={() => nav("/clientes")}
          style={{ cursor: "pointer" }}
        >{`< Voltar`}</h3>
        <h2>Cliente {id}</h2>
      </ContainerContent>
    </>
  );
};
