import { ChangeEvent, useEffect, useState } from "react";
import { InputFiles } from "typescript";
import { Menu } from "../components/Menu";
import { ConfigContainer, ImgUser, ImgUserArea } from "../styles/ConfigPage";
import * as SC from "../styles/ContainerContent";

import userBlank from "../assets/images/user.png";
import { Users } from "./cadastro";

export const Configuracoes = () => {
  let base64code = "";
  const [file, setFile] = useState<any>();
  const [fileDataURL, setFileDataURL] = useState();
  const [usersAuthInfo, setUsersAuthInfo] = useState<Users>();

  const usersDb = localStorage.getItem("usersDb");

  const mudarFoto = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.files;

    if (input) {
      const photo = input[0];

      setFile(photo);
      //console.log(fileDataURL);

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
    //console.log(fileString);
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
  // useEffect(() => {
  //   if (usersDb) {
  //     const usersArray = JSON.parse(usersDb);
  //     const account = usersArray.find(
  //       (user: any) => user.id === localStorage.getItem("userAuthId")
  //     );
  //     account.imgUser = localStorage.getItem("imgData");
  //     setUsersAuthInfo(account);
  //     localStorage.setItem("usersDb", JSON.stringify(usersArray));
  //     // console.log(account);
  //   }
  // }, [usersAuthInfo]);

  const getBase64 = (file: any): any => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  console.log(usersAuthInfo?.imgUser);

  return (
    <>
      <Menu />
      <SC.ContainerContent>
        <h2>Configurações</h2>
        <ConfigContainer>
          <ImgUserArea id="photoUserArea">
            <ImgUser
              alt=""
              src={usersAuthInfo?.imgUser ? usersAuthInfo?.imgUser : userBlank}
              id="photo"
            />
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
          </ImgUserArea>
        </ConfigContainer>
      </SC.ContainerContent>
    </>
  );
};
