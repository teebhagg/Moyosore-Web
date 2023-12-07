"use client";

import CarouselSlider from "@/components/portfolio/carousel_slider";
import PortfolioHeader from "@/components/portfolio/portfolio_header";
import { getPortfolios } from "@/utils/data/porfolio_data";
import { PortfolioInterface } from "@/utils/interface/home";
import { Separator } from "@radix-ui/react-separator";
import React, { useEffect } from "react";

export default function PortfolioPage() {
  const [portfolio, setPortfolio] =
    React.useState<PortfolioInterface>();

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
      <p className="text-5xl font-bold px-6 pt-20">Portfolio</p>
      <div className="flex flex-col items-center justify-between py-4 px-6">
        <PortfolioHeader
          title={portfolio?.title}
          subtitle={portfolio?.subTitle}
        />
        {/* <Separator className="mt-5" />
            <Separator className="mb-5" /> */}
        <CarouselSlider images={portfolio?.imageCarousel!} />
      </div>
    </main>
  );
}
