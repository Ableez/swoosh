import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

type Props = {
  data: {
    id: string;
    title: string;
    related_products: never[];
    coverImage: string;
    images: string[];
    description: string;
    color: string;
    slug: string;
  }[];
};

const GridDisplayComponent = ({ data }: Props) => {
  return (
    <div className="container grid grid-cols-2 gap-8 gap-y-10 px-0 md:grid-cols-4">
      {data.map((print, idx) => {
        return (
          <Link key={idx} href={print.slug}>
            <div className="masonry-grid-item duration-300 animate-in ">
              <div
                className={`bg-${print.color}-200 group relative mb-2 grid place-items-center overflow-clip rounded-2xl bg-gray-200 object-cover drop-shadow-md group-hover:drop-shadow-none`}
              >
                <Image
                  src={print.coverImage}
                  alt={print.title}
                  className="aspect-square scale-100 object-cover duration-300 group-hover:scale-110"
                  width={300}
                  height={300}
                />
                <div className="absolute bottom-2 right-2">
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="rounded-full bg-neutral-400/40"
                  >
                    <Heart width={20} color="#fff" />
                  </Button>
                </div>
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
  );
};

export default GridDisplayComponent;
