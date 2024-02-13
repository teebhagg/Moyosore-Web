import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function PortfolioHeader(props: Props) {
  const { title, subtitle } = props;
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden">
      <div className="relative w-full h-full">
        <iframe
          id="youtube-4333"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Player for website loop"
          width="100%"
          // height="700px"
          src="https://www.youtube.com/embed/rjVr-zlfhGg?autoplay=1&controls=0&loop=1&rel=0&enablejsapi=1&widgetid=1"
          tabIndex={-1}
          style={{
            display: "block",
            width: "calc(100% + 100px)", // Add the sum of left and right margins (100px each)
            margin: "-50px", // Set negative margin to crop by 100px on all edges
            height:"100%",
          }}
        >
          • #document
        </iframe>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          className="flex justify-center items-center"
        >
          <div className="text-white text-center space-y-5">
            <p className="text-lg md:text-2xl">{title}</p>
            <p className="text-3xl md:text-5xl font-bold">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
