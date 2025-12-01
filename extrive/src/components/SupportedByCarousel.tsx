import React from "react";

// Example logo URLs (replace with your own or import SVGs)
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
    <section className="relative py-16 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      {/* Decorative blurred glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 opacity-30 blur-3xl pointer-events-none z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-white tracking-tight">
          <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
            Supported By
          </span>
        </h2>
        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-12 animate-logo-scroll will-change-transform"
              style={{
                animation: "logo-scroll 28s linear infinite",
              }}
            >
              {allLogos.map((logo, idx) => (
                <div
  key={idx}
  className="flex-shrink-0 flex items-center justify-center w-40 h-28 rounded-xl bg-gradient-to-br from-white/10 via-black/10 to-orange-100/10 shadow-md hover:scale-105 transition-transform duration-300"
  style={{
    boxShadow:
      "0 2px 16px 0 rgba(255,145,0,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.08)",
  }}
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
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/70 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/70 to-transparent z-20" />
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