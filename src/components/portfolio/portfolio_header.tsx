import { motion } from "framer-motion";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function PortfolioHeader(props: Props) {
  const { title, subtitle } = props;
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Video Container with 16:9 aspect ratio */}
      <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl">
        <iframe
          id="youtube-4333"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Player for website loop"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/rjVr-zlfhGg?autoplay=1&controls=0&loop=1&rel=0&enablejsapi=1&widgetid=1&mute=1&playsinline=1&playlist=rjVr-zlfhGg"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: "calc(100% + 200px)",
            height: "calc(100% + 200px)",
            margin: "-50px",
            transform: "scale(1.1)",
          }}
          loading="lazy"
        />

        {/* Overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex justify-center items-center p-6">
          <div className="text-white text-center space-y-4 max-w-4xl">
            <motion.p
              className="text-lg md:text-2xl lg:text-3xl font-medium opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              {title}
            </motion.p>
            <motion.p
              className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              {subtitle}
            </motion.p>
          </div>
        </div>

        {/* Play button overlay (optional - for better UX) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Optional: Video controls info */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Video autoplays with sound muted for better user experience
        </p>
      </div>
    </div>
  );
}
