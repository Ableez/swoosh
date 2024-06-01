/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import PrintsNavbar from "@/components/prints[category]/navbar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  type ProductAvgRatingType,
  type ProductRateType,
  products,
  type Sticker,
  stickerSchema,
} from "@/lib/data/productsSchema";
import { Heart, MessageCircleIcon, StarIcon, ThumbsDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ProductInfoTittle } from "./_components/product-info-title";
import StickerProductInfo from "./_components/sticker-info";

type Props = { params: { product: string } };

const Product = ({ params }: Props) => {
  const product = products.find(
    (product) => product.productInfo.id === params.product,
  );

  if (!product) {
    return "404: Product not found"
  }

  return (
    <div className="max-w-screen-sm">
      <PrintsNavbar param={params.product} />
      <div>
        <ProductImagesCarousel images={product?.productInfo.images} />
        <ProductInfoTittle
          productName={product.productInfo.name}
          quantityOptions={product.quantityOptions}
        />

        {params.product === "sticker" && (
          <StickerProductInfo
            designOptions={[
              {
                value: "SAV",
                image: "/productImages/stickercover1.jpg",
              },
              {
                value: "Clear stiicker",
                image: "/productImages/clearsticker.webp",
              },
            ]}
            sizeOptions={product.sizeOptions}
            stickerTypes={product.stickerTypes}
          />
        )}

        {/* product desc here */}
        <ProductDesc description={product?.productInfo.description} />

        <div className="my-4 grid w-full place-items-center gap-2 p-4">
          <div className="flex w-full place-items-center justify-center gap-3 align-middle">
            <Button
              variant={"secondary"}
              className="w-full
            "
            >
              Refund policy
            </Button>
            <Button
              variant={"secondary"}
              className="w-full
            "
            >
              Shipping policy
            </Button>
          </div>

          <Button
            variant={"secondary"}
            className="w-full
          "
          >
            Place a volume order policy
          </Button>
        </div>

        {/* reviews here */}
        <ProductReviews
          allRatings={product?.productInfo.allRatings}
          avgRatings={product?.productInfo.avgRatings}
        />
      </div>
    </div>
  );
};

export default Product;

type ProductImagesCarouselProps = {
  images?: string[];
};

const ProductImagesCarousel = ({ images }: ProductImagesCarouselProps) => {
  return (
    <Carousel>
      <CarouselContent className="gap-4 pl-8">
        {images?.map((img, idx) => {
          return (
            <CarouselItem
              key={idx}
              className="group grid aspect-square basis-[90%] place-items-center overflow-clip rounded-2xl bg-gray-200 p-0"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div className="grid h-full w-full place-items-center backdrop-blur-md">
                <Image
                  src={img}
                  alt="Product Image"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

type ProductDescProps = {
  description?: string;
};

const ProductDesc = ({ description }: ProductDescProps) => {
  return (
    <div className="container grid gap-2">
      <div>
        <h4 className="text-base font-semibold">Description</h4>
      </div>
      <div className="text-sm text-neutral-600">
        <p>
          {description ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dignissimos itaque tenetur! Dignissimos nihil suscipit nam fugiat eligendi voluptatibus totam qui ea sit reiciendis! Nemo, architecto. Commodi quibusdam ad, temporibus est labore molestias cumque fugiat magni ipsa velit amet veritatis consequuntur reprehenderit qui officia porro perferendis error eaque iusto nulla?"}
        </p>
      </div>
    </div>
  );
};

type ProductReviewsProps = {
  allRatings?: ProductRateType[];
  avgRatings?: ProductAvgRatingType;
};
const ProductReviews = ({ allRatings, avgRatings }: ProductReviewsProps) => {
  return (
    <div className="my-6 grid gap-2">
      <div className="flex place-items-center justify-between px-4">
        <h4 className="flex place-items-center align-middle text-base font-semibold">
          Reviews
          <span className="ml-2 flex place-items-center gap-0.5 align-middle text-base text-neutral-500">
            {avgRatings?.ratingCounts}
          </span>
        </h4>
        <div className="flex place-items-center gap-2 align-middle text-xs font-medium text-neutral-700/80">
          <div className="flex place-items-center gap-0.5 align-middle">
            <MessageCircleIcon width={12} />
            <h4>{avgRatings?.commentsCounts}</h4>
          </div>
          <div className="flex place-items-center gap-0.5 align-middle">
            <Heart width={12} />
            <h4>{avgRatings?.likesCounts}</h4>
          </div>
          <div className="flex place-items-center gap-0.5 align-middle">
            <ThumbsDown width={12} />
            <h4>{avgRatings?.dislikesCounts}</h4>
          </div>
        </div>
      </div>

      {!allRatings ? (
        "No reviews yet"
      ) : (
        <Carousel className="w-screen">
          <CarouselContent className="gap-4 px-4">
            {[
              ...allRatings,
              ...allRatings,
              ...allRatings,
              ...allRatings,
              ...allRatings,
              ...allRatings,
              ...allRatings,
            ].map((comment, idx) => {
              return (
                <CarouselItem
                  key={idx}
                  className="ml-4 basis-[70%] rounded-2xl border border-neutral-200 bg-neutral-200/50 p-6"
                >
                  <div className="mb-2 text-sm font-medium text-neutral-700">
                    {comment.comment}
                  </div>
                  <div className="flex place-items-center gap-0.5 align-middle">
                    <StarIcon fill="#000" width={10} />
                    <StarIcon fill="#000" width={10} />
                    <StarIcon fill="#000" width={10} />
                    <StarIcon fill="#ccc" stroke="#ccc" width={10} />
                    <StarIcon fill="#ccc" stroke="#ccc" width={10} />
                  </div>
                  <div className="flex place-items-center gap-2 align-middle text-sm font-normal text-neutral-400">
                    <h4>{comment.username}</h4>
                    <span>•</span>
                    <h4>{comment.timestamp}</h4>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      )}
      <div className="my-4">
        <Button variant={"secondary"} className="w-full">
          View all
        </Button>
      </div>
    </div>
  );
};
