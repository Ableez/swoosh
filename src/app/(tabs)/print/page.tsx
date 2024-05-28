import React from "react";
import { MessageCircle, Palette, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/productsSchema";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/logo";

const PrintPage = () => {
  return (
    <div>
      <PrintNavbar />
      <div className="container my-8">
        <h4 className="text-2xl font-bold">Products</h4>
      </div>
      <div className="container grid grid-cols-2 gap-8 gap-y-10 md:grid-cols-4">
        {products.map(({ productInfo, quantityOptions }, idx) => {
          return (
            <Link
              key={idx}
              href={`/print/p/${productInfo.id}`}
              className="group"
            >
              <div className="masonry-grid-item duration-300 animate-in">
                <div
                  className={`group mb-2 grid place-items-center overflow-clip rounded-3xl bg-blue-200 object-cover shadow-sm ring-4 ring-transparent duration-300 group-hover:shadow-none group-hover:ring-gray-200/80`}
                >
                  <Image
                    src={productInfo.coverImage}
                    alt={productInfo.name}
                    className="aspect-square scale-100 object-cover duration-300 group-hover:scale-110"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-medium animate-in">{productInfo.name}</h4>
                  <span className="text-sm text-neutral-500">
                    Starting{" "}
                    <b>
                      {quantityOptions[0]?.packPrice
                        ? (quantityOptions[0]?.packPrice * 1425)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        : 0 * 1425}{" "}
                    </b>
                    for 50
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PrintPage;

const PrintNavbar = () => {
  return (
    <div className="container sticky top-0 z-50 flex place-items-center justify-between bg-white py-3 align-middle shadow-md">
      <Logo />

      <div className="flex place-items-center gap-2 align-middle">
        <Button
          size="icon"
          className="h-12 w-12 bg-neutral-200/70"
          variant={"ghost"}
        >
          <Search />
        </Button>
        <Button
          size="icon"
          className="h-12 w-12 bg-neutral-200/70"
          variant={"ghost"}
        >
          <MessageCircle />
        </Button>
      </div>
    </div>
  );
};
