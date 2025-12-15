import React, { useState } from "react";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

type VideoTestimonial = {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
};

// --- Video Carousel ---
const defaultVideoTestimonials: VideoTestimonial[] = [
  {
    url: "/1.mp4",
    title: "Our Journey",
    description: "A glimpse into our journey from concept to real-world impact.",
    thumbnail: "/logo.svg",
  },
  {
    url: "/2.mp4",
    title: "BackEX in Logistics",
    description: "Logistics teams share their experience with BackEX.",
    thumbnail: "/logo.svg",
  },
  {
    url: "/3.mp4",
    title: "BackEX Pilot Testing",
    description: "110+ hours of pilot testing summarized.",
    thumbnail: "/logo.svg",
  },
];

const VideoTestimonialsCarousel: React.FC<{
  videos?: VideoTestimonial[];
  className?: string;
}> = ({ videos = defaultVideoTestimonials, className }) => {
  const [videoIndex, setVideoIndex] = useState(0);

  const handlePrev = () =>
    setVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const handleNext = () =>
    setVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <div className="relative w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 aspect-video flex items-center justify-center">
        <iframe
          key={videos[videoIndex].url}
          src={videos[videoIndex].url}
          title={videos[videoIndex].title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full rounded-2xl"
          style={{ minHeight: 320 }}
        />
        {/* Gradient overlay for effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none" />
        {/* Video info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
          <div className="flex items-center space-x-3">
            <PlayCircle className="w-6 h-6 text-orange-400" />
            <span className="text-white font-semibold text-lg">{videos[videoIndex].title}</span>
          </div>
          <p className="text-gray-200 text-sm mt-1">{videos[videoIndex].description}</p>
        </div>
      </div>
      {/* Video navigation arrows BELOW the video */}
      <div className="flex justify-center items-center gap-6 mt-4">
        <button
          className="rounded-full bg-secondary flex items-center justify-center shadow hover:bg-orange-100 transition h-10 w-10"
          onClick={handlePrev}
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6 text-orange-500" />
        </button>
        {/* Removed the dots indicator here */}
        <button
          className="rounded-full bg-secondary flex items-center justify-center shadow hover:bg-orange-100 transition h-10 w-10"
          onClick={handleNext}
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6 text-orange-500" />
        </button>
      </div>
    </div>
  );
};

// --- Animated Written Testimonials ---
interface AnimatedTestimonialsProps {
  testimonials?: Testimonial[];
  autoplay?: boolean;
  className?: string;
}

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials = [],
  autoplay = false,
  className,
}) => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  React.useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [active, autoplay]);

  const handleNext = () => {
    if (animating || testimonials.length === 0) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (animating || testimonials.length === 0) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 400);
  };

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return (
      <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
        <div className="text-center text-gray-400">No testimonials available.</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-12",
        className
      )}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Text Section */}
        <div className="flex flex-col justify-between py-4">
          <div
            key={active}
            className={cn(
              "transition-all duration-500",
              animating
                ? direction === "right"
                  ? "opacity-0 translate-x-10 blur-sm"
                  : "opacity-0 -translate-x-10 blur-sm"
                : "opacity-100 translate-x-0 blur-0"
            )}
            style={{
              transitionProperty: "opacity, transform, filter",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <p className="text-lg text-muted-foreground mt-8 italic leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block transition-all duration-300"
                  style={{
                    filter: animating ? "blur(10px)" : "blur(0px)",
                    opacity: animating ? 0 : 1,
                    transitionDelay: `${0.02 * idx}s`,
                  }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>
          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center group/button shadow hover:bg-orange-100 transition"
              aria-label="Previous testimonial"
              disabled={animating}
            >
              <ChevronLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center group/button shadow hover:bg-orange-100 transition"
              aria-label="Next testimonial"
              disabled={animating}
            >
              <ChevronRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200",
                  idx === active
                    ? "bg-orange-500 shadow-lg scale-110"
                    : "bg-orange-200"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Section ---
const defaultWrittenTestimonials: Testimonial[] = [
  {
    quote: "After using BackEX, my back pain has reduced drastically. I can work longer shifts without discomfort.",
    name: "Ravi Kumar",
    designation: "Ground Staff, Maruti",
    src: "/avatars/ravi.jpg",
  },
  {
    quote: "Our team’s complaints about shift breaks have halved. BackEX is a game changer for worker wellness.",
    name: "Priya Singh",
    designation: "Logistics Supervisor",
    src: "/avatars/priya.jpg",
  },
  {
    quote: "The pilot testing was thorough and the results speak for themselves. Highly recommend BackEX.",
    name: "Amit Patel",
    designation: "Pilot Tester",
    src: "/avatars/amit.jpg",
  },
];
const MarqueeTestimonials: React.FC<{
  testimonials?: Testimonial[];
  className?: string;
  speedMs?: number; // lower = faster
}> = ({ testimonials = [], className, speedMs = 30000 }) => {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const copyRef = React.useRef<HTMLDivElement | null>(null);
  const [copyWidth, setCopyWidth] = React.useState(0);

  // Measure the exact pixel width of one copy (cards + gaps)
  React.useEffect(() => {
    const measure = () => {
      if (copyRef.current) {
        setCopyWidth(copyRef.current.scrollWidth);
      }
    };
    measure();
    // Re-measure on resize so it stays seamless at any viewport width
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [testimonials]);

  if (!testimonials.length) {
    return (
      <div className={cn("max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-12", className)}>
        <div className="text-center text-gray-400">No testimonials available.</div>
      </div>
    );
  }

  return (
    <section className={cn("w-full", className)}>
      <style>{`
        @keyframes testimonials-marquee {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(calc(-1 * var(--shift, 0px)), 0, 0); }
        }
        .marquee-track {
          animation: testimonials-marquee var(--speed, 30000ms) linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0,0,0);
        }
        .marquee-paused:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-paused overflow-hidden px-0">
        {/* TRACK — no gap/padding/margin on the track itself */}
        <div
          ref={trackRef}
          className="marquee-track flex"
          style={
            {
              // exact pixel distance to move (width of one copy)
              ["--shift" as any]: `${copyWidth}px`,
              ["--speed" as any]: `${speedMs}ms`,
            } as React.CSSProperties
          }
        >
          {/* COPY #1 (all spacing lives here) */}
          <div ref={copyRef} className="flex gap-8 shrink-0 pr-8">
            {testimonials.map((t, i) => (
              <figure
                key={`a-${i}`}
                className="min-w-[360px] max-w-[360px] md:min-w-[420px] md:max-w-[420px] flex-shrink-0 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6 m-0"
              >
                <figcaption className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.designation}</p>
                </figcaption>
                <blockquote className="text-gray-600 italic leading-relaxed">
                  “{t.quote}”
                </blockquote>
              </figure>
            ))}
          </div>

          {/* COPY #2 — identical to COPY #1 */}
          <div className="flex gap-8 shrink-0">
            {testimonials.map((t, i) => (
              <figure
                key={`b-${i}`}
                className="min-w-[360px] max-w-[360px] md:min-w-[420px] md:max-w-[420px] flex-shrink-0 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6 m-0"
              >
                <figcaption className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.designation}</p>
                </figcaption>
                <blockquote className="text-gray-600 italic leading-relaxed">
                  “{t.quote}”
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const TestimonialsSection: React.FC<{
  videoTestimonials?: VideoTestimonial[];
  writtenTestimonials?: Testimonial[];
}> = ({
  videoTestimonials = defaultVideoTestimonials,
  writtenTestimonials = defaultWrittenTestimonials,
}) => (
  <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12 text-center">
        See It In <span className="text-orange-500">Action</span>
      </h2>
      {/* Video Testimonials Carousel */}
      <VideoTestimonialsCarousel videos={videoTestimonials} />
      {/* Written Testimonials Carousel */}
      <MarqueeTestimonials testimonials={writtenTestimonials} className="mt-16" />
    </div>
  </section>
);

export default TestimonialsSection;
