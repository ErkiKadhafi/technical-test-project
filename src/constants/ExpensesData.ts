export type ExpensesDataTypes = {
  interval: string;
  data: {
    label: string;
    date: string;
    value: number;
  }[];
};

export const expensesData = [
  {
    interval: "daily",
    data: [
      {
        label: "Balance",
        date: "April 2022",
        value: 3250,
      },
      {
        label: "Income",
        date: "April 2022",
        value: 0,
      },
      {
        label: "Expenses",
        date: "April 2022",
        value: 100,
      },
    ],
  },
  {
    interval: "weekly",
    data: [
      {
        label: "Balance",
        date: "April 2022",
        value: 3250,
      },
      {
        label: "Income",
        date: "April 2022",
        value: 500,
      },
      {
        label: "Expenses",
        date: "April 2022",
        value: 250,
      },
    ],
  },
  {
    interval: "monthly",
    data: [
      {
        label: "Balance",
        date: "April 2022",
        value: 3250,
      },
      {
        label: "Income",
        date: "April 2022",
        value: 2000,
      },
      {
        label: "Expenses",
        date: "April 2022",
        value: 800,
      },
    ],
  },
];
