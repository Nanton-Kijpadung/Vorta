
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ASSETS } from '../assets';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Technology & Innovation', path: '/technology' },
    { name: 'Impact & Benefits', path: '/impact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-4 group hover:opacity-80 transition-opacity">
              <img 
                src={ASSETS.logos.vorta} 
                alt="Vorta" 
                className="h-10 w-auto"
              />
              <div className="h-6 w-px bg-slate-200" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 text-secondary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 24C12 12.9543 20.9543 4 32 4C35.3137 4 38 6.68629 38 10V38C38 41.3137 35.3137 44 32 44H12V24Z" fill="currentColor" fillOpacity="0.2"></path>
                    <path d="M4 24C4 12.9543 12.9543 4 24 4H32C35.3137 4 38 6.68629 38 10V24C38 35.0457 29.0457 44 18 44H10C6.68629 44 4 41.3137 4 38V24Z" stroke="currentColor" strokeWidth="4"></path>
                    <circle cx="28" cy="16" fill="currentColor" r="3"></circle>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-primary">GEOOSE</span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path ? 'text-primary font-bold' : 'text-slate-600 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600"
          >
            <span className="material-symbols-outlined text-2xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 py-6 px-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold text-slate-700 hover:text-primary"
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
