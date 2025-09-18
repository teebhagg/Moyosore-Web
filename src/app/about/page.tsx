"use client";

import ScrollAnimatedWrapper from "@/components/common/scroll_animated_wrapper";
import AboutPeek from "@/components/home/about_peek";
import { getAboutData } from "@/utils/data/about_data";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../../../sanity/client";

export default async function AboutPage() {
  const { aboutData } = await getAboutData();
  const { title, subTitle, imageCarousel, aboutCard } = aboutData[0];

  // Function to get staggered classes for images
  const getStaggeredClass = (index: number) => {
    const classes = [
      "row-span-1", // 1st image - normal height
      "row-span-2", // 2nd image - double height
      "row-span-1", // 3rd image - normal height
      "row-span-2", // 4th image - double height
      "row-span-1", // 5th image - normal height
      "row-span-1", // 6th image - normal height
    ];
    return classes[index % classes.length];
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 pt-[150px] pb-24 space-y-16">
        {/* Header Section */}
        <ScrollAnimatedWrapper delay={0.1} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6">
            <p className="text-lg text-gray-600 font-medium">{title}</p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black leading-tight">
              {subTitle}
            </h1>
          </motion.div>
        </ScrollAnimatedWrapper>

        {/* About Card Section */}
        <ScrollAnimatedWrapper delay={0.2}>
          <div className="flex items-center justify-center py-8">
            <AboutPeek
              header={aboutCard.header}
              subheader={aboutCard.body}
              image={aboutCard.image}
              aboutLink={aboutCard.aboutLink}
            />
          </div>
        </ScrollAnimatedWrapper>

        {/* Staggered Images Gallery */}
        <ScrollAnimatedWrapper delay={0.3}>
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Our Journey
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Capturing moments and memories that define our story
              </p>
            </div>

            {/* Staggered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
              {imageCarousel.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group ${getStaggeredClass(index)}`}>
                  <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={urlFor(image).url()}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image Number Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-gray-700">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedWrapper>

        {/* Additional Content Section */}
        <ScrollAnimatedWrapper delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-black">
                Building Something Amazing
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every image tells a story, every moment captures an emotion. We
                believe in the power of visual storytelling to connect, inspire,
                and transform.
              </p>
            </div>
          </motion.div>
        </ScrollAnimatedWrapper>
      </div>
    </main>
  );
}
