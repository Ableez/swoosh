import { ArrowLeft, Search, Sparkles } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type Props = { param: string };

const PrintsNavbar = ({ param }: Props) => {
  return (
    <div className="container flex place-items-center justify-between bg-white py-2 align-middle shadow-sm">
      <Button
        size="icon"
        className="h-12 w-12 bg-neutral-100"
        variant={"ghost"}
      >
        <ArrowLeft />
      </Button>
      <div className="flex place-items-center justify-center gap-2 align-middle">
        <Button
          size="icon"
          className="h-12 w-12 bg-neutral-100"
          variant={"ghost"}
        >
          <Search />
        </Button>
        <Button
          size="icon"
          className="h-12 w-12 bg-neutral-100"
          variant={"ghost"}
        >
          <Sparkles />
        </Button>
      </div>
    </div>
  );
};

export default PrintsNavbar;
