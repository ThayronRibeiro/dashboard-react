import { ClientesType } from "../../routes/clientes";
import * as SC from "../../styles/Table";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaPlus } from "react-icons/fa";

type ListaProps = {
  arrayContent: ClientesType[];
};

export const Lista = ({ arrayContent }: ListaProps) => {
  const nav = useNavigate();

  const handleClick = (id: string) => {
    nav(`/clientes/${id}`);
  };
  return (
    <>
      <SC.ContainerList>
        <SC.ButtonsArea>
          <button>
            <FaPlus />
            Adicionar
          </button>
          <button>
            <FaTrash /> Deletar
          </button>
        </SC.ButtonsArea>
        <SC.Table>
          <SC.TableHeader>
            <tr>
              <SC.TableHeaderItem>ID</SC.TableHeaderItem>
              <SC.TableHeaderItem>Nome</SC.TableHeaderItem>
              <SC.TableHeaderItem>Email</SC.TableHeaderItem>
            </tr>
          </SC.TableHeader>
          <SC.TableBody>
            {arrayContent.map((item) => {
              return (
                <SC.TableContent
                  onClick={() => {
                    if (item.id) {
                      handleClick(item.id);
                    }
                  }}
                >
                  <SC.TableRowItem>{item.id}</SC.TableRowItem>
                  <SC.TableRowItem>{item.name}</SC.TableRowItem>
                  <SC.TableRowItem>{item.email}</SC.TableRowItem>
                </SC.TableContent>
              );
            })}
          </SC.TableBody>
        </SC.Table>
      </SC.ContainerList>
    </>
  );
};
