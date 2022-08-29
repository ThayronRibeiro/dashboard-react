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

  if (auth) {
    return <Navigate replace to="/home" />;
  } else
    return (
      <SC.ContainerLogin>
        <SC.LoginArea>
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="admin"
            />
            <input
              type="password"
              name="Password"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="123"
            />
            <input type="submit" value="Submit" onClick={loginOk} />
          </form>
        </SC.LoginArea>
      </SC.ContainerLogin>
    );
};
