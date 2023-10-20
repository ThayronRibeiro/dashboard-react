import { useState, useEffect } from "react";
import * as SC from "../styles/Form";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import alertify from "alertifyjs";
import "alertifyjs/build/alertify.min.js";
import "alertifyjs/build/css/alertify.min.css";
//import { Users } from "./cadastro";
import { Modal } from "../components/Modal";
import { User } from "../app/models/users";
//import { info } from "console";
//import { click } from "@testing-library/user-event/dist/click";
//import { JsxElement } from "typescript";

import {useUserService} from '../app/services'

type Props = {
  loginOk?: () => void;
};

export const Login = ({ loginOk }: Props) => {
  alertify.set("notifier", "position", "top-right");


  const service = useUserService();
  const [usuario, setusuario] = useState("");
  const [senha, setsenha] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [usernameChange, setUsernameChange] = useState("");
  const [passwordChange, setPasswordChange] = useState("");
  const [passwordConfirmChange, setConfirmPasswordChange] = useState("");
  const [stepChangePassword, setStepChangePassword] = useState(1);
  const users = [{ username: "admin", password: "123" }];

  useEffect(() => {
    document.title = "Login | Dashboard ReactJs";
  }, []);

  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  const auth = localStorage.getItem("authenticated");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const account = users.find((user) => user.username === usuario);

  const onSubmit = (data: User) => {

    const usuarioLogin : User = {
      usuario,
      senha
    }

    service
    .logar(usuarioLogin)
    .then(()=>{
      setauthenticated(true);
      localStorage.setItem("authenticated", "true");
      navigate("/home");
    })
    .catch(()=>{
      let div = document.getElementById("form");
      if (div != null) {
        div.innerHTML = `<p>Usuário ou senha incorretos!</p>`;
        setTimeout(() => {
          if (div != null) {
            div.innerHTML = "";
          }
        }, 2000)
      }
    })


   /* const account = users.find((user) => user.username === data.userName);
    const usersDb = localStorage.getItem("usersDb");
    if (usersDb) {
      const array = JSON.parse(usersDb);

      array.map(() => {
        const accountLogin = array.find(
          (user: any) => user.userName === data.userName
        );

        if (accountLogin && accountLogin.password === data.password) {
          setauthenticated(true);
          localStorage.setItem("authenticated", "true");
          localStorage.setItem("userAuthId", accountLogin.id);
          navigate("/home");
        } else {
          let div = document.getElementById("form");
          if (div != null) {
            div.innerHTML = `<p>Usuário ou senha incorretos!</p>`;
            setTimeout(() => {
              if (div != null) {
                div.innerHTML = "";
              }
            }, 2000);
          }
        }
      });
    } else {
      let div = document.getElementById("form");
      if (div != null) {
        div.innerHTML = `<p>Não há usuários cadastrados!</p>`;
        setTimeout(() => {
          if (div != null) {
            div.innerHTML = "";
          }
        }, 2000);
      }
    }*/
  };

  const handleSearchUser = (
    username: string,
    passwordChange?: string,
    passwordConfirmChange?: string
  ) => {
    const users = localStorage.getItem("usersDb");
    if (users) {
      const usersArray = JSON.parse(users);
      const account = usersArray.find(
        (user: any) => user.userName === username
      );
      if (account) {
        setStepChangePassword(2);

        if (passwordChange && passwordConfirmChange) {
          if (passwordChange != passwordConfirmChange) {
            alertify.error("As senhas não coincidem!");
          } else {
            account.password = passwordChange;
            localStorage.setItem("usersDb", JSON.stringify(usersArray));
            setStepChangePassword(1);
            setShowModal(!showModal);
            setUsernameChange("");
            setPasswordChange("");
            setConfirmPasswordChange("");
            alertify.success("Senha alterada com sucesso!");
          }
        }
      } else {
        alertify.error("Esse usuário não existe!");
        setStepChangePassword(1);
        setUsernameChange("");
      }
    } else {
      alertify.error("Não existe nenhuma conta cadastrada!");
      setStepChangePassword(1);
      setUsernameChange("");
      setPasswordChange("");
      setConfirmPasswordChange("");
    }
  };

  const handleCloseModal = () => {
    setStepChangePassword(1);
    setShowModal(!showModal);
    setUsernameChange("");
    setPasswordChange("");
    setConfirmPasswordChange("");
  };

  useEffect(() => {
    const listener = (event: any) => {
      if (
        event.code === "Enter" ||
        event.code === "NumpadEnter" ||
        event.keyCode === 13
      ) {
        const buttonLogin = document.getElementById("inputLogin");
        const el: any = buttonLogin;
        //el.click();
        handleSubmit(onSubmit)();
      }
    };
    const form = document.getElementById("loginForm");
    if (form) {
      form.addEventListener("keydown", listener);
      console.log("teste ok!");
    }
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
      if (form) {
        form.removeEventListener("keydown", listener);
      }
    };
  }, [usuario, senha, onSubmit, handleSubmit]);

  const handleChangePassword = () => {
    setShowModal(true);
  };

  if (auth == "true") {
    return <Navigate replace to="/home" />;
  } else
    return (
      <SC.ContainerLogin>
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <h2>Alteração de senha</h2>
            {stepChangePassword == 1 && (
              <>
                <label>Digite seu usuário</label>
                <SC.InputField
                  placeholder="Ex.: admin"
                  value={usernameChange}
                  onChange={(e) =>
                    setUsernameChange(e.target.value.toLowerCase())
                  }
                />

                <div>
                  <button onClick={() => handleSearchUser(usernameChange)}>
                    Continuar
                  </button>
                  <button onClick={handleCloseModal}>Cancelar</button>
                </div>
              </>
            )}
            {stepChangePassword == 2 && (
              <>
                <label>Digite sua nova senha</label>
                <SC.InputField
                  type="password"
                  placeholder=""
                  value={passwordChange}
                  onChange={(e) => setPasswordChange(e.target.value)}
                />
                <label>Digite a confirmação da nova senha</label>
                <SC.InputField
                  type="password"
                  placeholder=""
                  value={passwordConfirmChange}
                  onChange={(e) => setConfirmPasswordChange(e.target.value)}
                />
                <div>
                  <button
                    onClick={() =>
                      handleSearchUser(
                        usernameChange,
                        passwordChange,
                        passwordConfirmChange
                      )
                    }
                  >
                    Continuar
                  </button>
                  <button onClick={handleCloseModal}>Cancelar</button>
                </div>
              </>
            )}
          </Modal>
        )}
        <SC.FormArea type="Login">
          <h2 translate="no">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
            <label>Usuário</label>
            <SC.InputField
              id="userName"
              type="text"
              value={usuario}
              placeholder="Digite seu usuário"
              {...register("usuario", { required: true })}
              onChange={(e) => setusuario(e.target.value.toLowerCase())}
              errors={errors.usuario && !usuario}
            />
            {errors.usuario && !usuario && <p>Digite seu usuário!</p>}
            <label>Senha</label>
            <SC.InputField
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              {...register("senha", { required: true })}
              onChange={(e) => setsenha(e.target.value)}
              errors={errors.senha && !senha}
            />
            {errors.senha && !senha && <p>Digite sua senha!</p>}

            <div id="form"></div>
            <input type="submit" value="Entrar" id="inputLogin" />
            <span translate="no">
              Não possui conta?{" "}
              <strong onClick={() => navigate("/cadastro")}>Registre-se</strong>
            </span>
            <span translate="no">
              Esqueceu sua senha?{" "}
              <strong onClick={handleChangePassword}>Altere aqui</strong>
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
      </SC.ContainerLogin>
    );
};
