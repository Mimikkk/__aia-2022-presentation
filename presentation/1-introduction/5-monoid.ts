export {};

interface Monoid<T> {
  readonly empty: T;
  readonly operation: (x: T, y: T) => T;
}

const add2 = (x: number, y: number) => x + y;
const sum = (nums: number[]) => nums.reduce(add2, 0);

const join2 = (x: string, y: string) => x + y;
const join = (xs: string[]) => xs.reduce(join2, "");

const concat2 = <T>(x: T[], y: T[]) => [...x, ...y];
const concat = <T>(xs: T[][]) => xs.reduce(concat2, []);

interface Client {
  id: string;
  name: string;
  age: number;

  hajs: number;
  kredyty: string[];
}

interface ClientDetails extends Pick<Client, "hajs" | "kredyty"> {}

export module ClientDetails {
  export const createEmpty = (): ClientDetails => ({ hajs:0, kredyty:[] });
  export const operation = (first: ClientDetails, second: ClientDetails) => ({
    hajs:sum([first.hajs, second.hajs]),
    kredyty:concat([first.kredyty, second.kredyty]),
  });
  export const reduce = (clients: ClientDetails[]) =>
    clients.reduce(operation, createEmpty());
}

const firstClient: Client = {
  id:"1",
  name:"Jan",
  age:20,
  hajs:1000,
  kredyty:["kredyt1", "kredyt2"],
};

const secondClient: Client = {
  id:"2",
  name:"Adam",
  age:30,
  hajs:2000,
  kredyty:["kredyt3", "kredyt4"],
};

const row = (client: Client) =>
  ClientDetails.reduce([firstClient, secondClient]);
