import { Menu } from "../../components/Menu";
import { ContainerContent } from "../../styles/ContainerContent";
import { InputField } from "../../styles/Form";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
import { ClientesType } from "../clientes";
import { AddContainer } from "../../styles/ClientePage";

export const ClientesAdd = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [clientes, setclientes] = useState<any[]>([]);

  const nav = useNavigate();

  const clientesDb = localStorage.getItem("clientesDb");
  const userAuthId = localStorage.getItem("userAuthId");

  useEffect(() => {
    const userAuthId = localStorage.getItem("userAuthId");
  }, [userAuthId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Teste");
    if (clientesDb) {
      const parseClientes = JSON.parse(clientesDb);
      parseClientes.push({
        key: parseClientes.length + 1,
        id: uuid(),
        name,
        email,
        userAuthId: userAuthId,
        selected: false,
      });
      localStorage.setItem("clientesDb", JSON.stringify(parseClientes));
    } else {
      if (userAuthId) {
        clientes.push({
          key: clientes.length + 1,
          id: uuid(),
          name,
          email,
          userAuthId: userAuthId,
          selected: false,
        });
        localStorage.setItem("clientesDb", JSON.stringify(clientes));
      }
    }

    alertify.success("Cliente cadastrado com sucesso!");
    nav("/clientes/");
  };

  const backCliente = () => {
    nav("/clientes/");
  };

  return (
    <>
      <Menu />
      <ContainerContent>
        <AddContainer>
          <h2>Adicionar cliente</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome</label>
            <InputField
              type="text"
              placeholder="Informe o nome do cliente"
              id="name"
              value={name}
              {...register("name", { required: true })}
              onChange={(e) => setName(e.target.value)}
              errors={errors.name}
            />
            <label htmlFor="email">Email</label>
            <InputField
              type="email"
              placeholder="Informe o email do cliente"
              id="email"
              value={email}
              {...register("email", { required: true })}
              onChange={(e) => setEmail(e.target.value)}
              errors={errors.email}
            />
            <label htmlFor="confirmEmail">Confirmação de Email</label>
            <InputField
              type="email"
              placeholder="Informe o email do cliente novamente"
              id="confirmEmail"
              value={confirmEmail}
              {...register("confirmEmail", { required: true })}
              onChange={(e) => setConfirmEmail(e.target.value)}
              errors={errors.confirmEmail}
            />
            <input value="Salvar" type="submit" />
            <button onClick={backCliente}>Voltar</button>
          </form>
        </AddContainer>
      </ContainerContent>
    </>
  );
};
