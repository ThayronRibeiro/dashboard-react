import * as SC from "../../styles/Menu";
import { FaBars, FaUserCircle, FaArrowLeft, FaHome } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SC.Menu>
        <div>
          <h2 onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </h2>
          <h2 onClick={() => localStorage.removeItem("authenticated")}>
            <Link to="/">
              <FaUserCircle />
            </Link>
          </h2>
        </div>
      </SC.Menu>

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
