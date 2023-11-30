import { coverImg } from "@/utils/data/images";
import React from "react";
import { Button } from "../ui/button";

export default function ContactBanner() {
  return (
    <div
      style={{
        backgroundImage: `url('${coverImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[400px] rounded-lg">
      {/* Title and Button in center */}
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p id="subtitle" className="text-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <h1 id="title" className="text-5xl font-bold text-white">
          Moyosore
        </h1>
        <Button variant="outline" className="mt-4">
          Get Started
        </Button>
      </div>
    </div>
  );
}
