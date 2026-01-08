import React from 'react';
import { ASSETS } from '../assets';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <section className="w-full px-4 md:px-10 py-12 md:py-20 lg:py-28 max-w-[1280px]">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6 flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-primary text-sm font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Vorta Presents
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter text-slate-900">
                GEOOSE
              </h1>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-500 tracking-tight">
                Intelligent Water Monitoring Ecosystem
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Developed by <strong>Vorta</strong>, GEOOSE is the industry's most advanced autonomous system for eco-conscious water-quality safeguarding.
              </p>
              <div className="pt-8 flex gap-8 justify-center lg:justify-start border-t border-black/5 mt-4">
                <div>
                  <p className="text-2xl font-bold font-display text-primary">SMART</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Sensing</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-display text-secondary">ECO</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Conscious</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-display text-slate-800">24/7</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Monitoring</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-[600px] relative">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full z-0"></div>
              <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden group flex items-center justify-center">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#008080 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="relative z-20 w-full h-full p-8 flex items-center justify-center">
                  <img 
                    src={ASSETS.robot.main} 
                    alt="GEOOSE Product by Vorta" 
                    className="max-w-[85%] max-h-[85%] object-contain drop-shadow-[0_20px_40px_rgba(0,128,128,0.2)] animate-float transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full bg-white border-y border-slate-100 py-16">
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-2 block">The Standard</span>
              <h3 className="text-3xl font-display font-black tracking-tighter uppercase">GEOOSE Characteristics</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: 'water_lux', title: 'Water Quality', desc: 'Sensing suite for real-time analysis.' },
              { icon: 'psychology', title: 'Intelligence', desc: 'Autonomous pathing and data logic.' },
              { icon: 'nature_people', title: 'Eco-Conscious', desc: 'Non-disruptive, biodegradable tech.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h4 className="font-display font-bold text-xl mb-2 tracking-tight">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About GEOOSE Section */}
      <section className="w-full px-4 md:px-10 py-28 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] group shadow-2xl bg-slate-100">
            <img 
              src={ASSETS.home.aboutSection} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="GEOOSE in action" 
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-4 text-primary font-bold uppercase tracking-[0.2em] text-xs">
              <span className="w-10 h-px bg-current opacity-30"></span> Why GEOOSE?
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-[0.9] tracking-tighter text-slate-900">
              The Intelligent <br/> 
              <span className="text-primary italic">Eco-Conscious</span> Solution.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Vorta built <strong>GEOOSE</strong> to bridge the gap between heavy industry and environmental preservation through advanced technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Smart', desc: 'Autonomous coordination.' },
                { title: 'Safe', desc: 'Zero-impact materials.' },
                { title: 'Swift', desc: 'Rapid data turnaround.' },
                { title: 'Sure', desc: 'Built-in sensor redundancy.' }
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] text-secondary font-bold">check</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-sm uppercase tracking-tighter">{point.title}</span>
                    <span className="text-xs text-slate-400">{point.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Features Grid */}
      <section className="w-full bg-slate-900 py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#92D050 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="px-4 md:px-10 max-w-[1280px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-secondary font-black tracking-[0.5em] uppercase text-xs mb-4 block">Product Ecosystem</span>
            <h2 className="text-4xl md:text-6xl font-display font-black mt-3 mb-6 text-white tracking-tighter">The GEOOSE Standard</h2>
            <p className="text-lg text-slate-400 font-light">Comprehensive monitoring units designed and manufactured by Vorta.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: 'settings_input_antenna', title: 'Precision Monitoring', desc: 'High-precision sensing suite for real-time water data collection.', img: ASSETS.home.monitoring },
              { icon: 'hub', title: 'Intelligent Hub', desc: 'The brain of the operation, managing autonomous fleet logic.', img: ASSETS.home.intelligent },
              { icon: 'solar_power', title: 'Eco-Charging', desc: 'Self-sustaining solar infrastructure for infinite uptime.', img: ASSETS.home.ecoConscious }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/10 group hover:border-secondary/50 transition-all duration-500">
                <div className="h-64 relative overflow-hidden bg-slate-800">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute top-6 left-6 size-12 rounded-2xl bg-secondary/20 backdrop-blur flex items-center justify-center text-secondary border border-secondary/20">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-display font-bold mb-3 text-white tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
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