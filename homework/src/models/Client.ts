import { ClientType } from "./ClientType";

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: ClientType;

  cash: number;
  credit: number;
  score: {
    value: number;
    percent: number;
  };
}
