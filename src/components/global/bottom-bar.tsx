"use client";

import React from "react";
import { Home, LayoutGrid, Palette, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import NavbarBtn from "./bottom-bar-btn";

const navBtns = [
  {
    title: "Home",
    icon: <Home className="text-neutral-400 group-hover:text-neutral-700" />,
    iconFilled: <Home className="text-black" />,
    link: "",
  },
  {
    title: "Print",
    icon: <Palette className="text-neutral-400 group-hover:text-neutral-700" />,
    link: "print",
    iconFilled: <Palette className="text-black" />,
  },
  {
    title: "Cart",
    icon: (
      <ShoppingBag className="text-neutral-400 group-hover:text-neutral-700" />
    ),
    link: "cart",
    iconFilled: <ShoppingBag className="group-hover:block" />,
  },

  {
    title: "More",
    icon: (
      <LayoutGrid className="text-neutral-400 group-hover:text-neutral-700" />
    ),
    link: "settings",
    iconFilled: <LayoutGrid className="group-hover:block" />,
  },
];

const BottomBar = () => {
  const pathName = usePathname();

  return (
    <div className="fixed bottom-0 grid w-full grid-cols-4 place-items-center border-t bg-white py-2">
      {navBtns.map(({ icon, iconFilled, title, link }) => {
        return (
          <NavbarBtn
            key={title}
            icon={icon}
            iconFilled={iconFilled}
            title={title}
            link={link}
            isActive={
              (title === "Home" && pathName === "/") ||
              pathName.split("/")[1] === link
            }
          />
        );
      })}
    </div>
  );
};

export default BottomBar;
