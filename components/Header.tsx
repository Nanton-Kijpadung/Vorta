import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ASSETS } from '../assets';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Vorta', path: '/about' },
    { name: 'How GEOOSE Works', path: '/how-it-works' },
    { name: 'Technology', path: '/technology' },
    { name: 'Impact', path: '/impact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="flex items-center gap-3 md:gap-6">
                <img 
                  src={ASSETS.logos.geoose} 
                  alt="GEOOSE Logo" 
                  className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <div className="h-6 w-px bg-slate-200"></div>
                <img 
                  src={ASSETS.logos.vorta} 
                  alt="Vorta Logo" 
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all py-2 border-b-2 ${
                  location.pathname === item.path 
                  ? 'text-primary border-primary' 
                  : 'text-slate-500 border-transparent hover:text-primary hover:border-primary/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 py-6 px-4 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-xs font-bold p-4 rounded-xl tracking-widest uppercase transition-colors ${
                location.pathname === item.path 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;