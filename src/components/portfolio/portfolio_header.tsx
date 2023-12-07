import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function PortfolioHeader(props: Props) {
  const { title, subtitle } = props;
  return (
    <div className="w-full aspect-square">
      <div style={{ display: "block", clipPath: "inset(100px)" }} className="w-full">
        <iframe
          id="youtube-4333"
          frameBorder="O"
          allowFullScreen
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Player for website loop"
          width="100%"
          height="700px"
          src="https://www.youtube.com/embed/rjVr-zlfhGg?autoplay=1&controls=0&rel=0&….kb=1&origin=https%3A%2F%2Fmoyosore.mypixieset.com&enablejsapi=1&widgetid=1"
          tabIndex={-1}>
          • #document
        </iframe>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.8,
          }}
          className="flex justify-center items-center"
        >
        <div className="text-white text-center">
            <p className="text-lg">{subtitle}</p>
            <p className="text-2xl md:text-7xl font-bold">{title}</p>
        </div>
        </div>
      </div>
    </div>
  );
}
