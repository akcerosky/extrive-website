import { FlaskConical, Building2, HardHat, MapPin } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: FlaskConical,
      image: "/logos/science.png",
      title: "Science-Backed",
      description: "Tested using EMG sensors in real industry environments."
    },
    {
      icon: Building2,
      image: "/logos/industry.png",
      title: "Built with Industry",
      description: "Co-created with factory and airport teams."
    },
    {
      icon: HardHat,
      image: "/logos/workers.png",
      title: "Worker-First Design",
      description: "Comfort-first wearables workers want to keep on."
    },
    {
      icon: MapPin,
      image: "/logos/india.png",
      title: "Made in India",
      description: "Engineered and manufactured on Indian soil."
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated circuit pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-orange-500/30 rounded-full circuit-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-orange-500/20 rounded-full circuit-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-orange-500/40 rounded-full circuit-animation" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Extrive
            </span>
          </h2>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center animate-fade-in hover:bg-gray-800/70 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 floating"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 tech-glow">
                  <img src={feature.image} alt={feature.title + ' icon'} className="w-10 h-10 object-contain" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory scrollbar-hide">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center snap-center hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl mb-4">
                  <img src={feature.image} alt={feature.title + ' icon'} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating elements removed */}
    </div>

    </section>
  );
};

export default WhyChooseUsSection;
