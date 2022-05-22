import { Client } from "../models/Client";
import { mockClients } from "../mocks";

interface Service {
  readAll: () => Client[];
}

export const ClientService: Service = {
  readAll: () => mockClients(50),
};
