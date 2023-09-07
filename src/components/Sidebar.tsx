import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { LayoutGrid, Image } from "lucide-react";
import UserCard from "./UserCard";
import UserAvatar from "@/assets/images/user-avatar-1.png";

const links = [{ href: "/", icon: LayoutGrid, label: "Dashboard" }];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className={clsx(
        "fixed top-0 left-0 z-20",
        "flex flex-col flex-shrink-0",
        "h-full w-0 lg:w-[280px] lg:flex transition-width",
        "font-normal font-montserrat"
      )}
    >
      <div
        className={clsx(
          "relative flex flex-col flex-1 min-h-0 pt-12 px-6",
          "hidden lg:block"
        )}
      >
        {/* ======== logo ======== */}
        <div className="bg-[#C4C4C4] flex justify-center items-center mx-8 mb-4 py-3.5">
          <Image className="h-6 w-6" />
        </div>
        {/* ======== user card ======== */}
        <div className="mb-2">
          <UserCard
            avatar={UserAvatar}
            name="Lekan Okeowo"
            email="demo@gmail.com"
          />
        </div>
        {/* ======== nav links ======== */}
        <ul className="py-5 space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={clsx(
                  "block group hover:bg-gray-100",
                  "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                <div
                  className={clsx(
                    "flex justify-between items-center h-12",
                    "text-base ",
                    location.pathname === link.href && "text-primary font-bold"
                  )}
                >
                  <div className="flex items-center">
                    <link.icon className="w-6 h-6" />
                    <span className="ml-3">{link.label}</span>
                  </div>
                  {location.pathname === link.href && (
                    <div className="h-full w-1 bg-primary" />
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
