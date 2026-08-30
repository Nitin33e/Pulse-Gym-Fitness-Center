import React from 'react';
import { UserCheck, Shield } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const OwnerSection: React.FC = () => {
  const owner = BUSINESS_CONFIG.owner;

  // As required: If owner details are not provided or empty, completely hide the section.
  if (!owner || !owner.name.trim()) {
    return null;
  }

  return (
    <section
      id="management"
      className="py-20 sm:py-24 bg-[#0B0D12] relative border-t border-[#1C202A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Leadership & Vision</span>
          </div>
          <h2
            id="owner-section-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            Behind <span className="text-[#EAB308]">Pulse Gym</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-[#12151D] border border-[#222734] p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          {owner.image ? (
            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-[#EAB308]/40 shadow-xl">
              <img
                src={owner.image}
                alt={owner.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#181C25] border border-[#2B3240] flex items-center justify-center text-[#EAB308] shrink-0">
              <UserCheck className="w-12 h-12" />
            </div>
          )}

          <div className="space-y-3 text-center md:text-left">
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl text-white uppercase leading-tight">
                {owner.name}
              </h3>
              <p className="text-sm font-semibold text-[#EAB308] tracking-wider uppercase">
                {owner.role}
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {owner.bio}
            </p>

            {owner.credentials && owner.credentials.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                {owner.credentials.map((cred, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#181C26] border border-[#292F3E] text-zinc-300 font-medium"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
