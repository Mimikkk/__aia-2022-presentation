export {};

export interface DatabaseService {
  create: (item: object) => number;
}

const state = [];
export const database: DatabaseService = {
  create:(item: object) => state.push(item),
};

export const square = (item: number) => {
  database.create({ item });
  return item ** 2;
};
