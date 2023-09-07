import ExpensesCard from "@/components/ExpensesCard";
import InvoiceCard from "@/components/InvoiceCard";
import MyCard from "@/components/MyCard";
import { expensesData } from "@/constants/ExpensesData";
import { myTransactionsData } from "@/constants/MyTransactionsData";
import { createServer } from "miragejs";

/* ======== mock API ======== */
createServer({
  routes() {
    this.get(
      "/api/users",
      (_, request) => {
        const interval = request.queryParams.interval;

        const data = expensesData.find((data) => data.interval === interval);
        if (data) return data;

        return "No data found";
      },
      { timing: 1000 }
    );
    this.get(
      "/api/my_transactions",
      () => {
        return myTransactionsData;
      },
      { timing: 1000 }
    );
  },
});

export default function Homepage() {
  return (
    <section className="grid grid-cols-10 gap-6">
      <div className="col-span-10 xl:col-span-6 flex flex-col gap-6 ">
        <ExpensesCard />
        <InvoiceCard />
      </div>
      <div className="col-span-10 xl:col-span-4 ">
        <MyCard />
      </div>
    </section>
  );
}
