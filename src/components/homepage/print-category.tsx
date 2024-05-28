import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { printCategories } from "@/lib/data/customCategories";
import GridDisplayComponent from "./grid-display-component";

const PrintCategory = () => {
  return (
    <div className="container my-12">
      <div className="my-8 flex place-items-center justify-between align-middle">
        <h4 className="text-xl font-bold md:text-2xl">Custom prints</h4>
        <Button variant={"link"} className="flex place-items-center gap-2">
          <span>View All</span>
          <Search width={14} />
        </Button>
      </div>
      <GridDisplayComponent data={printCategories} />
    </div>
  );
};

export default PrintCategory;
