import { ClientesType } from "../../routes/clientes";
import * as SC from "../../styles/Table";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";
import { RefObject, useEffect, useState } from "react";
import alertify from "alertifyjs";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Client } from "app/models/clients";

type ListaProps = {
  arrayContent: ClientesType[];
  handleDel?: () => void;
};

export const Lista = ({ arrayContent, handleDel }: ListaProps) => {
  const nav = useNavigate();
  const handleClick = (id: string) => {
    nav(`/clientes/${id}`);
  };
  const handleAdd = () => {
    nav("/clientes/add");
  };

  const [clientesList, setClientesList] = useState<ClientesType[]>([]);

  const clientesDb = localStorage.getItem("clientesDb");

  const [parent, enableAnimations] = useAutoAnimate();

  useEffect(() => {
    if (clientesDb) {
      const parseClientes = JSON.parse(clientesDb);
      setClientesList(parseClientes);
    }
  }, [clientesList, clientesDb]);

  function handleCheckDel(id: string) {
    const parseClientes = JSON.parse(clientesDb!);
    const clienteChecked = parseClientes.find(
      (cliente: ClientesType) => cliente.id === id
    );
    if (clienteChecked) {
      clienteChecked.selected = !clienteChecked.selected;
      localStorage.setItem("clientesDb", JSON.stringify(parseClientes));
    }
  }

  const handleDelete = (id: string | undefined) => {
    const parseClientes = JSON.parse(clientesDb!);
    if (id) {
      alertify
        .confirm(
          "Excluir cliente",
          "Confirma a exclusão do cliente?",
          () => {
            const tempTask = parseClientes.filter(
              (del: ClientesType) => del.id !== id
            );
            setClientesList(tempTask!);
            localStorage.setItem("clientesDb", JSON.stringify(tempTask));
            alertify.success("Cliente excluído com sucesso!");
          },
          () => {}
        )
        .set("closable", false)
        .set("labels", { ok: "Ok", cancel: "Cancelar" });
      // if (window.confirm("Confirm task deletion?") == true) {
      //   const tempTask = parseClientes.filter(
      //     (del: ClientesType) => del.id !== id
      //   );
      //   setClientesList(tempTask!);
      //   localStorage.setItem("clientesDb", JSON.stringify(tempTask));
      // }
    }
  };

  return (
    <>
      <SC.ButtonsArea>
        <button onClick={handleAdd}>
          <FaPlus />
          Adicionar
        </button>
        {/* <button onClick={handleDel}>
          <FaTrash /> Deletar
        </button> */}
      </SC.ButtonsArea>
      <SC.ContainerList>
        <SC.Table>
          <SC.TableHeader>
            <tr>
              {/* <SC.TableHeaderItem width={5}></SC.TableHeaderItem> */}
              <SC.TableHeaderItem>ID</SC.TableHeaderItem>
              <SC.TableHeaderItem>Nome</SC.TableHeaderItem>
              <SC.TableHeaderItem>Email</SC.TableHeaderItem>
              <SC.TableHeaderItem></SC.TableHeaderItem>
            </tr>
          </SC.TableHeader>
          <SC.TableBody ref={parent as RefObject<HTMLTableSectionElement>}>
            {arrayContent && (
              <>
                {arrayContent.map((item: Client) => {
                  return (
                    <>
                      <SC.TableContent>
                        <SC.TableRowItem
                          onClick={() => {
                            if (item.id) {
                              handleClick(item.id);
                            }
                          }}
                        >
                          {item.id}
                        </SC.TableRowItem>
                        <SC.TableRowItem
                          onClick={() => {
                            if (item.id) {
                              handleClick(item.id);
                            }
                          }}
                        >
                          {item.nome}
                        </SC.TableRowItem>
                        <SC.TableRowItem
                          onClick={() => {
                            if (item.id) {
                              handleClick(item.id);
                            }
                          }}
                        >
                          {item.email}
                        </SC.TableRowItem>
                        <SC.TableRowItem center={true}>
                          <i>
                            <FaEdit />
                          </i>

                          <i onClick={() => handleDelete(item.id)}>
                            <FaTrash />
                          </i>
                        </SC.TableRowItem>
                      </SC.TableContent>
                    </>
                  );
                })}
              </>
            )}
          </SC.TableBody>
        </SC.Table>
        {arrayContent.length < 1 && (
          <p>Não há registros para serem exibidos.</p>
        )}
      </SC.ContainerList>
    </>
  );
};
