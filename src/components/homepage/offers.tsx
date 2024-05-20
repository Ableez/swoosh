import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const OffersComponent = () => {
  return (
    <div className="mt-10">
      <Carousel>
        <CarouselContent className="container">
          {Array.from({ length: 2 }).map((_, index) => {
            return (
              <CarouselItem key={index} className="basis-[80%]">
                <Card className="grid grid-flow-row rounded-2xl bg-red-500 p-4">
                  <CardContent>
                    <CardTitle className="mb-2 text-3xl font-bold text-white">
                      25% off offer
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardContent>
                  <Button className="text-red bg-white hover:bg-white/90">
                    Shop Now
                  </Button>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OffersComponent;
