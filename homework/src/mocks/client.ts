import { Client } from "../models/Client";
import faker from "@faker-js/faker";
import { ClientType } from "../models/ClientType";
import { times } from "ramda";

export const mockClients = (count: number) => times(mockClient, count);

export const mockClient = (): Client => ({
  id: faker.datatype.uuid(),
  phone: faker.phone.phoneNumber('+49 (###) ###-##-##'),
  name: faker.name.firstName(),
  type: faker.helpers.arrayElement(ClientType.list),

  cash: faker.datatype.number({ min: 100, max: 1000 }),
  credit: faker.datatype.number({ min: 0, max: 10 }),
  score: {
    percent: faker.datatype.number({ min:0, max:100 }) / 100,
    value: faker.datatype.number({ min:1, max:10 }),
  },
});
