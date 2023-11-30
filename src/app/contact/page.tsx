import React from "react";
import Image from "next/image";

import { coverImg } from "@/utils/data/images";

export default function AboutPage() {
  return (
    <main className="max-w-[1800px] mx-auto">
      <div className="flex items-center justify-between space-x-5 py-24 px-6">
        <div className="w-1/2">
          <Image
            src={coverImg}
            alt="Moyosore"
            width={400}
            height={400}
            className="w-full aspect-[4/3] rounded-lg object-cover"
          />
        </div>
        <div className="w-1/2">
          <p className="text-5xl font-bold px-6 pt-20">Contact</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
