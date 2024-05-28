import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { Palette } from "lucide-react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex">
      <Button
        variant={"ghost"}
        className="flex place-items-center gap-0.5 px-0 align-middle text-red-500 hover:bg-none"
      >
        {/* <div className="mr-0.5 h-[10px] w-[10px] rounded-full bg-primary" />
          <div className="ml-0.5 h-[10px] w-[10px] rounded-full bg-primary" /> */}
        <Palette className="rotate-45 fill-red-500 stroke-white px-0" />
        <span className="font-mono text-[1.5rem] font-semibold tracking-tighter text-red-500">
          Swoosh
        </span>
      </Button>
    </Link>
  );
};

export default Logo;
