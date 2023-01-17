//import { FaRegIdBadge } from "react-icons/fa";
import styled from "styled-components";

import userBlank from "../assets/images/user.png";

export const ConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
`;

export const ImgUserArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type ImgUserProps = {
  url?: string;
};

export const ImgUser = styled.div<ImgUserProps>`
  width: 250px;
  height: 250px;
  background-image: url(${(props) => (props.url ? `${props.url}` : userBlank)});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  display: block;
  margin: 25px auto;
  border: var(--normalBlue) 10px solid;
`;

export const FieldConfig = styled.label`
  color: #000;
  font-weight: bold;
`;

export const InputField = styled.input`
  display: flex;
  padding: 5px 15px;
`;

export const TitleConfigToogle = styled.div`
  color: #000;
  font-weight: bold;
  width: 100%;
  border-bottom: #d1d1d1 1px solid;
  padding: 10px 0;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

type ContentToogleProps = {
  visibleToogle?: boolean;
};

export const ContentToogle = styled.div<ContentToogleProps>`
  transition: all ease 0.5s;
  width: 100%;
  display: ${(props) => (props.visibleToogle ? "flex" : "none")};
  flex-direction: column;
  height: auto;
`;
