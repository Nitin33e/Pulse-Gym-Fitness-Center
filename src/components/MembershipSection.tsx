import React from 'react';
import { CreditCard, Check, ArrowRight, MessageCircle, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, generateWhatsAppUrl } from '../config/businessConfig';

interface MembershipSectionProps {
  onOpenInquiry: (topic?: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenInquiry }) => {
  const membershipConfig = BUSINESS_CONFIG.membership;

  const membershipTiers = [
    {
      title: 'Monthly Pass',
      tag: 'Flexible',
      description: 'Ideal for getting started and experiencing the workout environment.',
      features: [
        'Full access to all weight & workout areas',
        'Initial baseline fitness assessment',
        'Locker & hydration station access',
        'Standard training guidance',
      ],
    },
    {
      title: 'Quarterly Plan',
      tag: 'Most Popular',
      popular: true,
      description: 'Recommended for building consistent training habits and visible body progress.',
      features: [
        'Full access to all training zones',
        'Periodic progression & strength check-in',
        'Weight-loss & conditioning guidance',
        'Priority workout program review',
      ],
    },
    {
      title: 'Long-Term / Annual',
      tag: 'Best Value',
      description: 'Dedicated for committed lifters and long-term athletic transformation.',
      features: [
        'Year-round unrestricted gym floor access',
        'Comprehensive milestone tracking',
        'Complete exercise split customization',
        'Maximum long-term value in Jagdalpur',
      ],
    },
  ];

  const handleWhatsAppInquiry = (planName: string) => {
    const text = `Hello Pulse Gym & Fitness Center! I would like to inquire about membership options and fee details for the *${planName}* at your Jaiswal Colony center.`;
    window.open(generateWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="membership"
      className="py-20 sm:py-28 bg-[#090A0C] relative border-t border-[#1C202A]"
    >
      {/* Background Subtle Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EAB308]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Admission & Membership</span>
          </div>
          <h2
            id="membership-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            Flexible <span className="text-[#EAB308]">Membership Plans</span>
          </h2>
          <p
            id="membership-subtext"
            className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed"
          >
            {membershipConfig.generalNotice ||
              'Pulse Gym offers flexible, transparent membership options tailored to your schedule. Contact us or visit directly to find the plan suited for you.'}
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {membershipTiers.map((tier) => (
            <div
              key={tier.title}
              id={`membership-card-${tier.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`relative rounded-2xl bg-[#11141C] border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                tier.popular
                  ? 'border-[#EAB308] shadow-lg shadow-[#EAB308]/10'
                  : 'border-[#202532] hover:border-[#EAB308]/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#EAB308] text-black text-[11px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide">
                    {tier.title}
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#181C25] border border-[#272D3B] text-zinc-300">
                    {tier.tag}
                  </span>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="p-4 rounded-xl bg-[#0D0F15] border border-[#1E2330] mb-6">
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                    Fee Structure
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Affordable & Transparent Rates
                  </p>
                  <p className="text-xs text-[#EAB308] mt-1">
                    Contact front desk for current offers
                  </p>
                </div>

                <div className="space-y-3 pt-2 mb-8">
                  <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Plan Inclusions:
                  </p>
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-[#EAB308]/15 text-[#EAB308] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#1C202B]">
                <button
                  id={`inquire-plan-btn-${tier.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleWhatsAppInquiry(tier.title)}
                  className={`w-full py-3 px-4 rounded-xl font-heading text-lg uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? 'bg-[#EAB308] hover:bg-[#FACC15] text-black shadow-md shadow-[#EAB308]/20'
                      : 'bg-[#181C25] hover:bg-[#EAB308] text-zinc-200 hover:text-black border border-[#2B313F] hover:border-[#EAB308]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenInquiry(tier.title)}
                  className="w-full py-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors text-center"
                >
                  Or Submit Website Inquiry
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout Bar */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#12151D] border border-[#222734] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAB308]/10 border border-[#EAB308]/20 flex items-center justify-center text-[#EAB308] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Walk-Ins & Consultations Welcome
              </p>
              <p className="text-xs text-zinc-400">
                Visit Pulse Gym directly at Jaiswal Colony to discuss student, couple, or long-term admission deals.
              </p>
            </div>
          </div>

          <a
            id="membership-visit-directions-link"
            href={BUSINESS_CONFIG.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#181C25] hover:bg-[#222734] border border-[#2B3242] text-xs font-semibold text-white uppercase tracking-wider transition-all shrink-0 flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Find Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
