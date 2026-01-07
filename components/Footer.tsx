import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-primary tracking-[0.3em] leading-none mb-1 uppercase">Company</span>
              <span className="font-display font-black text-3xl tracking-tight text-slate-900">VORTA</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Vorta is the entrepreneurial technology firm dedicated to sustainable engineering and advanced robotics.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-secondary tracking-[0.3em] leading-none mb-1 uppercase">Product</span>
              <span className="font-display font-black text-3xl tracking-tight text-primary">GEOOSE</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              GEOOSE is an intelligent water-quality monitoring ecosystem designed and built by Vorta.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:text-right">
            <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] leading-none mb-1 uppercase">Connect</span>
            <div className="space-y-2">
              <p className="text-sm font-bold text-slate-800">contact@vorta.solutions</p>
              <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase">© 2025 VORTA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;