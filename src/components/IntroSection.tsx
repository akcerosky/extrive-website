const IntroSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center animate-fade-in">
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light">
            We're building India's first industrial exosuits—lightweight, comfortable, and scientifically validated. 
            Our first product, <span className="font-semibold text-orange-500">BackEX</span>, is already helping workers across 
            airports, factories, and warehouses move better and feel stronger.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;