import { httpClient } from "../http";
import { User } from "../models/users";
import { AxiosResponse } from "axios";

const resourceUrl: string = "/api/users";

export const useUserService = () => {
  const salvar = async (usuario: User): Promise<User> => {
    const response: AxiosResponse<User> = await httpClient.post<User>(
      resourceUrl,
      usuario
    );
    return response.data;
  };

  const atualizar = async (usuario: User): Promise<void> => {
    const url: string = `${resourceUrl}/${usuario.acessoToken}`;
    await httpClient.put<User>(url, usuario);
  };

  const logar = async (usuario: User): Promise<void> => {
    const url: string = `${resourceUrl}/login/${usuario.usuario}/${usuario.senha}`;
    const response: AxiosResponse<User> = await httpClient.get<User>(url);
    localStorage.setItem("acessoToken", response.data.acessoToken);
    localStorage.setItem("userId", String(response.data.id));
  };

  const listar = async (): Promise<User[]> => {
    const response: AxiosResponse<User[]> = await httpClient.get(resourceUrl);
    return response.data;
  };

  const buscarInfo = async (acesso_token): Promise<User> => {
    const response: AxiosResponse<User> = await httpClient.get(
      `${resourceUrl}/${acesso_token}`
    );
    return response.data;
  };

  return {
    salvar,
    atualizar,
    logar,
    listar,
    buscarInfo,
  };
};
