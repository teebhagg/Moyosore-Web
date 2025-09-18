"use client";

import ScrollAnimatedWrapper from "@/components/common/scroll_animated_wrapper";
import CarouselSlider from "@/components/portfolio/carousel_slider";
import PortfolioHeader from "@/components/portfolio/portfolio_header";
import { getPortfolios } from "@/utils/data/porfolio_data";
import React, { useEffect } from "react";

interface PortfolioProps {
  title?: string;
  subtitle?: string;
  imageCarousel?: any[];
}

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = React.useState<PortfolioProps>();

  useEffect(() => {
    const fetchData = async () => {
      const { portfolioData } = await getPortfolios();
      setPortfolio(portfolioData[0]);
      console.log(portfolioData[0].imageCarousel);
    };
    fetchData();
  }, []);

  if (!portfolio) {
    return null;
  }

  return (
    <main className="max-w-[1800px] mx-auto">
      <ScrollAnimatedWrapper delay={0.1}>
        <p className=" text-2xl md:text-3xl lg:text-5xl font-bold px-6 pt-[150px]">
          Portfolio
        </p>
      </ScrollAnimatedWrapper>
      <div className="flex flex-col items-center justify-between py-4 px-6 space-y-12">
        <ScrollAnimatedWrapper delay={0.2} className="w-full max-w-6xl mx-auto">
          <PortfolioHeader
            title={portfolio?.title}
            subtitle={portfolio?.subtitle}
          />
        </ScrollAnimatedWrapper>
        {/* <Separator className="mt-5" />
            <Separator className="mb-5" /> */}
        <ScrollAnimatedWrapper delay={0.3}>
          <CarouselSlider images={portfolio?.imageCarousel!} />
        </ScrollAnimatedWrapper>
      </div>
    </main>
  );
}
