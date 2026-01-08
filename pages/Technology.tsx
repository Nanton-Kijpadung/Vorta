
import React from 'react';

const Technology: React.FC = () => {
  return (
    <div className="bg-brandSurface transition-colors duration-300">
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Technology & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Innovation</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            GEOOSE combines robotics, biological treatment, and renewable energy. Discover the core technologies that power our water quality monitoring system.
          </p>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Features</span>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl mt-2">Unique Capabilities</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Three key innovations that define the GEOOSE platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'hub', title: 'Coordinated Movement', desc: 'Robotic units communicate to coordinate their paths. This ensures complete area coverage and efficient movement without needing a human operator.' },
              { icon: 'science', title: 'Pollutant Treatment', desc: 'Specialized capsules deploy to treat contaminants in the water. These eco-friendly units dissolve completely while targeting pollutants.' },
              { icon: 'solar_power', title: 'Solar Charging Hubs', desc: 'Autonomous docking stations with solar panels enable continuous 24/7 operation, automatic charging, and data uploading.' }
            ].map((cap, i) => (
              <div key={i} className="group relative p-8 bg-slate-50 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all border border-slate-100">
                <div className="w-14 h-14 inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">{cap.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{cap.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brandSurface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">System Components</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">The essential hardware components working together inside each unit.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-white rounded-full shadow-2xl flex items-center justify-center relative z-10 border-4 border-primary/20 p-8">
                <div className="absolute inset-4 border border-dashed border-slate-300 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="text-center">
                  <span className="material-symbols-outlined text-6xl text-primary mb-2">memory</span>
                  <h3 className="font-bold text-xl">Main Processor</h3>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Core System</p>
                </div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border border-secondary">
                  <span className="material-symbols-outlined text-secondary">wifi</span>
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-secondary">
                  <span className="material-symbols-outlined text-secondary">gps_fixed</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border border-secondary">
                  <span className="material-symbols-outlined text-secondary">explore</span>
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-secondary">
                  <span className="material-symbols-outlined text-secondary">settings_input_component</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Main Processor', icon: 'memory', desc: 'The central computer that processes sensor data and manages system decisions in real-time.' },
                  { title: 'Communication', icon: 'wifi', desc: 'Wireless module that allows units to connect with each other and the base station.' },
                  { title: 'GPS Tracking', icon: 'gps_fixed', desc: 'Provides accurate location data for every water sample collected.' },
                  { title: 'Stability Control', icon: 'explore', desc: 'Maintains the unit\'s balance in moving water and helps with precise steering.' }
                ].map((c, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-primary">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">{c.icon}</span> {c.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-2">{c.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                    <span className="material-symbols-outlined text-2xl">directions_boat</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">Navigation System</h3>
                    <p className="text-sm text-slate-600 mt-2">
                      A dedicated system that manages propulsion, steering, and obstacle avoidance. It ensures smooth movement while conserving battery power.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Assets</span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">Intellectual Property</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Securing our technology through a comprehensive strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'description', title: 'Patents', desc: 'Filings cover our unique features, including autonomous coordination and treatment deployment.', color: 'border-primary' },
              { icon: 'lock', title: 'Trade Secrets', desc: 'Our coordination algorithms and internal processing methods are kept strictly confidential.', color: 'border-secondary' },
              { icon: 'copyright', title: 'Copyright', desc: 'Protection extends to our software code, firmware, and user interface designs.', color: 'border-accent' },
              { icon: 'verified', title: 'Trademarks', desc: 'Brand identity is secured through registered trademarks for "GEOOSE" and "Vorta".', color: 'border-slate-400' }
            ].map((ip, idx) => (
              <div key={idx} className={`bg-slate-50 p-6 rounded-xl shadow-sm border-t-4 ${ip.color} hover:shadow-lg transition-shadow`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{ip.title}</h3>
                  <span className="material-symbols-outlined opacity-40">{ip.icon}</span>
                </div>
                <p className="text-sm text-slate-600">{ip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
