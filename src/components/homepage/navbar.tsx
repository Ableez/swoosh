import React from "react";
import { Button } from "../ui/button";
import { MessageCircle, Search } from "lucide-react";
import Logo from "../ui/logo";

const HomeNavbar = () => {
  return (
    <div className="container sticky top-0 z-50 flex place-items-center justify-between bg-white py-3 align-middle shadow-sm">
      <Logo />
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
          <MessageCircle />
        </Button>
      </div>
    </div>
  );
};

export default HomeNavbar;
