import { ClientesType } from "../../routes/clientes";
import * as SC from "../../styles/Table";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus } from "react-icons/fa";
import alertify from "alertifyjs";
import { useState } from "react";
import { Modal } from "../Modal";
import { InputField } from "../../styles/Form";

type ListaProps = {
  arrayContent: ClientesType[];
};

export const Lista = ({ arrayContent }: ListaProps) => {
  const nav = useNavigate();
  const handleClick = (id: string) => {
    nav(`/clientes/${id}`);
  };
  const handleAdd = () => {
    nav("/clientes/add");
  };
  return (
    <>
      <SC.ContainerList>
        <SC.ButtonsArea>
          <button onClick={handleAdd}>
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
              <SC.TableHeaderItem></SC.TableHeaderItem>
              <SC.TableHeaderItem>ID</SC.TableHeaderItem>
              <SC.TableHeaderItem>Nome</SC.TableHeaderItem>
              <SC.TableHeaderItem>Email</SC.TableHeaderItem>
            </tr>
          </SC.TableHeader>
          <SC.TableBody>
            {arrayContent.map((item) => {
              return (
                <>
                  <SC.TableContent>
                    <SC.TableRowItem center={true}>
                      <input type="checkbox" />
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
          </SC.TableBody>
        </SC.Table>
      </SC.ContainerList>
    </>
  );
};
