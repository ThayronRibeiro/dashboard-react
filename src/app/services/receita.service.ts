import { httpClient } from "app/http";
import { Receita } from "app/models/receitas";
import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

const resourceUrl: string = "/api/receitas";

export const useReceitaService = () => {
  const [usuarioToken, setUsuarioToken] = useState<string>(
    localStorage.getItem("acessoToken")
  );
  const [clienteSelect, setClienteSelect] = useState<string>(
    localStorage.getItem("clienteSelect")
  );

  useEffect(() => {
    setUsuarioToken(localStorage.getItem("acessoToken"));
    setClienteSelect(localStorage.getItem("clienteSelect"));
  }, [
    localStorage.getItem("clienteSelect"),
    localStorage.getItem("acessoToken"),
  ]);

  const salvar = async (receitas: Receita): Promise<Receita> => {
    const response: AxiosResponse<Receita> = await httpClient.post<Receita>(
      `${resourceUrl}/${usuarioToken}/${clienteSelect}`,
      receitas
    );
    return response.data;
  };

  return {
    salvar,
  };
};
