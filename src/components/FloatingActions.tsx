import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, X } from 'lucide-react';
import { BUSINESS_CONFIG, generateWhatsAppUrl } from '../config/businessConfig';

export const FloatingActions: React.FC = () => {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const phone = BUSINESS_CONFIG.contact.phone?.trim();

  const handleWhatsAppClick = () => {
    const message = `Hello Pulse Gym & Fitness Center! I would like to inquire about gym membership, workout programs, and batch timings at your Jaiswal Colony, Jagdalpur center.`;
    window.open(generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      id="floating-actions-container"
      aria-label="Quick Contact & Actions"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Floating Mini Prompt Badge (can be closed by user) */}
      {!bannerDismissed && (
        <div
          id="floating-whatsapp-tooltip"
          className="hidden sm:flex items-center gap-2 bg-[#12151D] border border-[#272D3D] text-white text-xs font-semibold py-2 px-3.5 rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <span className="w-2 h-2 rounded-full bg-[#EAB308] animate-ping" />
          <span>Chat with Pulse Gym on WhatsApp</span>
          <button
            onClick={() => setBannerDismissed(true)}
            aria-label="Dismiss message prompt"
            className="text-zinc-400 hover:text-white p-0.5 ml-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        {/* Conditional Phone Call Button - ONLY shown if phone number is configured */}
        {phone && (
          <a
            id="floating-phone-button"
            href={`tel:${phone.replace(/\s+/g, '')}`}
            aria-label={`Call Pulse Gym: ${phone}`}
            title={`Call Pulse Gym: ${phone}`}
            className="w-12 h-12 rounded-full bg-[#181C25] hover:bg-[#222835] border border-[#2B313F] text-[#EAB308] flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <Phone className="w-5 h-5" />
          </a>
        )}

        {/* Quick Directions Floating Button */}
        <a
          id="floating-directions-button"
          href={BUSINESS_CONFIG.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Directions on Google Maps"
          className="w-12 h-12 rounded-full bg-[#141720] hover:bg-[#1E2330] border border-[#2A3040] text-zinc-200 hover:text-[#EAB308] flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <Navigation className="w-5 h-5" />
        </a>

        {/* Persistent Floating WhatsApp Button */}
        <button
          id="floating-whatsapp-button"
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/30 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer relative group"
        >
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

          {/* Pulsing indicator ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10 group-hover:opacity-0" />
        </button>
      </div>
    </aside>
  );
};
