import React from 'react';
import { Users, Award, Shield } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const TrainersSection: React.FC = () => {
  const trainers = BUSINESS_CONFIG.trainers;

  // As required: If no trainers are configured, hide this section completely.
  if (!trainers || trainers.length === 0) {
    return null;
  }

  return (
    <section
      id="trainers"
      className="py-20 sm:py-28 bg-[#090A0C] relative border-t border-[#1C202A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Coaching & Training</span>
          </div>
          <h2
            id="trainers-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            Meet Our <span className="text-[#EAB308]">Trainers</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Dedicated fitness professionals committed to guiding your lifting form, workout progression,
            and personal goals at Pulse Gym & Fitness Center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              id={`trainer-card-${trainer.id}`}
              className="group rounded-2xl bg-[#11141C] border border-[#202532] hover:border-[#EAB308]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {trainer.image ? (
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11141C] via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="aspect-[4/3] w-full bg-[#161922] flex items-center justify-center text-[#EAB308]">
                    <Shield className="w-16 h-16 opacity-40" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase leading-tight group-hover:text-[#EAB308] transition-colors">
                      {trainer.name}
                    </h3>
                    {trainer.experience && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#181C26] text-zinc-300 border border-[#2B313F]">
                        {trainer.experience}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-3">
                    {trainer.role} • {trainer.specialty}
                  </p>

                  {trainer.bio && (
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {trainer.bio}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="w-full h-0.5 bg-[#1F2430] group-hover:bg-[#EAB308] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
