"use client";

import { ArrowLeft, Search, Sparkles } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = { param: string };

const PrintsNavbar = ({ param }: Props) => {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-black container sticky left-0 right-0 top-0 z-50 flex place-items-center justify-between py-2 align-middle shadow-none">
      <Button
        onClick={() => {
          router.back();
        }}
        size="icon"
        className="h-12 w-12 bg-transparent hover:bg-neutral-100/10"
        variant={"ghost"}
      >
        <ArrowLeft />
      </Button>
      <div className="flex place-items-center justify-center gap-2 align-middle">
        <Button
          size="icon"
          className="h-12 w-12 bg-transparent hover:bg-neutral-100/10"
          variant={"ghost"}
        >
          <Search />
        </Button>
        <Button
          size="icon"
          className="h-12 w-12 bg-transparent hover:bg-neutral-100/10"
          variant={"ghost"}
        >
          <Sparkles />
        </Button>
      </div>
    </div>
  );
};

export default PrintsNavbar;
