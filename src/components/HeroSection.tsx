import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector('#intro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-blue-200/30 rounded-full floating-element blur-xl"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-orange-200/30 rounded-full floating-element blur-xl"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-orange-100/40 to-blue-100/40 rounded-full floating-element blur-2xl"
          style={{ animationDelay: '4s' }}
        ></div>

        {/* Holographic Panels */}
        <div className="absolute top-0 right-0 w-96 h-96 holographic-panel blur-3xl opacity-40 mesh-background"></div>
        <div
          className="absolute bottom-0 left-0 w-80 h-80 holographic-panel blur-3xl opacity-30 mesh-background"
          style={{ animationDelay: '3s' }}
        ></div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f97316" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="animate-pulse" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Main Headline */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1
                className="
                  font-bold mb-8 tracking-tight font-space
                  text-[clamp(2.4rem,9.5vw,3.6rem)] leading-[1.0]
                  sm:text-7xl sm:leading-[1.05]
                  lg:text-8xl lg:leading-[1.05]
                  break-words
                "
              >
                <span className="block text-slate-900 mb-2">
                  Empowering Motion.
                </span>
                <span className="block gradient-text whitespace-normal break-words md:typewriter-text">
                  Enhancing Lives.
                </span>
              </h1>
            </div>

            {/* Subtext with delayed animation */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-[clamp(1rem,4.5vw,1.25rem)] sm:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium tracking-wide">
                Empowering industrial workers with wearable tech that reduces fatigue,
                prevents injuries, and boosts productivity.
              </p>
            </div>

            {/* CTA Button with glow effect */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button
                onClick={scrollToDemo}
                className="group relative inline-flex items-center px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-orange-400 via-black to-orange-500 text-white shadow-lg hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 mr-2">Request Pilot Access</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Glass Panel with Stats */}
            <div
              className={`mt-16 transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="glass-panel rounded-3xl p-8 max-w-4xl mx-auto backdrop-blur-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="floating-element">
                    <div className="text-3xl font-bold text-slate-900 mb-2 font-space">46%</div>
                    <div className="text-slate-600 font-medium">Back Muscle Strain Reduction</div>
                  </div>
                  <div className="floating-element" style={{ animationDelay: '1s' }}>
                    <div className="text-3xl font-bold text-slate-900 mb-2 font-space">40%</div>
                    <div className="text-slate-600 font-medium">Increase In Lifting Comfort</div>
                  </div>
                  <div className="floating-element" style={{ animationDelay: '2s' }}>
                    <div className="text-3xl font-bold text-slate-900 mb-2 font-space">12%</div>
                    <div className="text-slate-600 font-medium">Increase In Productivity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="scroll-indicator p-3 rounded-full glass-panel hover:bg-white/20 transition-colors group"
        >
          <ChevronDown className="h-6 w-6 text-slate-600 group-hover:text-slate-900" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
