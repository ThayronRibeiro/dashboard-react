import { useState, useEffect } from "react";
import * as SC from "../styles/Form";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import alertify from "alertifyjs";
import { v4 as uuid } from "uuid";

import "alertifyjs/build/alertify.min.js";
import "alertifyjs/build/css/alertify.min.css";

export type Users = {
  id?: string;
  userName?: string;
  password?: string;
  imgUser?: string;
};

export const Cadastro = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const users = [{ username: "admin", password: "123" }];
  const [usersDb, setUsersDb] = useState<Users[]>([]);

  alertify.set("notifier", "position", "top-right");

  useEffect(() => {
    document.title = "Cadastro | Dashboard ReactJs";
  }, []);

  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  const auth = localStorage.getItem("authenticated");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const users = localStorage.getItem("usersDb");
    if (users) {
      const usersArray: Users[] = JSON.parse(users);
      const account = usersArray.find(
        (user) => user.userName === data.userName
      );
      if (account) {
        alertify.error("Usuário já cadastrado!");
      } else {
        if (password !== confirmPassword) {
          let div = document.getElementById("form");
          if (div != null) {
            div.innerHTML = `<p>As senhas não coincidem!</p>`;
          }
        } else {
          usersArray.push({
            id: uuid(),
            userName: username,
            password: password,
            imgUser: "",
          });

          localStorage.setItem("usersDb", JSON.stringify(usersArray));
          alertify.success("Usuário cadastrado com sucesso!");
          navigate("/");
        }
      }
    } else {
      usersDb.push({
        id: uuid(),
        userName: username,
        password: password,
        imgUser: "",
      });
      localStorage.setItem("usersDb", JSON.stringify(usersDb));
      console.log(localStorage.getItem("usersDb"));
      alertify.success("Usuário cadastrado com sucesso!");
      navigate("/");
    }
    // const account = usersDb.find((user) => user.userName === data.userName);

    // if (password != confirmPassword) {
    //   let div = document.getElementById("form");
    //   if (div != null) {
    //     div.innerHTML = `<p>As senhas não coincidem!</p>`;
    //   }
    // } else {
    //   const users = localStorage.getItem("usersDb");
    //   if (users) {
    //     const usersArray: Users[] = JSON.parse(users);

    //     usersArray.push({
    //       userName: username,
    //       password: password,
    //     });

    //     localStorage.setItem("usersDb", JSON.stringify(usersArray));
    //     alertify.success("Usuário cadastrado com sucesso!");
    //     navigate("/");
    //   } else {
    //     usersDb.push({
    //       userName: username,
    //       password: password,
    //     });
    //     localStorage.setItem("usersDb", JSON.stringify(usersDb));
    //     console.log(localStorage.getItem("usersDb"));
    //     alertify.success("Usuário cadastrado com sucesso!");
    //     navigate("/");
    //   }
    // }
  };
  return (
    <SC.ContainerCadastro>
      <div className="cadastroAside"></div>
      <SC.FormArea type="Cadastro">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Usuário</label>
          <SC.InputField
            id="userName"
            type="text"
            value={username}
            placeholder="Digite seu usuário!"
            {...register("userName", { required: true })}
            onChange={(e) => setusername(e.target.value.toLowerCase())}
            errors={errors.userName && !username}
          />
          {errors.userName && !username && <p>Digite seu usuário!</p>}
          <label>Senha</label>
          <SC.InputField
            type="password"
            placeholder="Digite sua senha"
            value={password}
            {...register("password", { required: true })}
            onChange={(e) => setpassword(e.target.value)}
            errors={errors.password && !password}
          />
          {errors.password && !password && <p>Digite sua senha!</p>}
          <label>Confirmação de senha</label>
          <SC.InputField
            type="password"
            placeholder="Digite sua confirmação de senha"
            value={confirmPassword}
            {...register("confirmPassword", { required: true })}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errors={errors.confirmPassword && !confirmPassword}
          />
          {errors.password && !password && <p>Digite sua senha!</p>}
          <div id="form"></div>
          <input type="submit" value="Cadastrar" />
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
