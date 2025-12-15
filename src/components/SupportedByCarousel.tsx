import React from "react";

// Example logo URLs
const logos = [
  "/logos/iit-h.PNG",
  "/logos/boeing.png",
  "/logos/aic-mahindra.png",
  "/logos/nidhi.PNG",
  "/logos/maruti.PNG",
];

const SupportedByCarousel: React.FC = () => {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Decorative blurred glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 opacity-30 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
            Supported By
          </span>
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div className="flex gap-12 logo-scroll-track will-change-transform">
            <style>
  {`
    .logo-scroll-track {
      animation: logo-scroll 15s linear infinite;
    }

    /* Mobile: make it faster */
    @media (max-width: 768px) {
      .logo-scroll-track {
        animation-duration: 10s;
      }
    }

    @keyframes logo-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}
</style>

          >
            {allLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center w-40 h-28 bg-transparent hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo}
                  alt={`Supported logo ${idx + 1}`}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes for infinite scroll */}
      <style>
        {`
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default SupportedByCarousel;
