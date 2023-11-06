import { Client } from "app/models/clients";
import { useClientService } from "app/services";
import { useState, useEffect } from "react";
import { SelectInput } from "styles/Select";

interface SelectProps {
  register?: () => void;
  value?: string;
}

export const Select = ({ register, value }: SelectProps) => {
  const [dropClientList, setDropClientList] = useState<Client[]>([]);
  const [clienteSelect, setClienteSelect] = useState<string>("");
  const userAuthId = localStorage.getItem("userAuthId");
  const service = useClientService();

  useEffect(() => {
    service.listar().then((value) => {
      if (value) {
        setDropClientList(value);
        //window.alert("Chegou");
      }
    });
  }, [userAuthId]);

  useEffect(() => {
    localStorage.setItem("clienteSelect", clienteSelect);
  }, [clienteSelect]);

  return (
    <>
      <label>Cliente:</label>
      <SelectInput
        name="clientes"
        id="clientes"
        {...register}
        defaultValue={clienteSelect}
        onChange={(e) => setClienteSelect(e.target.value)}
      >
        <option value="default">Selecione</option>
        {dropClientList && (
          <>
            {dropClientList.map((clientes) => {
              return (
                <>
                  <option
                    value={clientes.id}
                    onClick={() => {
                      setClienteSelect(clientes.id);
                    }}
                  >
                    {clientes.nome}
                  </option>
                </>
              );
            })}
          </>
        )}
      </SelectInput>
    </>
  );
};
