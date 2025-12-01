import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Battery, Shield, Zap } from 'lucide-react';

const ProductSection = () => {
  return (
    <section id="product" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight tracking-tight">
            Explore Our
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Product Line
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Innovative exosuit technology for modern workplaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* BackEX */}
          <Card className="group hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Shield className="h-6 w-6 text-orange-500" />
                <Badge className="bg-green-500 text-white text-xs">LIVE</Badge>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">BackEX</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Passive exosuit for lifting and bending tasks
              </p>
              <Button className="p-0 text-orange-600 hover:text-orange-700 font-medium bg-transparent hover:bg-transparent">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* ShoulderEx */}
          <Card className="group hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Zap className="h-6 w-6 text-orange-500" />
                <Badge className="bg-yellow-500 text-white text-xs">Q4 2025</Badge>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">ShoulderEx</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Support for overhead manufacturing work
              </p>
              <Button className="p-0 text-orange-600 hover:text-orange-700 font-medium bg-transparent hover:bg-transparent">
                Notify Me <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* LegEx */}
          <Card className="group hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Battery className="h-6 w-6 text-orange-500" />
                <Badge className="bg-orange-500 text-white text-xs">Q1 2026</Badge>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">LegEx</h3>
              <p className="text-gray-600 mb-4 text-sm">
                For long-standing and walking roles
              </p>
              <Button className="p-0 text-orange-600 hover:text-orange-700 font-medium bg-transparent hover:bg-transparent">
                Coming Soon <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
