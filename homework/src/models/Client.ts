import { ClientType } from "./ClientType";

export interface Client {
  id: string;
  name: string;
  phone: string;
  type: ClientType;

  cash: number;
  credit: number;
  score: Client.Score;
}

export module Client {
  export interface Score {
    value: number;
    percent: number;
  }
}
