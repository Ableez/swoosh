import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { customPrints } from "@/lib/data/customCategories";
import Link from "next/link";

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
      <div className="grid grid-cols-2 gap-4">
        {customPrints.map((print, idx) => {
          return (
            <Link key={idx} href={`/print/${print.slug}`}>
              <div className="masonry-grid-item duration-300 animate-in">
                <div
                  className={`bg-${print.color}-200 group mb-2 grid place-items-center overflow-clip rounded-2xl bg-gray-200 object-cover`}
                >
                  <Image
                    src={print.coverImage}
                    alt={print.title}
                    className="scale-100 duration-300 group-hover:scale-110"
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium animate-in">
                    {print.title}
                  </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PrintCategory;
