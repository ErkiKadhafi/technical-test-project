
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import clsx from "clsx";

type UserCardProps = {
  avatar: string;
  name: string;
  email: string;
  size?: "normal" | "large";
};

export default function UserCard({
  avatar,
  name,
  email,
  size = "normal",
}: UserCardProps) {
  return (
    <div
      className={clsx(
        "flex items-center bg-[#FAFAFA] rounded-xl p-3",
        size === "normal" ? "space-x-2.5" : "space-x-3"
      )}
    >
      <Avatar className={clsx(size === "normal" ? "h-8 w-8" : "h-12 w-12")}>
        <AvatarImage src={avatar} alt="User avatar" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className={clsx(size === "normal" ? "space-y-1" : "space-y-1.5")}>
        <p className="font-bold">{name}</p>
        <p className="text-xs text-custom-gray">{email}</p>
      </div>
    </div>
  );
}
