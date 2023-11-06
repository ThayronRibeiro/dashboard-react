import { Menu } from "../../components/Menu";
import { ContainerContent } from "../../styles/ContainerContent";
import { InputField, TwoColumnInputs } from "../../styles/Form";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
// import { ClientesType } from "../clientes";
import { AddContainer } from "../../styles/ClientePage";
import { Users } from "../cadastro";
import { Client } from "app/models/clients";
import { useClientService } from "app/services";

export const ClientesAdd = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const service = useClientService();

  const [clientes, setClientes] = useState<any[]>([]);

  const nav = useNavigate();

  const clientesDb = localStorage.getItem("clientesDb");
  const userAuthId = localStorage.getItem("userAuthId");
  const usersDb = localStorage.getItem("usersDb");

  const [atualUser, setAtualUser] = useState<Users[]>([]);
  const [genCliente, setGenCliente] = useState<any>();

  // if (usersDb) {
  //   const parseUsers = JSON.parse(usersDb);
  //   const atualUserFilter = parseUsers.filter(
  //     (user: Users) => user.id === userAuthId
  //   );
  //   setAtualUser(atualUserFilter);
  // }

  // console.log("usuario atual:" + atualUser?.userName);

  useEffect(() => {
    if (usersDb) {
      const parseUsers = JSON.parse(usersDb);
      const atualUserFilter = parseUsers.filter(
        (user: Users) => user.id === userAuthId
      );
      setAtualUser(atualUserFilter);
      setGenCliente(
        atualUser.map((user) => {
          return user.genCliente;
        })
      );

      console.log(
        "usuario atual:" +
          atualUser.map((user) => {
            return user.usuario;
          })
      );
    }
  }, [usersDb, userAuthId, atualUser]);

  // useEffect(() => {
  //   const userAuthId = localStorage.getItem("userAuthId");
  // }, [userAuthId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const clientSaved: Client = {
      nome,
      email,
    };

    if (email !== confirmEmail) {
      let div = document.getElementById("form");
      if (div != null) {
        div.innerHTML = `<p>Os emails não coincidem!</p>`;
      }
    } else {
      service
        .salvar(clientSaved)
        .then(() => {
          alertify.success("Cliente cadastrado com sucesso!");
          nav("/clientes/");
        })
        .catch(() => {
          alertify.error("Cliente não foi cadastrado!");
        });
    }

    // if (clientesDb) {
    //   const parseClientes = JSON.parse(clientesDb);
    //   parseClientes.push({
    //     //key: parseClientes.length + 1,
    //     key: parseInt(genCliente) + 1,
    //     id: uuid(),
    //     name,
    //     email,
    //     userAuthId: userAuthId,
    //     selected: false,
    //   });
    //   localStorage.setItem("clientesDb", JSON.stringify(parseClientes));
    // } else {
    //   if (userAuthId) {
    //     clientes.push({
    //       // key: clientes.length + 1,
    //       key: parseInt(genCliente) + 1,
    //       id: uuid(),
    //       name,
    //       email,
    //       userAuthId: userAuthId,
    //       selected: false,
    //     });
    //     localStorage.setItem("clientesDb", JSON.stringify(clientes));
    //   }
    // }

    // const users = localStorage.getItem("usersDb");
    // if (users) {
    //   const parseUsers = JSON.parse(users);
    //   const altGenerator = parseUsers.find(
    //     (user: any) => user.id === userAuthId
    //   );
    //   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //   altGenerator.genCliente = parseInt(genCliente) + 1;
    //   localStorage.setItem("usersDb", JSON.stringify(parseUsers));
    // }

    // alertify.success("Cliente cadastrado com sucesso!");
    // nav("/clientes/");
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
            <label htmlFor="nome">Nome</label>
            <InputField
              type="text"
              placeholder="Informe o nome do cliente"
              id="name"
              value={nome}
              {...register("name", { required: true })}
              onChange={(e) => setNome(e.target.value)}
              errors={errors.nome}
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
            />
            <div id="form"></div>
            <input value="Salvar" type="submit" />
            <button onClick={backCliente}>Voltar</button>
          </form>
        </AddContainer>
      </ContainerContent>
    </>
  );
};
