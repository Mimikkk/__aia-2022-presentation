import { Client } from "../models/Client";
import faker from "@faker-js/faker";
import { ClientType } from "../models/ClientType";
import { times } from "ramda";

export const mockClients = (count: number) => times(mockClient, count);

export const mockClient = (): Client => ({
  id: faker.datatype.uuid(),
  phone: faker.phone.phoneNumber(),
  name: faker.name.firstName(),
  email: faker.internet.email(),
  type: faker.helpers.arrayElement(ClientType.list),

  cash: faker.datatype.number({ min: 100, max: 1000, precision: 2 }),
  credit: faker.datatype.number({ min: 0, max: 10, precision: 0 }),
  score: {
    percent: faker.datatype.number({ min: 0, max: 1, precision: 2 }),
    value: faker.datatype.number({ min: 1, max: 10, precision: 0 }),
  },
});
