export type MyTransactionsDataType = {
  type: string;
  name: string;
  date: string;
  value: number;
}[];

export const myTransactionsData = [
  {
    type: "expense",
    name: "Cash Withdrawal",
    date: "13 Apr 2022 at 3:30PM",
    value: 150,
  },
  {
    type: "income",
    name: "App Project Payment",
    date: "12 Feb 2022 at 12:30PM",
    value: 200,
  },
  {
    type: "expense",
    name: "Macbook 13 Pro",
    date: "10 Mar 2022 at 1:20PM",
    value: 1000,
  },
  {
    type: "income",
    name: "Monthly Salary",
    date: "1 Apr 2022 at 10:-0PM",
    value: 2000,
  },
];
