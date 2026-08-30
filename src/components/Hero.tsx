import React from 'react';
import { Star, MapPin, ArrowRight, Dumbbell, Trophy, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, generateWhatsAppUrl } from '../config/businessConfig';
import heroImage from '../assets/images/pulse_gym_hero_1788064969679.jpg';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const phone = BUSINESS_CONFIG.contact.phone?.trim();

  const handleWhatsAppInquiry = () => {
    const message = `Hello Pulse Gym & Fitness Center! I am interested in joining your gym at Jaiswal Colony, Jagdalpur. Could you please provide information regarding workout programs and admissions?`;
    window.open(generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#08090B]"
    >
      {/* Background Image with Dark Vignette & Gold Lighting Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          id="hero-bg-image"
          src={heroImage}
          alt="Pulse Gym & Fitness Center Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Layered dark gradients for maximum contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/85 to-[#08090B]/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08090B]/60 to-[#08090B]/95" />
        {/* Amber brand ambiance glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-[#EAB308]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Google Review & Rating Badge */}
          <a
            id="hero-rating-pill"
            href={BUSINESS_CONFIG.location.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#11141C]/90 border border-[#EAB308]/30 shadow-lg shadow-black/70 mb-6 backdrop-blur-sm hover:border-[#EAB308]/60 transition-colors group cursor-pointer"
          >
            <div className="flex items-center text-[#EAB308]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#EAB308] text-[#EAB308]"
                />
              ))}
            </div>
            <span className="text-white font-bold text-xs sm:text-sm tracking-wide">
              4.7 ⭐
            </span>
            <span className="text-zinc-500 text-xs">|</span>
            <span className="text-zinc-300 font-medium text-xs sm:text-sm group-hover:text-white transition-colors">
              206 Google Reviews
            </span>
          </a>

          {/* Large Athletic Headline */}
          <h1
            id="hero-main-headline"
            className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-bold tracking-tight uppercase leading-[0.93] mb-6 drop-shadow-lg"
          >
            Transform Your Body.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] via-[#FACC15] to-[#F59E0B]">
              Elevate Your Strength.
            </span>
          </h1>

          {/* Subheading with exact business and location */}
          <p
            id="hero-subheading"
            className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance"
          >
            Train smarter, lift heavier, and reach your personal fitness milestones at{' '}
            <strong className="text-white font-semibold">{BUSINESS_CONFIG.name}</strong>,{' '}
            located in <span className="text-[#EAB308] font-medium">{BUSINESS_CONFIG.location.colony}, {BUSINESS_CONFIG.location.city}</span>.
          </p>

          {/* Primary Action Buttons */}
          <div
            id="hero-cta-group"
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16"
          >
            {/* WhatsApp Inquiry Button */}
            <button
              id="hero-whatsapp-button"
              onClick={handleWhatsAppInquiry}
              className="px-7 py-4 rounded-xl bg-[#EAB308] hover:bg-[#FACC15] text-black font-heading text-xl sm:text-2xl tracking-wider font-bold uppercase transition-all duration-200 shadow-xl shadow-[#EAB308]/25 hover:shadow-[#EAB308]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-black text-[#EAB308]" />
              <span>Inquire on WhatsApp</span>
            </button>

            {/* Join / Visit Modal Button */}
            <button
              id="hero-join-now-button"
              onClick={onOpenJoinModal}
              className="px-6 py-4 rounded-xl bg-[#141720]/90 hover:bg-[#1C202B] text-white font-heading text-xl sm:text-2xl tracking-wider font-semibold uppercase border border-[#2B313F] hover:border-[#EAB308]/50 transition-all duration-200 shadow-lg shadow-black/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Visit</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Direct Call Button */}
            {phone && (
              <a
                id="hero-call-button"
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl bg-[#141720]/90 hover:bg-[#1C202B] text-white font-heading text-xl sm:text-2xl tracking-wider font-semibold uppercase border border-[#2B313F] hover:border-[#EAB308]/60 transition-all duration-200 shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#EAB308]" />
                <span>Call: {phone}</span>
              </a>
            )}

            {/* Directions Link */}
            <a
              id="hero-get-directions-button"
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#10131A]/90 hover:bg-[#181C24] text-zinc-300 hover:text-white font-heading text-xl sm:text-2xl tracking-wider font-semibold uppercase border border-[#222734] hover:border-[#EAB308]/40 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#EAB308]" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Bottom Trust Bar */}
          <div
            id="hero-trust-bar"
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-[#1C2029]"
          >
            <div
              id="hero-stat-location"
              className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-[#0D0F15]/80 border border-[#1C212C]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EAB308]/10 border border-[#EAB308]/20 flex items-center justify-center text-[#EAB308]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Location
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-none">
                  {BUSINESS_CONFIG.location.colony}, {BUSINESS_CONFIG.location.city}
                </p>
              </div>
            </div>

            <div
              id="hero-stat-rating"
              className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-[#0D0F15]/80 border border-[#1C212C]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EAB308]/10 border border-[#EAB308]/20 flex items-center justify-center text-[#EAB308]">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Google Reputation
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  4.7 ⭐ Rating (206 Reviews)
                </p>
              </div>
            </div>

            <div
              id="hero-stat-facility"
              className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-[#0D0F15]/80 border border-[#1C212C]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EAB308]/10 border border-[#EAB308]/20 flex items-center justify-center text-[#EAB308]">
                <Dumbbell className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Core Specializations
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Strength, Weight-Loss & Fitness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
