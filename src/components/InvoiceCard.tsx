import Card from "./Card";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Plus } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import UserCard from "./UserCard";
import UserAvatar1 from "@/assets/images/user-avatar-1.png";
import UserAvatar2 from "@/assets/images/user-avatar-2.png";
import UserAvatar3 from "@/assets/images/user-avatar-3.png";

const userAvatars = [
  {
    avatar: UserAvatar1,
    name: "Madrani Adi",
    email: "madraniadi@gmail.com",
  },
  {
    avatar: UserAvatar2,
    name: "Joshua Nunito",
    email: "JoshNunito@gmail.com",
  },
  {
    avatar: UserAvatar3,
    name: "Abdul Setiawan",
    email: "AbdulSetiawan@gmail.com",
  },
];

export default function InvoiceCard() {
  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Quick Invoice</h2>
        <Button size="icon" variant="secondary">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-3 mb-6">
        <h3 className="font-medium">Latest Transaction</h3>
        <Swiper spaceBetween={12} slidesPerView={2.5}>
          {userAvatars.map((avatar) => (
            <SwiperSlide key={avatar.name}>
              <UserCard
                size="large"
                avatar={avatar.avatar}
                name={avatar.name}
                email={avatar.email}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Separator className="mb-6" />
      <form>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-3">
            <Label>Customer Name</Label>
            <Input type="text" placeholder="Type customer name" />
          </div>
          <div className="space-y-3">
            <Label>Customer Email</Label>
            <Input type="text" placeholder="Type customer email" />
          </div>
          <div className="space-y-3">
            <Label>Item Name</Label>
            <Input type="text" placeholder="Type customer name" />
          </div>
          <div className="space-y-3">
            <Label>Item Price ($)</Label>
            <Input type="number" placeholder="Type item email" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="font-semibold"
          >
            Add more details
          </Button>
          <Button
            type="button"
            variant="default"
            size="lg"
            className="font-semibold"
          >
            Send Money
          </Button>
        </div>
      </form>
    </Card>
  );
}
