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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-6 group">
              <img 
                src={ASSETS.logos.geoose} 
                alt="GEOOSE" 
                className="h-9 w-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.visibility = 'hidden' }}
              />
              <div className="h-6 w-px bg-slate-200"></div>
              <img 
                src={ASSETS.logos.vorta} 
                alt="Vorta" 
                className="h-8 w-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.visibility = 'hidden' }}
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold uppercase tracking-wide transition-all ${
                  location.pathname === item.path 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-slate-500 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 py-6 px-4 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-bold p-3 rounded-lg transition-colors ${
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