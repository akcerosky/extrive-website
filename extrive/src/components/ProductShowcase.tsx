import { useState } from 'react';
import { ArrowRight, Zap, Shield, Cpu, Target, Bell, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProductShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      id: 1,
      name: "BackEX",
      status: "LIVE",
      statusColor: "bg-green-500",
      description: "A passive exosuit for lifting and bending tasks",
      microtext: "EMG-validated · 1,200+ hours piloted",
      stats: ["Back muscle strain ↓ 46%", "Comfort ↑ 40%"],
      cta: "Try It at Your Workplace",
      ctaAction: "primary",
      available: true,
      bg: "bg-orange-300/80"
    },
    {
      id: 2,
      name: "ShoulderEx",
      status: "PROTOTYPE",
      statusColor: "bg-yellow-500",
      description: "Shoulder support for overhead manufacturing work",
      microtext: "Welding · Assembly · Precision Tasks",
      stats: ["Overhead fatigue ↓ 35%", "Range comfort ↑ 40%"],
      cta: "Notify Me",
      ctaAction: "secondary",
      timeline: "Coming Q4 2025",
      available: false,
      bg: "bg-orange-200/80"
    },
    {
      id: 3,
      name: "LegEx",
      status: "R&D",
      statusColor: "bg-orange-500",
      description: "Designed for long-standing and walking roles",
      microtext: "Warehousing · Line Operation · Retail",
      stats: ["Leg fatigue ↓ 30%", "Standing endurance ↑ 45%"],
      cta: "Coming Soon",
      ctaAction: "disabled",
      timeline: "Coming Q1 2026",
      available: false,
      bg: "bg-orange-100/80"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Section 1: Title + Intro */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight tracking-tight">
              Explore Our
              <br />
              <span className="text-orange-500">
                Exosuit Product Line
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              We're building a next-gen line of wearable ergonomic tools for industrial workers—starting 
              with the back, and expanding to shoulders and legs.
            </p>
          </div>
        </div>

        {/* Tech Divider */}
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full -mt-1 mx-4"></div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
      </section>

      {/* Section 2: Futuristic Product Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 bg-white ${product.bg} border-0 shadow-lg hover:shadow-2xl overflow-hidden`}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === product.id ? 'translateY(-10px) rotateX(5deg)' : 'translateY(0) rotateX(0)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="absolute top-4 right-4 z-10">
                  <Badge className={`${product.statusColor} text-white font-semibold px-3 py-1 text-xs tracking-wide`}>
                    {product.status}
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </CardTitle>
                  {product.timeline && (
                    <p className="text-sm text-gray-500 font-medium">{product.timeline}</p>
                  )}
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  <p className="text-xs text-gray-500 font-mono bg-white/50 rounded px-2 py-1 inline-block">
                    {product.microtext}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center text-sm font-semibold text-gray-700">
                        <Target className="h-4 w-4 mr-2 text-orange-500" />
                        {stat}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-6 transition-all duration-300 ${
                      product.ctaAction === 'primary'
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                        : product.ctaAction === 'secondary'
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300'
                        : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={product.ctaAction === 'disabled'}
                    onClick={
                      product.name === 'Kanglei BackEX'
                        ? scrollToDemo
                        : undefined
                    }
                  >
                    {product.ctaAction === 'secondary' ? <Bell className="h-4 w-4 mr-2" /> : 
                     product.ctaAction === 'disabled' ? <Clock className="h-4 w-4 mr-2" /> : 
                     <ArrowRight className="h-4 w-4 mr-2" />}
                    {product.cta}
                  </Button>
                </CardContent>

                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center py-10">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <Cpu className="h-5 w-5 text-orange-500 -mt-2 mx-4" />
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>

      {/* Section 3:BackEX Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <img
                  src="/backex.png"             
                  alt="BackEX product"
                  className="w-full max-h-[560px] rounded-xl ring-1 ring-black/5 object-contain bg-white"
                  loading="eager"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-black mb-6 leading-tight">
                  BackEX: 
                  <span className="text-orange-500 block">The Game-Changer</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A lightweight, breathable, fabric-based passive exosuit engineered to reduce 
                  back strain in physically intensive jobs.
                </p>
              </div>

              <div className="space-y-4">
                {[ 
                  { icon: Zap, text: "0 motors. 0 batteries. 100% effective design" },
                  { icon: Target, text: "EMG-validated reduction in lower back muscle activation" },
                  { icon: Shield, text: "Piloted by Imphal Airport ground crew" },
                  { icon: Cpu, text: "Custom fit. Industrial durability. Human-first ergonomics." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
                      <feature.icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">{feature.text}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToDemo}
                className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request a Pilot Deployment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Floating CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-black to-gray-800 border-0 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-600/20"></div>
            <CardContent className="relative py-12 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to bring ergonomic innovation to your team?
              </h3>
              <Button
                onClick={scrollToDemo}
                className="bg-orange-500 text-white px-8 py-4 text-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Talk to Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;
