import * as SC from "../../styles/Menu";
import {
  FaBars,
  FaUserCircle,
  FaArrowLeft,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState, useEffect, RefObject } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users } from "../../routes/cadastro";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AnimatePresence } from "framer-motion";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuConfigOpen, setMenuConfigOpen] = useState(false);
  const usersDb = localStorage.getItem("usersDb");
  const [usersAuthInfo, setUsersAuthInfo] = useState<Users>();
  const [parent, enableAnimations] = useAutoAnimate({ duration: 1000 });

  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: -100,
      opacity: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  const variantsMenuConfig = {
    open: {
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      opacity: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
  };

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
          variants={variantsMenuConfig}
          initial="closed"
          animate={menuConfigOpen ? "open" : "closed"}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            staggerChildren: 0.015,
            staggerDirection: menuOpen ? 1 : -1,
          }}
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
        <AnimatePresence>
          <SC.MenuOpen
            variants={variants}
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              staggerChildren: 0.015,
              staggerDirection: menuOpen ? 1 : -1,
            }}
          >
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
                <Link to="/receitas" onClick={() => setMenuOpen(!menuOpen)}>
                  Receitas
                </Link>
              </li>
            </ul>
          </SC.MenuOpen>
        </AnimatePresence>
      )}
    </>
  );
};
