import AboutPeek from "@/components/home/about_peek";
import { getAboutData } from "@/utils/data/about_data";
import { coverImg } from "@/utils/data/images";
import Image from "next/image";
import React from "react";
import { urlFor } from "../../../sanity/client";
import { Separator } from "@radix-ui/react-separator";

export default async function AboutPage() {
  const { aboutData } = await getAboutData();
  const { title, subTitle, imageCarousel, aboutCard } = aboutData[0];
  return (
    <main className="max-w-[1800px] mx-auto space-y-10">
      <p className="text-lg px-6 pt-20 text-center">{title}</p>
      <p className="text-5xl font-semibold px-6 text-center">{subTitle}</p>
      <div className="flex items-center justify-between py-8 px-6 ">
        <AboutPeek
          header={aboutCard.header}
          subheader={aboutCard.body}
          image={aboutCard.image}
          aboutLink={aboutCard.aboutLink}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 items-center justify-between py-4 px-6">
        {imageCarousel.map((image) => (
          <Image
          src={urlFor(image).url()}
          alt="Moyosore"
          width={400}
          height={400}
          className="w-full aspect-[4/3] rounded-lg object-cover"
        />
        ))}
      </div>
    </main>
  );
}
