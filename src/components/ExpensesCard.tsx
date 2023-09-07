import clsx from "clsx";
import Card from "./Card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, Banknote } from "lucide-react";
import useSWR from "swr";
import { Skeleton } from "./ui/skeleton";
import { ExpensesDataTypes } from "@/constants/ExpensesData";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

const intervals = ["daily", "weekly", "monthly"];

export default function ExpensesCard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryInterval = searchParams.get("interval")
    ? searchParams.get("interval")
    : "weekly";
  const { data, isLoading } = useSWR(
    `/api/users?interval=${queryInterval}`,
    (...args) => fetch(...args).then<ExpensesDataTypes>((res) => res.json())
  );

  return (
    <Card>
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-xl font-semibold">All Expenses</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="font-medium">
              Monthly <ChevronDown className="h-6 w-6 ml-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel className="text-center">
              Select Interval
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {intervals.map((interval) => (
              <DropdownMenuCheckboxItem
                key={interval}
                className="capitalize cursor-pointer"
                checked={interval === queryInterval}
                onCheckedChange={() =>
                  navigate({
                    pathname: "/",
                    search: createSearchParams({
                      interval: interval,
                    }).toString(),
                  })
                }
              >
                {interval}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ul className="grid grid-cols-3 gap-3">
        {isLoading &&
          [...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-56 w-full" />
          ))}
        {!isLoading &&
          data &&
          data.data.map((item, i) => (
            <li
              key={i}
              className={clsx(
                "py-4 px-5 rounded-xl hover:scale-105 transition",
                i === 0 ? "bg-primary text-white" : "border"
              )}
            >
              <div className="flex justify-between items-center mb-8">
                <div
                  className={clsx(
                    "h-[60px] w-[60px] rounded-full flex justify-center items-center",
                    i === 0 ? "bg-white/10" : "bg-[#FAFAFA]"
                  )}
                >
                  <Banknote
                    className={clsx(
                      "h-8 w-8",
                      i === 0 ? "text-white" : "text-primary"
                    )}
                  />
                </div>
                <ChevronRight className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{item.label}</h3>
              <p
                className={clsx(
                  "text-sm mb-4 font-light",
                  i === 0 ? "text-white" : "text-custom-gray"
                )}
              >
                {item.date}
              </p>
              <p
                className={clsx(
                  "text-2xl font-semibold",
                  i === 0 ? "text-white" : "text-primary"
                )}
              >
                ${item.value}
              </p>
            </li>
          ))}
      </ul>
    </Card>
  );
}
