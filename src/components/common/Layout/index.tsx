import { Menu } from "components/Menu";
import { ReactNode, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as SC from "styles/ContainerContent";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  children,
}: LayoutProps) => {
  const auth = localStorage.getItem("authenticated");
  const nav = useNavigate();

  useEffect(() => {
    switch (auth) {
      case "false":
        nav("/");
        break;
    }
  }, [auth, nav]);

  document.title = `${title} - Dashboard ReactJS`;

  if (!!auth) {
    return (
      <>
        <Menu />
        <SC.ContainerContent>
          <h2>{title}</h2>
          {children}
        </SC.ContainerContent>
      </>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};
