import React from "react";
import { Button } from "../ui/button";
import { Search, Sparkles } from "lucide-react";

const HomeNavbar = () => {
  return (
    <div className="container sticky top-0 z-50 flex place-items-center justify-between bg-white py-3 align-middle shadow-sm">
      <div className="flex place-items-center justify-center gap-2 align-middle">
        <div className="grid gap-0.5">
          <div className="h-[10px] w-[10px] rounded-full bg-primary" />
          <div className="h-[10px] w-[10px] rounded-full bg-primary" />
        </div>
        <h4 className="text-center font-mono text-3xl font-bold tracking-tighter text-primary md:text-4xl">
          Swoosh
        </h4>
      </div>
      <div className="flex place-items-center justify-center gap-2 align-middle">
        <Button
          size="icon"
          className="h-12 w-12 bg-neutral-100"
          variant={"ghost"}
        >
          <Sparkles />
        </Button>
        <Button
          size="icon"
          className="h-12 w-12 bg-neutral-100"
          variant={"ghost"}
        >
          <Search />
        </Button>
      </div>
    </div>
  );
};

export default HomeNavbar;
