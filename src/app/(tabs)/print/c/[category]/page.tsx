import PrintsNavbar from "@/components/prints[category]/navbar";
import { printCategories } from "@/lib/data/customCategories";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { params: { category: string } };

const Category = ({ params }: Props) => {
  const category = printCategories.find((category) => {
    return category.slug.split("/").includes(params.category);
  });

  if (!category) {
    return "No such category";
  }

  return (
    <div className="relative h-[300vh]">
      <PrintsNavbar param={params.category} />
      <div>
        <div className="relative h-[20rem] w-full overflow-clip object-cover object-center">
          <Image
            className="h-full w-full object-cover object-center"
            src={category.coverImage}
            alt={category.title}
            width={400}
            height={400}
          />
          <div className="absolute left-1/2 top-1/2 grid h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col place-items-center items-center bg-black/20 align-middle text-white">
            <div className="grid place-items-center gap-4">
              <h4 className="text-xl font-semibold">
                {category.title === "Stationaries"
                  ? "Stationary Prints"
                  : category.title}
              </h4>
              <div className="flex items-center gap-2">
                <StarIcon width={14} className="fill-white" /> <span>4.9</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-8">
          <div className="mb-6 grid place-items-center">
            <h4 className="text-xl font-semibold">Business Cards</h4>
          </div>
          <div className="grid grid-cols-2 place-items-center gap-6 align-middle">
            <Link href={`/print/p/sticker`}>
              <div className="w-full duration-300 animate-in">
                <div
                  className={`group group mb-2 grid place-items-center overflow-clip rounded-2xl bg-neutral-300 object-cover shadow-md`}
                >
                  <Image
                    src={"/images/stickercover.jpg"}
                    alt={"Sticker Cover"}
                    className="aspect-square scale-100 object-cover duration-300 group-hover:scale-105"
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium animate-in">Sticker</h4>
                </div>
              </div>
            </Link>
            <Link href={`/print/p/business-card`}>
              <div className="w-full duration-300 animate-in">
                <div
                  className={`group mb-2 grid place-items-center overflow-clip rounded-2xl bg-neutral-300 object-cover`}
                >
                  <Image
                    src={"/images/stickercover.jpg"}
                    alt={"Sticker Cover"}
                    className="aspect-square object-cover duration-300"
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium animate-in">
                    Business Cards
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
