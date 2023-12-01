"use client"

import CarouselSlider from '@/components/portfolio/carousel_slider';
import PortfolioHeader from '@/components/portfolio/portfolio_header';
import { Separator } from '@radix-ui/react-separator';
import React from 'react'

export default function PortfolioPage() {
    return (
        <main className="max-w-[1800px] mx-auto">
            <p className="text-5xl font-bold px-6 pt-20">Portfolio</p>
          <div className="flex flex-col items-center justify-between py-4 px-6">
            <PortfolioHeader />
            <Separator className="mt-5" />
            <Separator className="mb-5" />
            {/* <CarouselSlider /> */}
          </div>
        </main>
      );
}
