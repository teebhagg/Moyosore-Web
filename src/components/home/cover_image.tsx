"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { urlFor } from "../../../sanity/client";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

interface Props {
  title?: string;
  image?: any;
  aboutLink?: string;
}

export default function CoverImage(props: Props) {
  const { title, image, aboutLink } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % image.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [image.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const loader = (
    <Skeleton className="w-full h-[650px] md:h-[800px] rounded-lg" />
  );

  return (
    <Suspense fallback={loader}>
      <div className="w-screen h-[100vh] relative -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-32 2xl:-mx-48 overflow-hidden">
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {image.map((img: any, index: number) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <div
                style={{
                  backgroundImage: `url('${urlFor(img).url()}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-full h-full"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Title and Button in center */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center space-y-16 z-10">
          <p className="text-2xl md:text-4xl text-center font-bold text-white">
            {title}
          </p>
          <Link href="/about">
            <Button
              variant="ghost"
              className="mt-4 mx-2 text-white border hover:border-0"
              // style={{ whiteSpace: "pre-wrap" }}
              style={{
                whiteSpace: "normal",
                width: "auto",
                height: "auto",
                textAlign: "center",
              }}>
              {aboutLink}
            </Button>
          </Link>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {image.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
