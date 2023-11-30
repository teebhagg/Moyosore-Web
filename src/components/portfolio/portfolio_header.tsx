import React from "react";

export default function PortfolioHeader() {
  return (
    <div className="w-full">
      <div style={{ clipPath: "inset(50px)" }} className="w-full">
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
            // backgroundColor: "red",
          }}
          className="flex justify-center items-center"
        />
        {/* <div>
            <p className="text-lg">Subtitle</p>
            <p className="text-2xl">Title</p>
        </div> */}
      </div>
    </div>
  );
}
