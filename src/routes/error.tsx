import { useNavigate } from "react-router-dom";
import { ErrorContainer, ErrorContainerContent, Button } from "../styles/Error";
import searchIcon from "../assets/images/searching.png";
import searchWhiteIcon from "../assets/images/searching-white.png";

export const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <ErrorContainer>
      <ErrorContainerContent>
        <h2>Essa página não existe!</h2>
        <div>
          <img alt="search" src={searchWhiteIcon} />
        </div>
        <h3>
          Mas não se preocupe, para continuar navegando clique no botão abaixo!
        </h3>

        <Button onClick={() => nav("/")}>Voltar a navegar</Button>
      </ErrorContainerContent>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#230bf9"
          fill-opacity="1"
          d="M0,32L120,42.7C240,53,480,75,720,69.3C960,64,1200,32,1320,16L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}
    </ErrorContainer>
  );
};
