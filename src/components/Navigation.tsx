import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false); // md breakpoint
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg'
          : 'bg-white/60 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-1 ml-3">
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Extrive Innovations
            </span>
          </Link>

          {/* Desktop nav (UNCHANGED) */}
          <div className="hidden md:flex space-x-8">
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
          </div>

          {/* Mobile hamburger (ONLY mobile) */}
          <div className="md:hidden mr-2 relative">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-orange-500 hover:bg-orange-50 transition"
            >
              {/* Hamburger icon */}
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1">
                <span className="block h-0.5 w-6 bg-current" />
                <span className="block h-0.5 w-6 bg-current" />
                <span className="block h-0.5 w-6 bg-current" />
              </div>
            </button>

            {/* Dropdown panel */}
            {mobileOpen && (
              <>
                {/* Backdrop (tap outside to close) */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setMobileOpen(false)}
                />

                <div className="absolute right-0 mt-2 w-56 z-50 rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                  <Link
                    to="/products"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-500 font-medium transition"
                  >
                    Products
                  </Link>
                  <Link
                    to="/roi-calculator"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-500 font-medium transition"
                  >
                    ROI Calculator
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-500 font-medium transition"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-500 font-medium transition"
                  >
                    About
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
