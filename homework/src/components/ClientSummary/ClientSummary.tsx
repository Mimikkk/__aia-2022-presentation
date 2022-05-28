import { FC, useMemo } from "react";
import { Client } from "../../models/Client";
import "./ClientSummary.scss";

interface Props {
  clients: Client[];
}

// TODO - replace with a monoidal type and sum rows using fp methodology
export const createRows = (clients: Client[]) => {
  return clients;
};

export const ClientSummary: FC<Props> = ({ clients }) => {
  const rows = useMemo(() => createRows(clients), [clients]);

  return (
    <table className="ClientSummary">
      <thead>
      <tr>
        <th>Typ</th>
        <th>stan konta</th>
        <th>Zdolność kredytowa</th>
        <th>ocena bankowa</th>
        <th>ocena bankowa [%]</th>
      </tr>
      </thead>
      <tbody>
      {rows.map((row) =>
        <tr key={row.id}>
          <td>{row.type}</td>
          <td>{row.cash}</td>
          <td>{row.credit}</td>
          <td>{row.score.value}</td>
          <td>{row.score.percent}</td>
        </tr>)}
      </tbody>
    </table>
  );
};
