import React from 'react';
import { ASSETS } from '../assets';

const About: React.FC = () => {
  return (
    <div className="bg-brandSurface">
      <div className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-display mb-8 leading-tight">
            Advancing Water Intelligence <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-secondary text-3xl md:text-6xl block mt-2">through our product: GEOOSE</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed font-light">
            We are an entrepreneurial technology leader. We design, build, and deploy <strong>GEOOSE</strong>—the industry's most sophisticated water-quality monitoring ecosystem.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-10 rounded-2xl blur-lg transform -rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-video">
                <img 
                  alt="Vorta Corporate Team" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" 
                  src={ASSETS.about.teamCollab} 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg font-display uppercase tracking-widest">Vorta Corporate</p>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-6 uppercase tracking-tighter">About Vorta</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p><strong>Vorta</strong> is the visionary company behind the innovation. We are committed to global environmental stewardship through high-tech engineering and robotics.</p>
                <p>Our flagship product, <strong>GEOOSE</strong>, represents the summit of our research into autonomous water monitoring and sustainable ecosystem restoration.</p>
                <p>By integrating Vorta's intelligent monitoring tools, industries can now protect their local environments with data-driven precision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-4 tracking-tighter uppercase">Our Member</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-20 font-light">
            The visionary executive leadership at Vorta driving the GEOOSE mission.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {[
              { name: 'Wachirawit Temwiriyakun', role: 'Chief Executive Officer', img: ASSETS.about.member1, color: 'from-primary to-teal-600' },
              { name: 'Kantapat Damsrisawat', role: 'Chief Research Officer', img: ASSETS.about.member2, color: 'from-secondary to-green-500' },
              { name: 'Nanton Kijpadung', role: 'Chief Technology Officer', img: ASSETS.about.member3, color: 'from-accent to-yellow-500' },
              { name: 'Pannawit Usaha', role: 'Chief Marketing Officer', img: ASSETS.about.member4, color: 'from-primary to-blue-600' },
              { name: 'Teetawat Thipparos', role: 'Chief Financial Officer', img: ASSETS.about.member5, color: 'from-secondary to-teal-400' }
            ].map((member, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className={`relative w-40 h-40 rounded-3xl p-0.5 bg-gradient-to-tr ${member.color} mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 overflow-hidden`}>
                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-white">
                    <img 
                      src={member.img} 
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-all duration-700" 
                      alt={member.name}
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&color=fff&size=200` }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display leading-tight text-center px-4">{member.name}</h3>
                <div className="mt-3 inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;