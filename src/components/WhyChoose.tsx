import React from 'react';
import { Award, ShieldCheck, Flame, Users, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data';
import { WhyChooseItem } from '../types';

export const WhyChoose: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Flame':
        return Flame;
      case 'Users':
        return Users;
      default:
        return Award;
    }
  };

  return (
    <section
      id="why-us"
      className="py-20 sm:py-28 bg-[#090A0C] relative border-t border-[#1C202A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Why Pulse Gym</span>
          </div>
          <h2
            id="why-choose-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            Built For People Serious About <span className="text-[#EAB308]">Progress</span>
          </h2>
          <p
            id="why-choose-subtext"
            className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed"
          >
            Pulse Gym & Fitness Center is designed to deliver a real, focused workout experience.
            No gimmicks, no fluff—just disciplined training, reliable equipment, and an encouraging community.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item: WhyChooseItem, idx: number) => {
            const IconComponent = getIcon(item.iconName);

            return (
              <div
                key={item.id}
                id={`why-card-${item.id}`}
                className="p-7 rounded-2xl bg-[#11141C] border border-[#202532] hover:border-[#EAB308]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#181C25] border border-[#2B3240] group-hover:bg-[#EAB308] group-hover:text-black group-hover:border-[#EAB308] flex items-center justify-center text-[#EAB308] transition-all duration-200">
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-600 group-hover:text-[#EAB308] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl text-white uppercase tracking-wide mb-3 group-hover:text-[#EAB308] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle highlight line at card bottom */}
                <div className="w-full h-0.5 bg-[#1F2430] group-hover:bg-[#EAB308] transition-colors mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
