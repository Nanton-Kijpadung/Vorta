
import React from 'react';
import { ASSETS } from '../assets';

const About: React.FC = () => {
  return (
    <div className="bg-brandSurface">
      <div className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-teal-800 text-sm font-bold tracking-wide mb-6">
            VORTA & GEOOSE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-display mb-8 leading-tight">
            Intelligent & Eco-Conscious <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-secondary">Water-Quality Monitoring</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
            Vorta is an entrepreneurial company offering GEOOSE, an intelligent and eco-conscious water-quality monitoring system.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-2xl blur-lg transform -rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  alt="Team collaborating" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" 
                  src={ASSETS.about.teamCollab} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg font-display">Vorta Innovation</p>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-6">About Us / Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>Vorta is an entrepreneurial company. We are dedicated to providing the GEOOSE system.</p>
                <p>GEOOSE is an intelligent water-quality monitoring system. It is designed to be eco-conscious.</p>
                <p>Our focus is strictly on water-quality monitoring using the GEOOSE system.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: 'eco', label: 'Eco-Conscious', color: 'text-secondary' },
                  { icon: 'psychology', label: 'Intelligent', color: 'text-primary' },
                  { icon: 'water', label: 'Water Quality', color: 'text-accent' }
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className={`material-icons ${tag.color}`}>{tag.icon}</span>
                    <span className="font-semibold text-slate-800 text-sm">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4">Our Purpose</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-primary group">
              <div className="h-14 w-14 bg-primary/10 group-hover:bg-primary group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <span className="material-icons text-primary group-hover:text-white text-3xl">flag</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">To offer GEOOSE, an intelligent and eco-conscious water-quality monitoring system.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-secondary group">
              <div className="h-14 w-14 bg-secondary/10 group-hover:bg-secondary group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <span className="material-icons text-secondary group-hover:text-white text-3xl">visibility</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">To be an entrepreneurial company providing intelligent water-quality monitoring.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-accent group">
              <div className="h-14 w-14 bg-accent/10 group-hover:bg-accent group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                <span className="material-icons text-yellow-600 group-hover:text-white text-3xl">favorite</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-3">Our Values</h3>
              <ul className="space-y-3">
                {['Entrepreneurial Spirit', 'Intelligence', 'Eco-Consciousness'].map((v, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4">Our Team</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-16">
            The entrepreneurial team behind Vorta and GEOOSE.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {[
              { name: 'Sarah Jenkins', role: 'Project Lead', img: ASSETS.about.sarah, color: 'from-primary to-secondary' },
              { name: 'David Chen', role: 'Lead Engineer', img: ASSETS.about.david, color: 'from-secondary to-accent' },
              { name: 'Maria Rodriguez', role: 'Data Scientist', img: ASSETS.about.maria, color: 'from-accent to-primary' },
              { name: 'James Wilson', role: 'Hardware', img: ASSETS.about.james, color: 'from-primary to-teal-600' },
              { name: 'Emily Zhang', role: 'Operations', img: ASSETS.about.emily, color: 'from-secondary to-green-400' }
            ].map((member, i) => (
              <div key={i} className="group relative">
                <div className={`relative w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-tr ${member.color} mb-6 shadow-lg group-hover:shadow-primary/40 transition-shadow`}>
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                    <img src={member.img} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" alt={member.name} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-1 uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
