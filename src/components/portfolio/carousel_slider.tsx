"use client";

import React, { Component } from "react";
import { Carousel as FlowBiteCarousel } from "flowbite-react";
import { Carousel as PrimeReactCarousel } from "primereact/carousel";
import Image from "next/image";
import { urlFor } from "../../../sanity/client";

interface Props {
  images: any[]
}

const CarouselSlider = (props: Props) => {
  const { images } = props;
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    // <div></div>
    <div className="w-full aspect-square md:max-h-[500px]">
      <FlowBiteCarousel className="block md:hidden">
        {images.map((image) => (
          <Image
            key={image}
            src={urlFor(image).url()}
            alt="Moyosore"
            width={400}
            height={400}
            className="w-full aspect-square object-cover"
          />
        ))}
      </FlowBiteCarousel>
      <PrimeReactCarousel
        value={images}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        className="hidden md:block"
      />
    </div>
  );
};

const productTemplate = (product: any) => {
  return (
    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
      <Image
        src={urlFor(product).url()}
        alt="Moyosore"
        width={400}
        height={400}
        className="w-full aspect-square object-cover"
      />
    </div>
  );

};

export default CarouselSlider;
