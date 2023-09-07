import Card from "./Card";
import { Image } from "lucide-react";
import AtmBackground from "@/assets/images/atm-card-background.png";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import clsx from "clsx";
import { MyTransactionsDataType } from "@/constants/MyTransactionsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Skeleton } from "./ui/skeleton";
import useSWR from "swr";

export default function MyCard() {
  const { data, isLoading } = useSWR("/api/my_transactions", (...args) =>
    fetch(...args).then<MyTransactionsDataType>((res) => res.json())
  );
  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">My Card</h2>
      </div>
      <div className="mb-5 pb-2">
        <Swiper
          spaceBetween={12}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: `#swiper-pagination`,
            bulletClass: "swiper-bullet-pagination",
            bulletActiveClass: "swiper-bullet-pagination-active",
            // prettier-ignore
            renderBullet: function (_, className) {
              return `<button class="${className}"></button>`;
            },
          }}
        >
          {[...Array(3)].map((_, i) => (
            <SwiperSlide key={i}>
              <div
                style={{ backgroundImage: `url(${AtmBackground})` }}
                className="bg-primary rounded-xl py-5 px-8 text-white"
              >
                <div className="flex justify-between items-center mb-14">
                  <div className="space-y-2">
                    <h3>Name Card</h3>
                    <p className="text-xl font-medium">Syah Bandi</p>
                  </div>
                  <Image className="text-black w-6 h-6" />
                </div>
                <p className="text-right text-2xl mb-3 font-semibold">
                  0918 8124 0042 8129
                </p>
                <p className="text-right">12/20 - 124</p>
              </div>
            </SwiperSlide>
          ))}
          <ul
            role="group"
            aria-label="Pilih slide untuk ditampilkan"
            id="swiper-pagination"
            className={`flex justify-start space-x-2 my-4 text-white`}
          ></ul>
        </Swiper>
      </div>
      <Separator className="mb-5" />
      <div className="">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">Transaction History</h2>
          <Link
            to="/"
            className={cn(buttonVariants({ variant: "link" }), "py-0 h-0")}
          >
            See all
          </Link>
        </div>
        <p className="text-custom-gray mb-4">13 April 2022</p>
        <ul className="space-y-3">
          {isLoading
            ? [...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-20 w-full" />
              ))
            : data &&
              data.map((data, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-[#FAFAFA] p-4 rounded-xl"
                >
                  <div>
                    <p className="font-semibold mb-1.5">{data.name}</p>
                    <p className="text-custom-gray">{data.date}</p>
                  </div>
                  <p
                    className={clsx(
                      "text-xl font-semibold",
                      data.type === "expense"
                        ? "text-[#F3735E]"
                        : "text-[#7DD97B]"
                    )}
                  >
                    ${data.value}
                  </p>
                </li>
              ))}
        </ul>
      </div>
    </Card>
  );
}
