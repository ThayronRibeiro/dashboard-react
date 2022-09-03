import { ChangeEvent, useEffect, useState } from "react";
import { InputFiles } from "typescript";
import { Menu } from "../components/Menu";
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

import userBlank from "../assets/images/user.png";
import { Users } from "./cadastro";

import { FaArrowDown, FaCaretDown, FaCaretUp } from "react-icons/fa";

export const Configuracoes = () => {
  document.title = "Configurações | Dashboard ReactJs";

  let base64code = "";
  const [file, setFile] = useState<any>();
  const [fileDataURL, setFileDataURL] = useState();
  const [usersAuthInfo, setUsersAuthInfo] = useState<Users>();

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
      if (usersAuthInfo) {
        usersAuthInfo.imgUser = fileString;
      }
      localStorage.setItem("usersDb", JSON.stringify(usersArray));
    }
  };

  useEffect(() => {
    if (usersDb) {
      const usersArray = JSON.parse(usersDb);
      const account = usersArray.find(
        (user: any) => user.id === localStorage.getItem("userAuthId")
      );
      setUsersAuthInfo(account);
    }
  }, [usersAuthInfo]);

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
        console.log(`Teste: ${account.userName}`);
        account.imgUser = "";

        localStorage.setItem("usersDb", JSON.stringify(usersArray));
      }
    }
  };

  return (
    <>
      <Menu />
      <SC.ContainerContent>
        <h2>Configurações</h2>
        <ConfigContainer>
          <ImgUserArea id="photoUserArea">
            <ImgUser url={usersAuthInfo?.imgUser} id="photo" />
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
              onClick={() => handleDelPhoto(usersAuthInfo?.imgUser)}
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
          <ContentToogle visibleToogle={contentCadastro}>
            <FieldConfig htmlFor="userName">Usuário</FieldConfig>
            <InputField
              id="userName"
              placeholder=""
              value={usersAuthInfo?.userName}
              disabled
            />

            <FieldConfig htmlFor="userName">Nome</FieldConfig>
            <InputField
              id="userName"
              placeholder=""
              value={usersAuthInfo?.userName}
            />

            <FieldConfig htmlFor="userName">Senha</FieldConfig>
            <InputField
              id="userName"
              placeholder=""
              value={usersAuthInfo?.password}
            />
          </ContentToogle>

          <TitleConfigToogle onClick={() => setContentApp(!contentApp)}>
            <h3>Configurações da Aplicação</h3>
            {contentApp ? <FaCaretUp /> : <FaCaretDown />}
          </TitleConfigToogle>
          <ContentToogle visibleToogle={contentApp}>
            <FieldConfig htmlFor="userName">Usuário</FieldConfig>
            <InputField
              id="userName"
              placeholder=""
              value={usersAuthInfo?.userName}
              disabled
            />

            <FieldConfig htmlFor="userName">Nome</FieldConfig>
            <InputField
              id="userName"
              placeholder=""
              value={usersAuthInfo?.userName}
            />

            <FieldConfig htmlFor="userName">Senha</FieldConfig>
            <InputField
              id="userName"
              placeholder=""
              value={usersAuthInfo?.password}
            />
          </ContentToogle>
        </ConfigContainer>
      </SC.ContainerContent>
    </>
  );
};
