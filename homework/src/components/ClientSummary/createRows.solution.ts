import { Client } from "../../models/Client";
import "./ClientSummary.scss";
import { groupBy, sum, pluck, map, pick } from "ramda";
import faker from "@faker-js/faker";

// Przykładowa implementacja
const average = (numbers: number[]) => sum(numbers) / numbers.length;
const round2 = (n: number) => Math.round(n * 100) / 100;

export interface Row extends Omit<Client, "type" | "phone"> {}

export module Row {
  // Monoid - do sumacji
  export interface Details extends Omit<Row, "id" | "name"> {}

  export const aggregate = (rows: Details[]): Details => ({
    score: aggregateScores(pluck("score", rows)),
    credit: sum(pluck("credit", rows)),
    cash: sum(pluck("cash", rows)),
  });

  const aggregateScores = (scores: Client.Score[]): Client.Score => ({
    value: sum(pluck("value", scores)) || 0,
    percent: round2(average(pluck("percent", scores))) || 100,
  });

  export const entitle = (row: Details, title: string): Row => ({
    ...row,
    id: `sum-${faker.datatype.uuid()}`,
    name: title,
  });

  export const from = (item: Client): Row => ({
    ...pick(["id", "name", "score", "cash", "credit"], item),
    name: item.type,
  });
}

const byClientType = ({ type }: Client) => type;
const groupByClientType = groupBy(byClientType);

const asRows = map(Row.from);

export const createRows = (clients: Client[]) => {
  const {
    standard = [],
    student = [],
    employee = [],
  } = groupByClientType(clients);
  const { aggregate, entitle } = Row;

  const standardSum = aggregate(asRows(standard));
  const studentSum = aggregate(asRows(student));
  const employeeSum = aggregate(asRows(employee));

  const standardStudentSum = aggregate([...standard, ...student]);
  const standardEmployeeSum = aggregate([...standard, ...employee]);
  const studentEmployeeSum = aggregate([...student, ...employee]);
  const allSum = aggregate([...standard, ...student, ...employee]);

  // Odwzorowuje wymaganie biznesowe 1 - 1
  return [
    ...asRows(standard),
    entitle(standardSum, "Suma - standardowych"),
    ...asRows(student),
    entitle(studentSum, "Suma - studenci"),
    entitle(standardStudentSum, "Suma - studenci"),
    ...asRows(employee),
    entitle(employeeSum, "Suma - pracownicy"),
    entitle(standardEmployeeSum, "Suma - pracownicy + standardowi"),
    entitle(studentEmployeeSum, "Suma - pracownicy + studenci"),
    entitle(allSum, "Suma - Łącznie"),
  ];
};
