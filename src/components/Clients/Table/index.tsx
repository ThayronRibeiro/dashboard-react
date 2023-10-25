import { Client } from "app/models/clients";

interface ClientTableProps {
  clients?: Client[];
}

export const ClientTable: React.FC<ClientTableProps> = ({
  clients,
}: ClientTableProps) => {
  return (
    <>
      {clients && (
        <>
          {clients.map((clients) => {
            <p>{clients.nome}</p>;
          })}
        </>
      )}
    </>
  );
};

export default ClientTable;
