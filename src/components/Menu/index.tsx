import * as SC from "../../styles/Menu";
import {
  FaBars,
  FaUserCircle,
  FaArrowLeft,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuConfigOpen, setMenuConfigOpen] = useState(false);
  const nav = useNavigate();

  const authRemove = () => {
    localStorage.setItem("authenticated", "false");
    nav("/");
  };

  return (
    <>
      <SC.Menu>
        <div>
          <h2 onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </h2>
          <h2 onClick={() => setMenuConfigOpen(!menuConfigOpen)}>
            <FaUserCircle />
          </h2>
        </div>
      </SC.Menu>

      {menuConfigOpen && (
        <SC.MenuConfigContainer
          // onClick={() => setMenuConfigOpen(!menuConfigOpen)}
          onClickCapture={() => setMenuConfigOpen(!menuConfigOpen)}
        >
          <SC.MenuConfig>
            <span>Configurações</span>
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
              <Link to="/teste" onClick={() => setMenuOpen(!menuOpen)}>
                Teste
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
