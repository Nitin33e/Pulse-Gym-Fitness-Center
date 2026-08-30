import React from 'react';
import { Dumbbell, Activity, Flame, Users, CheckCircle2, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import floorImg from '../assets/images/pulse_gym_floor_1788065001621.jpg';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      desc: 'Progressive resistance training with quality free weights and dedicated barbell racks to build lasting physical power.',
    },
    {
      icon: Activity,
      title: 'Fitness Improvement',
      desc: 'Systematic endurance, agility, and functional workouts to enhance overall physical performance and daily stamina.',
    },
    {
      icon: Flame,
      title: 'Weight-Loss Support',
      desc: 'Structured workout guidance and sustainable activity planning targeted to help members achieve meaningful body transformation.',
    },
    {
      icon: CheckCircle2,
      title: 'Fitness Assessment',
      desc: 'Initial evaluations to understand baseline physical abilities, flexibility, and strengths before setting workout milestones.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0C0E13] relative overflow-hidden border-t border-[#1C202A]">
      {/* Glow highlight */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#EAB308]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>About Pulse Gym</span>
          </div>
          <h2
            id="about-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            A Dedicated Fitness Destination In{' '}
            <span className="text-[#EAB308]">Jagdalpur</span>
          </h2>
          <p
            id="about-description"
            className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed"
          >
            Located in Jaiswal Colony, <strong className="text-white">Pulse Gym & Fitness Center</strong> is
            established to provide residents of Jagdalpur with a disciplined, motivating, and fully equipped
            workout space. Whether you are stepping into a gym for the first time or looking to elevate your heavy lifts,
            our focus remains steady on consistency, proper form, and real progress.
          </p>
        </div>

        {/* Content Layout: Visual Showcase + Core Focus Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Gym Floor Visual Card with verified credibility tag */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[#272D3B] bg-[#12151C] shadow-2xl shadow-black/80">
              <img
                id="about-facility-preview"
                src={floorImg}
                alt="Pulse Gym workout floor in Jagdalpur"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/40 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0F1218]/90 backdrop-blur-md border border-[#272D3B]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#EAB308] font-bold uppercase tracking-wider">
                      Motivating Atmosphere
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Pulse Gym & Fitness Center
                    </p>
                    <p className="text-xs text-zinc-400">
                      Jaiswal Colony, Jagdalpur, Chhattisgarh
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-heading text-2xl text-[#EAB308] font-bold leading-none block">
                      4.7 ⭐
                    </span>
                    <span className="text-[11px] text-zinc-400">206 Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner geometric aesthetic border */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#EAB308]/60" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#EAB308]/60" />
          </div>

          {/* Right Column: 4 Focus Pillars & Motivating Environment Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-[#12151D] border border-[#222734]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#EAB308]/15 border border-[#EAB308]/30 flex items-center justify-center text-[#EAB308]">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-2xl text-white uppercase tracking-wide">
                  A Motivating Workout Environment
                </h3>
              </div>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Consistency starts with an environment that inspires focus. Pulse Gym is purposefully organized
                with dedicated zones for heavy lifting, selectorized machinery, and functional training—free from
                unnecessary distractions so you can stay locked into your session.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    id={`about-pillar-${idx + 1}`}
                    className="p-5 rounded-xl bg-[#10131A] border border-[#1F2430] hover:border-[#EAB308]/40 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#EAB308]/10 flex items-center justify-center text-[#EAB308]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading text-xl text-white tracking-wide uppercase">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
