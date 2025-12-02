import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg'
          : 'bg-white/60 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* allow height to grow on small screens */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 ml-1 sm:ml-3">
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Extrive Innovations
            </span>
          </Link>

          {/* Menu – visible on ALL screen sizes, auto-wraps on small */}
          <div className="flex flex-wrap justify-start sm:justify-end gap-x-4 gap-y-2 text-sm sm:text-base">
            <Link
              to="/products"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="/roi-calculator"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              ROI Calculator
            </Link>
            {/* <Link 
              to="/gallery"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link 
              to="/login"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              Login
            </Link> */}
            <Link
              to="/blog"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-slate-600 hover:text-orange-500 transition-colors font-medium"
            >
              About
            </Link>
            {/* {isHomePage ? (
              <button 
                onClick={() => scrollToSection('demo')}
                className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 font-medium"
              >
                Request Demo
              </button>
            ) : (
              <Link 
                to="/request-demo"
                className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 font-medium"
              >
                Request Demo
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
