"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity/client";
import { Button } from "../ui/button";

interface Props {
  images: any[];
}

export default function PortfolioPeek(props: Props) {
  const { images } = props;

  // Staggered grid layout - alternating heights for visual interest
  const getStaggeredClass = (index: number) => {
    const patterns = [
      "row-span-1", // normal height
      "row-span-2", // taller
      "row-span-1", // normal height
      "row-span-3", // tallest
      "row-span-2", // taller
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="space-y-5">
      <div
        id="portfolio"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 w-full auto-rows-[200px]">
        {images.map((image: any, index: number) => (
          <motion.div
            key={index}
            className={getStaggeredClass(index)}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}>
            <ImageCard url={urlFor(image.image).url()} />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: images.length * 0.1 + 0.2 }}>
        <Link href="/portfolio">
          <Button variant="ghost" className="mt-4  border">
            View Portfolio
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

const ImageCard = ({ url }: { url: string }) => {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={url}
        alt="Moyosore"
        width={600}
        height={600}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};
