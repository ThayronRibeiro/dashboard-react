import { useState, useEffect } from "react";
import * as SC from "../styles/Form";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type Props = {
  loginOk?: () => void;
};

export const Login = ({ loginOk }: Props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
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

  const account = users.find((user) => user.username === username);

  const onSubmit = (data: any) => {
    const account = users.find((user) => user.username === data.userName);
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
          navigate("/home");
        } else {
          let div = document.getElementById("form");
          if (div != null) {
            div.innerHTML = `<p>Usuário ou senha incorretos!</p>`;
          }
        }
      });
    } else {
      let div = document.getElementById("form");
      if (div != null) {
        div.innerHTML = `<p>Não há usuários cadastrados!</p>`;
      }
    }

    // if (account && account.password === data.password) {
    //   setauthenticated(true);
    //   localStorage.setItem("authenticated", "true");
    //   navigate("/home");
    // } else {
    //   let div = document.getElementById("form");
    //   if (div != null) {
    //     div.innerHTML = `<p>Usuário ou senha incorretos!</p>`;
    //   }
    // }
  };

  if (auth == "true") {
    return <Navigate replace to="/home" />;
  } else
    return (
      <SC.ContainerLogin>
        <SC.FormArea>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Usuário</label>
            <SC.InputField
              id="userName"
              type="text"
              value={username}
              placeholder="Digite seu usuário"
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

            <div id="form"></div>
            <input type="submit" value="Entrar" onClick={loginOk} />
            <span>
              Não possui conta?{" "}
              <strong onClick={() => navigate("/cadastro")}>Registre-se</strong>
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
