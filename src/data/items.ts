import { Item } from "../types/Item";

export const items: Item[] = [
  {
    date: new Date(2022, 8, 6),
    category: "food",
    title: "McDonalds",
    value: 32.12,
  },
  {
    date: new Date(2022, 7, 6),
    category: "food",
    title: "Burger King",
    value: 28,
  },
  {
    date: new Date(2022, 6, 6),
    category: "rent",
    title: "Aluguel Apt",
    value: 2300,
  },
  {
    date: new Date(2022, 5, 6),
    category: "salary",
    title: "Salário ACME",
    value: 4500,
  },
  {
    date: new Date(2022, 5, 6),
    category: "rent",
    title: "Celular",
    value: 1000,
  },
];
