import AboutPeek from "@/components/home/about_peek";
import { coverImg } from "@/utils/data/images";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-[1800px] mx-auto">
      <p className="text-5xl font-bold px-6 pt-20">About</p>
      <div className="flex items-center justify-between py-4 px-6">
        {/* <AboutPeek /> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 items-center justify-between py-4 px-6">
        <Image
          src={coverImg}
          alt="Moyosore"
          width={400}
          height={400}
          className="w-full aspect-[4/3] rounded-lg object-cover"
        />
      </div>
    </main>
  );
}
