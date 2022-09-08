import { ClientesType } from "../../routes/clientes";
import * as SC from "../../styles/Table";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    if (clientesDb) {
      const parseClientes = JSON.parse(clientesDb);
      setClientesList(parseClientes);
    }
  }, [clientesList, clientesDb]);

  const handleCheckDel = (id: string) => {
    const parseClientes = JSON.parse(clientesDb!);
    const clienteChecked = parseClientes.find(
      (cliente: ClientesType) => cliente.id === id
    );
    if (clienteChecked) {
      clienteChecked.selected = !clienteChecked.selected;
      localStorage.setItem("clientesDb", JSON.stringify(parseClientes));
    }
  };

  return (
    <>
      <SC.ContainerList>
        <SC.ButtonsArea>
          <button onClick={handleAdd}>
            <FaPlus />
            Adicionar
          </button>
          <button onClick={handleDel}>
            <FaTrash /> Deletar
          </button>
        </SC.ButtonsArea>
        <SC.Table>
          <SC.TableHeader>
            <tr>
              <SC.TableHeaderItem></SC.TableHeaderItem>
              <SC.TableHeaderItem>ID</SC.TableHeaderItem>
              <SC.TableHeaderItem>Nome</SC.TableHeaderItem>
              <SC.TableHeaderItem>Email</SC.TableHeaderItem>
            </tr>
          </SC.TableHeader>
          <SC.TableBody>
            {arrayContent && (
              <>
                {arrayContent.map((item) => {
                  return (
                    <>
                      <SC.TableContent>
                        <SC.TableRowItem center={true}>
                          <input
                            id="check"
                            placeholder="check"
                            type="checkbox"
                            onChange={() => handleCheckDel(item.id!)}
                          />
                        </SC.TableRowItem>
                        <SC.TableRowItem
                          onClick={() => {
                            if (item.id) {
                              handleClick(item.id);
                            }
                          }}
                        >
                          {item.key}
                        </SC.TableRowItem>
                        <SC.TableRowItem
                          onClick={() => {
                            if (item.id) {
                              handleClick(item.id);
                            }
                          }}
                        >
                          {item.name}
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
                      </SC.TableContent>
                    </>
                  );
                })}
              </>
            )}
            {!arrayContent && <p>Não há registros para serem exibidos.</p>}
          </SC.TableBody>
        </SC.Table>
      </SC.ContainerList>
    </>
  );
};
