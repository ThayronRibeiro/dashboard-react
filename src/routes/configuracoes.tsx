import { ChangeEvent, useEffect, useState } from "react";
//import { InputFiles } from "typescript";
import { Menu } from "../components/Menu";
import { useUserService } from "app/services";
import alertify from "alertifyjs";
import {
  ConfigContainer,
  ImgUser,
  ImgUserArea,
  FieldConfig,
  InputField,
  TitleConfigToogle,
  ContentToogle,
} from "../styles/ConfigPage";

import * as SC from "../styles/ContainerContent";

//import userBlank from "../assets/images/user.png";
import { Users } from "./cadastro";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { User } from "app/models/users";

export const Configuracoes = () => {
  document.title = "Configurações | Dashboard ReactJs";
  alertify.set("notifier", "position", "top-right");

  const service = useUserService();

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -10,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  let base64code = "";
  const [file, setFile] = useState<any>();
  const [fileDataURL, setFileDataURL] = useState();
  const [usersAuthInfo, setUsersAuthInfo] = useState<User>();

  const [atualizarCadastro, setAtualizarCadastro] = useState(true);

  const [contentCadastro, setContentCadastro] = useState(true);
  const [contentApp, setContentApp] = useState(true);

  const usersDb = localStorage.getItem("usersDb");

  const mudarFoto = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.files;

    if (input) {
      const photo = input[0];

      setFile(photo);
      let imgData = getBase64(photo);
    }
  };

  useEffect(() => {
    let fileReader: any,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [usersDb, file, usersAuthInfo]);

  const onLoad = (fileString: any) => {
    base64code = fileString;
    localStorage.setItem("imgData", fileString);
    if (usersDb) {
      const usersArray = JSON.parse(usersDb);
      const account = usersArray.find(
        (user: any) => user.id === localStorage.getItem("userAuthId")
      );
      account.imgUser = fileString;
      setUsersAuthInfo(account);
      // if (usersAuthInfo) {
      //   usersAuthInfo.imgUser = fileString;
      // }
      // localStorage.setItem("usersDb", JSON.stringify(usersArray));
    }
  };

  useEffect(() => {
    service
      .buscarInfo(localStorage.getItem("acessoToken"))
      .then((value) => {
        setUsersAuthInfo(value);
        setAtuNomeUsuario(value.nome);
      })
      .catch((value) => console.log(value));
  }, []);

  const [atuNomeUsario, setAtuNomeUsuario] = useState<string>(
    usersAuthInfo?.nome || ""
  );

  const getBase64 = (file: any): any => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const handleDelPhoto = (photo: string | undefined) => {
    console.log(`Atual: ${photo}`);
    if (photo) {
      // photo = "";
      console.log(`Novo: ${photo}`);

      const users = localStorage.getItem("usersDb");
      if (users) {
        const usersArray = JSON.parse(users);
        const account: Users = usersArray.find(
          (user: any) => user.id === localStorage.getItem("userAuthId")
        );
        console.log(`Teste: ${account.usuario}`);
        account.imgUser = "";

        localStorage.setItem("usersDb", JSON.stringify(usersArray));
      }
    }
  };

  const handleAtualizar = () => {
    const usuarioAtualizado: User = {
      id: usersAuthInfo.id,
      usuario: usersAuthInfo.usuario,
      nome: atuNomeUsario,
      senha: usersAuthInfo.senha,
      acessoToken: usersAuthInfo.acessoToken,
      dataCadastro: usersAuthInfo.dataCadastro,
    };

    service
      .atualizar(usuarioAtualizado)
      .then(() => {
        alertify.success("Usuário atualizado com sucesso!");
      })
      .catch(() => {
        alertify.error("Ocorreu um erro!");
      });
  };

  return (
    <>
      <Menu />
      <SC.ContainerContent>
        <h2>Configurações</h2>
        <ConfigContainer>
          <ImgUserArea id="photoUserArea">
            <ImgUser id="photo" />
            <label htmlFor="photoUser" style={{ cursor: "pointer" }}>
              <div>
                <span>Mudar foto</span>
              </div>
            </label>
            <input
              id="photoUser"
              type="file"
              accept="image/*"
              onChange={mudarFoto}
              style={{ visibility: "hidden" }}
            ></input>
            <span
              style={{ color: "red", cursor: "pointer", marginTop: "-20px" }}
              // onClick={() => handleDelPhoto(usersAuthInfo?.imgUser)}
            >
              Excluir foto
            </span>
          </ImgUserArea>

          <TitleConfigToogle
            onClick={() => setContentCadastro(!contentCadastro)}
          >
            <h3>Configurações de Cadastro</h3>
            {contentCadastro ? <FaCaretUp /> : <FaCaretDown />}
          </TitleConfigToogle>
          <ContentToogle
            visibleToogle={contentCadastro}
            variants={variants}
            initial={contentCadastro ? "open" : "closed"}
            animate={contentCadastro ? "open" : "closed"}
          >
            <FieldConfig htmlFor="usuario">Usuário</FieldConfig>
            <InputField
              id="usuario"
              placeholder=""
              value={usersAuthInfo?.usuario}
              disabled
            />

            <FieldConfig htmlFor="nome">Nome</FieldConfig>
            <InputField
              id="nome"
              placeholder=""
              value={atuNomeUsario}
              onChange={(e) => setAtuNomeUsuario(e.target.value)}
            />

            <FieldConfig htmlFor="usuario">Senha</FieldConfig>
            <InputField
              id="usuario"
              placeholder=""
              value={usersAuthInfo?.senha}
            />
          </ContentToogle>

          {/* <TitleConfigToogle onClick={() => setContentApp(!contentApp)}>
            <h3>Configurações da Aplicação</h3>
            {contentApp ? <FaCaretUp /> : <FaCaretDown />}
          </TitleConfigToogle>
          <ContentToogle visibleToogle={contentApp}>
            <FieldConfig htmlFor="usuario">Usuário</FieldConfig>
            <InputField
              id="usuario"
              placeholder=""
              value={usersAuthInfo?.usuario}
              disabled
            />

            <FieldConfig htmlFor="usuario">Nome</FieldConfig>
            <InputField
              id="usuario"
              placeholder=""
              value={usersAuthInfo?.usuario}
            />

            <FieldConfig htmlFor="usuario">Senha</FieldConfig>
            <InputField
              id="usuario"
              placeholder=""
              value={usersAuthInfo?.senha}
            />
          </ContentToogle> */}

          <button onClick={handleAtualizar}>Salvar</button>
        </ConfigContainer>
      </SC.ContainerContent>
    </>
  );
};
