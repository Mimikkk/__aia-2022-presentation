import { Client } from "../../models/Client";
import { FC } from "react";
import "./ClientList.scss";

interface Props {
  clients: Client[];
}

export const ClientList: FC<Props> = ({ clients:rows }) => (
  <table className="ClientList">
    <thead>
    <tr>
      <th>Klient</th>
      <th>Phone</th>
      <th>Typ</th>
      <th>Stan konta</th>
      <th>Zdolność kredytowa</th>
      <th>Ocena bankowa</th>
      <th>Ocena bankowa [%]</th>
    </tr>
    </thead>
    <tbody>
    {rows.map(row => (
      <tr key={row.id}>
        <td>{row.name}</td>
        <td>{row.phone}</td>
        <td>{row.type}</td>
        <td>{row.cash}</td>
        <td>{row.credit}</td>
        <td>{row.score.value}</td>
        <td>{row.score.percent}</td>
      </tr>
    ))}
    </tbody>
  </table>
);
