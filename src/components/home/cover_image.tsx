"use client";

import { coverImg } from "@/utils/data/images";
import { Button } from "../ui/button";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { urlFor } from "../../../sanity/client";
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
    }, 5000);

    return () => clearInterval(interval);
  }, [image.length]);

  const loader = (<Skeleton className="w-full h-[650px] md:h-[800px] rounded-lg" />);

  return (
    <Suspense fallback={loader}>
      <div
        style={{
          backgroundImage: `url('${urlFor(image[currentSlide]).url()}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[650px] md:h-[800px] rounded-lg">
        {/* Title and Button in center */}
        <div className="w-full h-full flex flex-col justify-center items-center space-y-16">
          <p className="text-2xl md:text-4xl text-center font-bold text-white">
            {title}
          </p>
          <Link href="/about">
            <Button
              variant="ghost"
              className="mt-4 mx-2 text-white border hover:border-0"
              // style={{ whiteSpace: "pre-wrap" }}
              style={{ whiteSpace: 'normal', width: 'auto', height: 'auto', textAlign: 'center' }}
            >
              {aboutLink}
            </Button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
