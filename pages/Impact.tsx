
import React from 'react';
import { ASSETS } from '../assets';

const Impact: React.FC = () => {
  return (
    <div className="bg-brandSurface">
      <div className="relative overflow-hidden bg-brandSurface pt-16 pb-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Driving Sustainable <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Water Stewardship</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Solving global water challenges with affordable, smart technology. GEOOSE helps industries run better while protecting our planet's most vital resource.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 text-center group">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-primary text-3xl">trending_down</span>
              </div>
              <h3 className="text-5xl font-display font-bold text-primary mb-2">70%</h3>
              <p className="text-lg font-semibold text-slate-800 mb-2">Lower Operating Costs</p>
              <p className="text-sm text-slate-500">Achieved by replacing manual testing with automatic, continuous monitoring.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 text-center group">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-secondary text-3xl">science</span>
              </div>
              <h3 className="text-5xl font-display font-bold text-secondary mb-2">60%</h3>
              <p className="text-lg font-semibold text-slate-800 mb-2">Reduction in Chemical Use</p>
              <p className="text-sm text-slate-500">Smart dosing reduces waste, lowering costs and helping the environment.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 text-center group">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-lime-600 text-3xl">water_drop</span>
              </div>
              <h3 className="text-5xl font-display font-bold text-lime-600 mb-2">40%</h3>
              <p className="text-lg font-semibold text-slate-800 mb-2">Freshwater Restoration Potential</p>
              <p className="text-sm text-slate-500">Our technology helps clean up contaminated freshwater sources worldwide.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-brandSurface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent z-10"></div>
                <img 
                  src={ASSETS.impact.pollutedWater} 
                  className="w-full h-full object-cover" 
                  alt="Polluted water" 
                />
                <div className="absolute bottom-6 left-6 z-20 text-white max-w-xs">
                  <p className="text-sm font-semibold opacity-90 border-l-2 border-secondary pl-3">Manual sampling is slow, expensive, and reactive.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Critical Challenges</h2>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">Old Methods Are Not Enough</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Current ways of checking water quality are inefficient. They rely on costly manual sampling or separate tools that don't share data. This slow approach leads to:
              </p>
              <ul className="space-y-4">
                {[
                  { icon: 'access_time', title: 'Slow Response Time', desc: 'It takes days or weeks to find pollution, often after damage is done.', color: 'text-red-500 bg-red-50' },
                  { icon: 'payments', title: 'High Costs', desc: 'High lab fees and lots of manual work needed for regular checks.', color: 'text-red-500 bg-red-50' },
                  { icon: 'link_off', title: 'Incomplete Data', desc: 'Separate sensors don\'t give a full picture of water health.', color: 'text-red-500 bg-red-50' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start p-4 rounded-lg bg-white border border-slate-100 shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <span className={`material-icons ${item.color} p-1 rounded-full text-xl`}>{item.icon}</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-bold text-slate-800">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Our Vision for Global Impact</h2>
          <p className="text-lg text-teal-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our goal is a sustainable water future. We want to help clean 40% of the world's dirty freshwater by giving industries the tools to protect the environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <span className="block text-4xl font-bold mb-2">12+</span>
              <span className="text-sm text-teal-100">Target Countries</span>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <span className="block text-4xl font-bold mb-2">500M</span>
              <span className="text-sm text-teal-100">Liters Monitored Daily</span>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <span className="block text-4xl font-bold mb-2">24/7</span>
              <span className="text-sm text-teal-100">Automatic Operation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
