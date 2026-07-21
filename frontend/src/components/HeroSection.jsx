import { Button } from "@base-ui/react";
import { Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur temporibus nihil tempora dolor!
        </p>
<div className="mx-auto flex w-full max-w-2xl items-center rounded-full border border-gray-300 bg-white shadow-lg overflow-hidden">
  <input
    type="text"
    placeholder="Find your dream jobs"
    className="flex-1 px-6 py-4 text-base outline-none placeholder:text-gray-400"
  />

  <Button
    className="h-14 w-14 rounded-full bg-[#6A38C2] hover:bg-[#5b30a6] flex items-center justify-center m-1"
  >
    <Search className="h-5 w-5 text-white" />
  </Button>
</div>
      </div>
    </div>
  );
};

export default HeroSection;
