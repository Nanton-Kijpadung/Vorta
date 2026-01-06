
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tight text-primary">VORTA</span>
          </div>
          <div className="h-4 w-px bg-slate-300" />
          <div className="flex items-center gap-2 text-secondary">
            <div className="w-6 h-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C12 12.9543 20.9543 4 32 4C35.3137 4 38 6.68629 38 10V38C38 41.3137 35.3137 44 32 44H12V24Z" fill="currentColor" fillOpacity="0.2"></path>
                <path d="M4 24C4 12.9543 12.9543 4 24 4H32C35.3137 4 38 6.68629 38 10V24C38 35.0457 29.0457 44 18 44H10C6.68629 44 4 41.3137 4 38V24Z" stroke="currentColor" strokeWidth="4"></path>
                <circle cx="28" cy="16" fill="currentColor" r="3"></circle>
              </svg>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-800">GEOOSE</span>
          </div>
        </div>
        
        <p className="text-sm text-slate-500 max-w-sm text-center md:text-left">
          Intelligent and eco-conscious water-quality monitoring system for a cleaner planet.
        </p>

        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
          © 2024 Vorta Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
