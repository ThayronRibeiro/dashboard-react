import { httpClient } from "app/http";
import { Client } from "app/models/clients";
import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

const resourceUrl: string = "/api/clients";

export const useClientService = () => {
  const [usuarioToken, setUsuarioToken] = useState<string>(
    localStorage.getItem("acessoToken")
  );
  const [usuarioID, setUsuarioID] = useState<string>(
    localStorage.getItem("userId")
  );

  const salvar = async (clients: Client): Promise<Client> => {
    const response: AxiosResponse<Client> = await httpClient.post<Client>(
      `${resourceUrl}/${usuarioToken}`,
      clients
    );
    return response.data;
  };

  const listar = async (): Promise<Client[]> => {
    const response: AxiosResponse<Client[]> = await httpClient.get(
      `${resourceUrl}/${usuarioID}`
    );
    return response.data;
  };

  const infoCliente = async (id): Promise<Client> => {
    const response: AxiosResponse<Client> = await httpClient.get(
      `${resourceUrl}/id/${id}`
    );
    return response.data;
  };

  const deletar = async (id) => {
    const response: AxiosResponse = await httpClient.delete(
      `${resourceUrl}/id/${id}`
    );
  };

  return {
    salvar,
    listar,
    infoCliente,
    deletar,
  };
};
