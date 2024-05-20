import Link from "next/link";
import { type ReactNode } from "react";

type NavbarBtnProps = {
  title: string;
  icon: ReactNode;
  iconFilled?: ReactNode;
  link: string;
  isActive: boolean | string;
};

const NavbarBtn = ({
  // title,
  icon,
  iconFilled,
  link,
  isActive,
}: NavbarBtnProps) => {
  return (
    <Link href={`/${link}`}>
      <button className="group grid place-items-center justify-center gap-1 rounded-2xl p-1 align-middle">
        <span className="rounded-full px-5 py-1">
          {isActive ? iconFilled : icon}
        </span>
        {/* <span
          className={`text-[12px] font-medium ${isActive ? "text-black" : "text-neutral-400 group-hover:text-neutral-700"}`}
        >
          {title}
        </span> */}
      </button>
    </Link>
  );
};

export default NavbarBtn;
