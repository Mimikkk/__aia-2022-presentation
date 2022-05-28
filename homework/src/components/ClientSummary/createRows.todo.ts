import { Client } from "../../models/Client";
import "./ClientSummary.scss";

// TODO - replace with a monoidal type and sum rows using fp methodology
export const createRows = (clients: Client[]) => {
  return clients;
};
