import React from 'react';
import {
  Dumbbell,
  Activity,
  Flame,
  Zap,
  ClipboardCheck,
  ArrowRight,
  Check,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import { generateWhatsAppUrl } from '../config/businessConfig';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return Dumbbell;
      case 'Activity':
        return Activity;
      case 'Flame':
        return Flame;
      case 'Zap':
        return Zap;
      case 'ClipboardCheck':
        return ClipboardCheck;
      default:
        return Dumbbell;
    }
  };

  const handleWhatsAppInquiry = (serviceTitle: string) => {
    const text = `Hello Pulse Gym & Fitness Center! I would like to inquire about your *${serviceTitle}* program in Jagdalpur. Could you please share schedule details and joining process?`;
    window.open(generateWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-[#08090B] relative border-t border-[#1C202A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Programs</span>
          </div>
          <h2
            id="services-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            Disciplined Training <span className="text-[#EAB308]">Services</span>
          </h2>
          <p
            id="services-subtext"
            className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed"
          >
            Built around science-backed lifting biomechanics, structured progressive overload,
            and sustainable lifestyle fitness at Pulse Gym & Fitness Center, Jagdalpur.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem, idx: number) => {
            const Icon = getIcon(service.iconName);
            const isFeatured = idx === 0;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative rounded-2xl bg-[#11141C] border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl ${
                  isFeatured
                    ? 'border-[#EAB308]/40 hover:border-[#EAB308] shadow-[#EAB308]/5'
                    : 'border-[#1F2430] hover:border-[#EAB308]/50 shadow-black/40'
                }`}
              >
                {/* Subtle top corner gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#EAB308]/5 via-transparent to-transparent rounded-tr-2xl pointer-events-none group-hover:from-[#EAB308]/15 transition-all duration-300" />

                <div>
                  {/* Top Bar: Icon + Category Tag */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isFeatured
                          ? 'bg-[#EAB308] text-black shadow-lg shadow-[#EAB308]/25'
                          : 'bg-[#181C26] text-[#EAB308] border border-[#2B313F] group-hover:bg-[#EAB308] group-hover:text-black group-hover:border-[#EAB308]'
                      }`}
                    >
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#161922] border border-[#252B38] text-zinc-300">
                      {service.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide mb-3 group-hover:text-[#EAB308] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-[#1C212D] mb-6">
                    {service.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-2.5 text-xs text-zinc-300 font-medium"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#EAB308]/15 flex items-center justify-center text-[#EAB308] shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions: WhatsApp Quick Inquiry + Web Modal */}
                <div className="space-y-2 pt-2 border-t border-[#1A1F2A]">
                  <button
                    id={`service-whatsapp-btn-${service.id}`}
                    onClick={() => handleWhatsAppInquiry(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#EAB308] hover:bg-[#FACC15] text-black font-heading text-base tracking-wider uppercase font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#EAB308]/15"
                  >
                    <MessageCircle className="w-4 h-4 fill-black text-[#EAB308]" />
                    <span>Inquire on WhatsApp</span>
                  </button>

                  <button
                    id={`service-inquire-btn-${service.id}`}
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2 px-3 text-xs font-semibold text-zinc-400 hover:text-white transition-colors text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Schedule Gym Visit</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
