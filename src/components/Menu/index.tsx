import * as SC from "../../styles/Menu";
import {
  FaBars,
  FaUserCircle,
  FaArrowLeft,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users } from "../../routes/cadastro";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuConfigOpen, setMenuConfigOpen] = useState(false);
  const usersDb = localStorage.getItem("usersDb");
  const [usersAuthInfo, setUsersAuthInfo] = useState<Users>();

  const nav = useNavigate();

  const authRemove = () => {
    localStorage.setItem("authenticated", "false");
    localStorage.setItem("imgData", "");
    localStorage.removeItem("acessoToken");
    localStorage.removeItem("userId");
    nav("/");
  };

  let photoUser = localStorage.getItem("imgData");

  useEffect(() => {
    if (usersDb) {
      const usersArray = JSON.parse(usersDb);
      const account = usersArray.find(
        (user: any) => user.id === localStorage.getItem("userAuthId")
      );
      setUsersAuthInfo(account);
    }
  }, [usersAuthInfo]);

  return (
    <>
      <SC.Menu>
        <div>
          <h2 onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </h2>
          {!menuConfigOpen && (
            <h2 onClick={() => setMenuConfigOpen(!menuConfigOpen)}>
              {!usersAuthInfo?.imgUser && <FaUserCircle />}
              {usersAuthInfo?.imgUser && (
                <SC.MenuImgUser alt="" src={usersAuthInfo?.imgUser} />
              )}
            </h2>
          )}
        </div>
      </SC.Menu>

      {menuConfigOpen && (
        <SC.MenuConfigContainer
          onClick={() => setMenuConfigOpen(!menuConfigOpen)}

          //onClickCapture={() => setMenuConfigOpen(!menuConfigOpen)}
        >
          <h2 onClick={() => setMenuConfigOpen(!menuConfigOpen)}>
            {!usersAuthInfo?.imgUser && <FaUserCircle />}
            {usersAuthInfo?.imgUser && (
              <SC.MenuImgUser alt="" src={usersAuthInfo?.imgUser} />
            )}
          </h2>
          <SC.MenuConfig>
            <span>
              <Link to="/configuracoes">Configurações</Link>
            </span>
            <span onClick={authRemove}>
              <Link to="/">
                <FaSignOutAlt />
                Sair
              </Link>
            </span>
          </SC.MenuConfig>
        </SC.MenuConfigContainer>
      )}

      {menuOpen && (
        <SC.MenuOpen>
          <div>
            <FaArrowLeft onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          <ul>
            <li>
              <Link to="/home" onClick={() => setMenuOpen(!menuOpen)}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/clientes" onClick={() => setMenuOpen(!menuOpen)}>
                Clientes
              </Link>
            </li>
            <li>
              <Link to="/novo" onClick={() => setMenuOpen(!menuOpen)}>
                Novo
              </Link>
            </li>
          </ul>
        </SC.MenuOpen>
      )}
    </>
  );
};
