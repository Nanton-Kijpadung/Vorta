
import React from 'react';
import { ASSETS } from '../assets';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <section className="w-full px-4 md:px-10 py-12 md:py-20 lg:py-28 max-w-[1280px]">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6 flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Vorta
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                Intelligent Water <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Quality Monitoring</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                GEOOSE is an intelligent and eco-conscious water-quality monitoring system offered by Vorta.
              </p>
              <div className="pt-8 flex gap-8 justify-center lg:justify-start border-t border-black/5 mt-4">
                <div>
                  <p className="text-2xl font-bold font-display text-primary">Intelligent</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">System</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-display text-primary">Eco</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Conscious</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-display text-primary">Water</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Quality</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-[600px] relative">
              <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full z-0"></div>
              <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-white/20 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#008080 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    alt="Scientific water testing" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-60" 
                    src={ASSETS.home.hero} 
                  />
                  <div className="absolute z-20 bg-white/90 backdrop-blur px-6 py-3 rounded-lg border border-primary/30 shadow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-4xl text-secondary animate-bounce">view_in_ar</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">System Preview</span>
                  </div>
                </div>
                <div className="absolute top-8 right-8 bg-white/80 backdrop-blur p-3 rounded-lg border border-primary/20 shadow-lg text-xs font-mono">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="opacity-70">pH Level</span>
                  </div>
                  <span className="text-lg font-bold text-primary">7.4</span>
                </div>
                <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur p-3 rounded-lg border border-primary/20 shadow-lg text-xs font-mono">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="opacity-70">Turbidity</span>
                  </div>
                  <span className="text-lg font-bold text-primary">1.2 NTU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white border-y border-black/5 py-10">
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <h3 className="text-2xl font-bold tracking-tight">System Overview</h3>
            <p className="text-slate-500 text-sm max-w-md mt-2 md:mt-0">Key characteristics of the GEOOSE system.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'water_lux', title: 'Water Quality', desc: 'Precise monitoring capabilities.' },
              { icon: 'psychology', title: 'Intelligent', desc: 'Smart system design.' },
              { icon: 'nature_people', title: 'Eco-Conscious', desc: 'Environmentally friendly operation.' },
              { icon: 'verified', title: 'Vorta', desc: 'An entrepreneurial company solution.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-6 rounded-xl bg-slate-50 border border-transparent hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-10 py-20 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xl">
            <img 
              src={ASSETS.home.aboutSection} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Water quality" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-sm font-bold text-secondary uppercase mb-2">Vorta</p>
                <p className="text-xl font-medium">Intelligent Water-Quality Monitoring.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
              <span className="w-6 h-px bg-current"></span> About GEOOSE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">An intelligent and <span className="relative inline-block text-primary">eco-conscious<span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/30 -z-10 skew-x-12"></span></span> system.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Vorta is an entrepreneurial company offering GEOOSE. This system is designed for intelligent and eco-conscious water-quality monitoring.
            </p>
            <ul className="flex flex-col gap-4 mt-4">
              {[
                { title: 'Intelligent', desc: 'Advanced monitoring capabilities.' },
                { title: 'Eco-Conscious', desc: 'Designed with the environment in mind.' },
                { title: 'Water Quality', desc: 'Reliable data for water safeguarding.' }
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-lg">{point.title}</h4>
                    <p className="text-sm text-slate-500">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 z-0 pointer-events-none"></div>
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Features</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">The GEOOSE System</h2>
            <p className="text-lg text-slate-500">GEOOSE is an intelligent and eco-conscious water-quality monitoring system.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'extension', title: 'Monitoring', desc: 'System designed for water-quality data collection.', img: ASSETS.home.monitoring },
              { icon: 'hub', title: 'Intelligent', desc: 'Advanced features for efficient operation.', img: ASSETS.home.intelligent },
              { icon: 'solar_power', title: 'Eco-Conscious', desc: 'Environmentally responsible design.', img: ASSETS.home.ecoConscious }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white rounded-2xl overflow-hidden border border-black/5 shadow-lg flex flex-col hover:shadow-xl transition-all ${idx === 1 ? 'md:-translate-y-4' : ''}`}>
                <div className="h-48 relative group overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-white drop-shadow-lg">{item.icon}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-slate-500 flex-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
