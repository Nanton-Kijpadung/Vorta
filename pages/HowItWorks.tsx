import React from 'react';
import { ASSETS } from '../assets';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-brandSurface flex flex-col min-h-screen overflow-x-hidden">
      <section className="relative w-full py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-secondary font-display font-bold tracking-widest uppercase text-sm">Product Overview</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-slate-900">
                The GEOOSE Ecosystem
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-light max-w-lg">
                An intelligent water-quality monitoring system featuring autonomous robots, a central hub, and specialized treatment capsules.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
              <img 
                src={ASSETS.howItWorks.ecosystem} 
                className="absolute inset-0 w-full h-full object-contain p-4"
                alt="GEOOSE Ecosystem Overview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-slate-50 border border-primary/10 flex items-center justify-center p-8">
                <img 
                  src={ASSETS.howItWorks.surveyor} 
                  className="max-w-full max-h-full object-contain drop-shadow-xl"
                  alt="The Surveyor Robot"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined">radar</span>
                <span className="uppercase tracking-widest text-sm">DETECTION & ANALYSIS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
                The Surveyor Robot
              </h2>
              <p className="text-lg text-slate-600">
                The Surveyor is designed to navigate and map water bodies autonomously. It identifies areas needing attention by creating detailed health maps of the environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="material-symbols-outlined text-secondary text-3xl">explore</span>
                  <h3 className="font-bold text-lg">Autonomous Navigation</h3>
                  <p className="text-sm opacity-70">Moves independently to cover perimeters.</p>
                </div>
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="material-symbols-outlined text-secondary text-3xl">sensors</span>
                  <h3 className="font-bold text-lg">Analysis</h3>
                  <p className="text-sm opacity-70">Collects data to determine conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandSurface border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined">cleaning_services</span>
                <span className="uppercase tracking-widest text-sm">THE INTERVENTION</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
                The Optimizer Robot
              </h2>
              <p className="text-lg text-slate-600">
                Following the Surveyor's analysis, the Optimizer robot is deployed to specific coordinates to deliver targeted treatments.
              </p>
              <ul className="space-y-4 mt-4">
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-sm">science</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Treatment Capsules</h4>
                    <p className="text-sm text-slate-500">Utilizes biodegradable gel beads for targeted application.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 order-2">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-white border border-primary/10 shadow-xl flex items-center justify-center p-8">
                <img 
                  src={ASSETS.howItWorks.optimizer} 
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  alt="The Optimizer Robot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#92D050 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        <div className="mx-auto max-w-[960px] px-4 sm:px-10 relative z-10 text-center mb-16">
          <span className="px-3 py-1 rounded-full border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest bg-secondary/10">Core Infrastructure</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-6 mb-6">The Hub</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            The central station for the GEOOSE ecosystem, coordinating the autonomous fleet.
          </p>
        </div>
        <div className="mx-auto max-w-[960px] px-4 sm:px-10">
          <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="absolute -top-6 left-8 bg-primary text-white p-3 rounded-xl shadow-lg">
              <span className="material-symbols-outlined text-2xl block">ev_station</span>
            </div>
            <div className="md:flex md:gap-8 items-center">
              <div className="flex-1">
                <h3 className="mt-4 md:mt-0 text-2xl font-bold font-display">Docking Station</h3>
                <p className="mt-4 text-slate-400 mb-6">The Hub serves as a central docking point to recharge the robots and reload supplies.</p>
              </div>
              <div className="h-64 md:w-1/2 w-full bg-slate-100 rounded-lg relative overflow-hidden flex items-center justify-center border border-white/5 flex-shrink-0">
                <img 
                  src={ASSETS.howItWorks.dockingStation} 
                  className="max-w-[80%] max-h-[80%] object-contain"
                  alt="Docking Station"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">Service Process</h2>
            <p className="mt-4 text-slate-500">The workflow of the GEOOSE system.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { id: 1, title: 'Request', desc: 'Client provides details about the water area and quality concerns.' },
                { id: 2, title: 'Deployment', desc: 'The Hub and Robot fleet are deployed to the location.' },
                { id: 3, title: 'Monitoring', desc: 'Clients can view data and system status.' },
                { id: 4, title: 'Retrieval', desc: 'System retrieval for maintenance and reloading.' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="size-16 rounded-2xl bg-white border-2 border-primary text-primary flex items-center justify-center text-2xl font-bold shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;