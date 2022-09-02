import { FaRegIdBadge } from "react-icons/fa";
import styled from "styled-components";

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

export const ImgUser = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: var(--normalBlue) 10px solid;
  margin-top: 25px;
`;

export const FieldConfig = styled.label`
  color: black;
  font-weight: bold;
`;

export const InputField = styled.input`
  display: flex;
  padding: 5px 15px;
`;
