import {httpClient} from "../http"
import { User } from "../models/users"
import {AxiosResponse} from "axios"

const resourceUrl: string = "/api/users"

export const useUserService = () => {

    const salvar = async (usuario: User) : Promise<User> => {
        const response: AxiosResponse<User> = await httpClient.post<User>(resourceUrl, usuario)
        return response.data;
    }

    const atualizar = async (usuario: User) : Promise<void> => {
        const url : string = `${resourceUrl}/${usuario.id}`
        await httpClient.put<User>(url, usuario)
    }

    const logar = async (usuario: User) : Promise<void> => {
        const url : string = `${resourceUrl}/login/${usuario.usuario}/${usuario.senha}`
        const response: AxiosResponse<User> = await httpClient.get<User>(url)
    }

    return {
        salvar,
        atualizar,
        logar
    }
}