import { useState, useEffect } from "react";
import * as SC from "../styles/Form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import alertify from "alertifyjs";
import { v4 as uuid } from "uuid";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useUserService } from "../app/services";

import "alertifyjs/build/alertify.min.js";
import "alertifyjs/build/css/alertify.min.css";
import { User } from "../app/models/users";

//** Tipagem dos usuários */
export type Users = {
  id?: string;
  usuario?: string;
  senha?: string;
  imgUser?: string;
  genCliente?: number | undefined;
};

export const Cadastro = () => {
  const service = useUserService();
  const [usuario, setusuario] = useState("");
  const [senha, setsenha] = useState("");
  const [confirmsenha, setConfirmsenha] = useState("");
  //const users = [{ usuario: "admin", senha: "123" }];
  const [usersDb, setUsersDb] = useState<Users[]>([]);

  const [parent, enableAnimations] = useAutoAnimate({ duration: 1000 });

  alertify.set("notifier", "position", "top-right");
  document.title = "Cadastro | Dashboard ReactJs";

  const navigate = useNavigate();
  //const [authenticated, setauthenticated] = useState(false);
  const auth = localStorage.getItem("authenticated");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const usuarioSaved: User = {
      usuario,
      senha,
    };

    if (senha !== confirmsenha) {
      let div = document.getElementById("form");
      if (div != null) {
        div.innerHTML = `<p>As senhas não coincidem!</p>`;
      }
    } else {
      usuarioSaved.acessoToken = uuid();
      console.log(usuarioSaved);
      service
        .salvar(usuarioSaved)
        .then(() => {
          alertify.success("Usuário cadastrado com sucesso!");
          navigate("/");
        })
        .catch((err) => {
          alertify.error(
            "Usuário já cadastrado! Por favor utilize outro usuário!"
          );
        });
    }

    /*
    const users = localStorage.getItem("usersDb");
    if (users) {
      const usersArray: Users[] = JSON.parse(users);
      const account = usersArray.find(
        (user) => user.usuario === data.email
      );
      if (account) {
        alertify.error("Usuário já cadastrado!");
      } else {
        if (senha !== confirmsenha) {
          let div = document.getElementById("form");
          if (div != null) {
            div.innerHTML = `<p>As senhas não coincidem!</p>`;
          }
        } else {
          usersArray.push({
            id: uuid(),
            usuario: usuario,
            senha: senha,
            imgUser: "",
            genCliente: 0,
          });

          localStorage.setItem("usersDb", JSON.stringify(usersArray));
          alertify.success("Usuário cadastrado com sucesso!");
          navigate("/");
        }
      }
    } else {
      usersDb.push({
        id: uuid(),
        usuario: usuario,
        senha: senha,
        imgUser: "",
        genCliente: 0,
      });
      localStorage.setItem("usersDb", JSON.stringify(usersDb));
      console.log(localStorage.getItem("usersDb"));
      alertify.success("Usuário cadastrado com sucesso!");
      navigate("/");
    }
    */
  };

  useEffect(() => {
    const listener = (event: any) => {
      if (
        event.code === "Enter" ||
        event.code === "NumpadEnter" ||
        event.keyCode === 13
      ) {
        let input: HTMLInputElement | null =
          document.querySelector("#inputCadastro");
        setTimeout(() => {
          if (input) {
            input.click();
          }
        }, 100);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [usuario, senha, confirmsenha, handleSubmit]);

  return (
    <SC.ContainerCadastro>
      <div className="cadastroAside"></div>
      <SC.FormArea type="Cadastro">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Usuário</label>
          <SC.InputField
            id="usuario"
            type="text"
            value={usuario}
            placeholder="Digite seu usuário!"
            {...register("usuario", { required: true })}
            onChange={(e) => setusuario(e.target.value.toLowerCase())}
            errors={errors.usuario && !usuario}
            autoComplete="off"
          />
          {errors.usuario && !usuario && <p>Digite seu usuário!</p>}
          <label>Senha</label>
          <SC.InputField
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            {...register("senha", { required: true })}
            onChange={(e) => setsenha(e.target.value)}
            errors={errors.senha && !senha}
            autoComplete="off"
          />
          {errors.senha && !senha && <p>Digite sua senha!</p>}
          <label>Confirmação de senha</label>
          <SC.InputField
            type="password"
            placeholder="Digite sua confirmação de senha"
            value={confirmsenha}
            {...register("confirmsenha", { required: true })}
            onChange={(e) => setConfirmsenha(e.target.value)}
            errors={errors.confirmsenha && !confirmsenha}
            autoComplete="off"
          />
          {errors.senha && !senha && <p>Digite sua senha!</p>}
          <div id="form"></div>
          <input type="submit" value="Cadastrar" id="inputCadastro" />
          <span translate="no">
            Já possui conta?{" "}
            <strong onClick={() => navigate("/")}>Faça seu login.</strong>
          </span>
        </form>
      </SC.FormArea>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#230bf9"
          fill-opacity="1"
          d="M0,64L120,80C240,96,480,128,720,138.7C960,149,1200,139,1320,133.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1c6cea"
          fill-opacity="1"
          d="M0,320L120,277.3C240,235,480,149,720,117.3C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </SC.ContainerCadastro>
  );
};
