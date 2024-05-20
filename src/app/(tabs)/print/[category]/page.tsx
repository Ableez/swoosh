import PrintsNavbar from "@/components/prints[category]/navbar";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { customPrints } from "@/lib/data/customCategories";
import React from "react";

type Props = { params: { category: string } };

const Category = ({ params }: Props) => {
  const category = customPrints.find(
    (category) => category.slug.replace("/", "") === params.category,
  );

  if (!category) {
    return null;
  }

  return (
    <div>
      <PrintsNavbar param={params.category} />
      <div>
        <Carousel>
          <CarouselContent></CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Category;
