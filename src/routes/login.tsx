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

  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated" || false)
  );
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setauthenticated("true");
      localStorage.setItem("authenticated", "true");
      navigate("/home");
    }
  };

  return (
    <SC.ContainerLogin>
      <SC.LoginArea>
        <p>Welcome Back</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Teste"
          />
          <input
            type="password"
            name="Password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Teste"
          />
          <input type="submit" value="Submit" onClick={loginOk} />
        </form>
      </SC.LoginArea>
    </SC.ContainerLogin>
  );
};
