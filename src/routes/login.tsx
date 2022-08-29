import { useState, useEffect } from "react";
import * as SC from "../styles/Login";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
  loginOk?: () => void;
};

export const Login = ({ loginOk }: Props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const users = [{ username: "admin", password: "123" }];

  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  const auth = localStorage.getItem("authenticated");
  // const [authenticated, setauthenticated] = useState(
  //   localStorage.getItem("authenticated", "false")
  // );
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(!!loggedInUser);
  //   }
  // }, [authenticated]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setauthenticated(true);
      localStorage.setItem("authenticated", "true");
      navigate("/home");
    }
  };

  if (auth == "true") {
    return <Navigate replace to="/home" />;
  } else
    return (
      <SC.ContainerLogin>
        <SC.LoginArea>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Usuário</label>
            <input
              type="text"
              name="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="admin"
            />
            <label>Senha</label>
            <input
              type="password"
              name="Password"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="123"
            />

            <input type="submit" value="Entrar" onClick={loginOk} />
            <span>
              Não possui conta?{" "}
              <strong onClick={() => navigate("/cadastro")}>Registre-se</strong>
            </span>
          </form>
        </SC.LoginArea>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#230bf9"
            fill-opacity="1"
            d="M0,64L120,80C240,96,480,128,720,138.7C960,149,1200,139,1320,133.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </SC.ContainerLogin>
    );
};
