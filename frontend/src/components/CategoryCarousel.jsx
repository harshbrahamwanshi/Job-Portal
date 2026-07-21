import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  return (
    <div className="w-full py-10">
      <Carousel className="w-full max-w-5xl mx-auto px-12">
        <CarouselContent className="-ml-2">
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <Button
                variant="outline"
                className="rounded-full px-6 py-5 text-sm font-medium shadow-sm transition-all duration-300 hover:bg-black hover:text-white"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 h-10 w-10 border bg-white shadow-md transition-all duration-300 hover:bg-black hover:text-white" />
        <CarouselNext className="right-0 h-10 w-10 border bg-white shadow-md transition-all duration-300 hover:bg-black hover:text-white" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;