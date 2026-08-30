import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Shield, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="py-20 sm:py-28 bg-[#090A0C] relative border-t border-[#1C202A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Visit Our Gym</span>
          </div>
          <h2
            id="location-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            Find Us In <span className="text-[#EAB308]">Jagdalpur</span>
          </h2>
          <p
            id="location-subtext"
            className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed"
          >
            Conveniently situated in Jaiswal Colony, Jagdalpur. Visit us during training hours
            to inspect the workout floor, review the equipment, and discuss your fitness goals.
          </p>
        </div>

        {/* Location Card + Embedded Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address & Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#12151D] border border-[#222734] rounded-3xl p-6 sm:p-8 shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#EAB308] text-black flex items-center justify-center shadow-lg shadow-[#EAB308]/20">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase leading-none">
                    Pulse Gym
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    & Fitness Center
                  </p>
                </div>
              </div>

              {/* Exact Business Location as Requested */}
              <div className="p-5 rounded-2xl bg-[#0F1218] border border-[#1E2330] mb-6">
                <p className="text-xs text-[#EAB308] font-bold uppercase tracking-wider mb-1.5">
                  Official Address
                </p>
                <p
                  id="displayed-gym-address"
                  className="text-base sm:text-lg font-semibold text-white leading-snug"
                >
                  Jaiswal Colony, Jagdalpur, Chhattisgarh 494001
                </p>
                <p className="text-xs text-zinc-400 mt-2">
                  India
                </p>
              </div>

              {/* Location Highlights */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#181C25] border border-[#2A303F] flex items-center justify-center text-[#EAB308] shrink-0 mt-0.5">
                    <Navigation className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wide">
                      Strategic Accessibility
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Situated in the well-connected residential and commercial hub of Jaiswal Colony.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#181C25] border border-[#2A303F] flex items-center justify-center text-[#EAB308] shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wide">
                      Verified Google Destination
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      4.7 ⭐ rated fitness facility with 206 registered Google community reviews.
                    </p>
                  </div>
                </div>

                {BUSINESS_INFO.phone && (
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#181C25] border border-[#2A303F] flex items-center justify-center text-[#EAB308] shrink-0 mt-0.5">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wide">
                        Telephone Inquiry
                      </h4>
                      <a
                        href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-xs text-[#EAB308] hover:text-[#FACC15] font-semibold mt-0.5 block transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons: Get Directions & Call */}
            <div className="mt-8 pt-6 border-t border-[#1E2330] flex flex-col sm:flex-row gap-3">
              <a
                id="location-get-directions-button"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 px-5 rounded-xl bg-[#EAB308] hover:bg-[#FACC15] text-black font-heading text-xl tracking-wider uppercase font-bold text-center flex items-center justify-center gap-2.5 shadow-xl shadow-[#EAB308]/20 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get Directions</span>
                <Navigation className="w-5 h-5 fill-current" />
              </a>

              {BUSINESS_INFO.phone && (
                <a
                  id="location-call-button"
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="py-4 px-5 rounded-xl bg-[#181C25] hover:bg-[#202532] text-white font-heading text-xl tracking-wider uppercase font-semibold border border-[#2B313F] hover:border-[#EAB308]/50 text-center flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#EAB308]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Embedded Map Area */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#222734] bg-[#12151D] relative shadow-2xl min-h-[380px] lg:min-h-full flex flex-col">
            {/* Map Frame Header */}
            <div className="px-5 py-3.5 bg-[#10131B] border-b border-[#202533] flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308] animate-pulse" />
                <span className="text-xs font-semibold text-white">
                  Pulse Gym Location Pin
                </span>
                <span className="text-zinc-500 text-xs">•</span>
                <span className="text-xs text-zinc-400">Jaiswal Colony, Jagdalpur</span>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#EAB308] hover:text-[#FACC15] font-semibold flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map iframe Container */}
            <div className="relative flex-1 w-full min-h-[340px]">
              <iframe
                id="embedded-gym-map-frame"
                title="Pulse Gym & Fitness Center Location Map"
                src="https://maps.google.com/maps?q=Pulse+Gym+and+Fitness+Center+Jaiswal+Colony+Jagdalpur+Chhattisgarh+494001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[340px] border-0 filter invert-[90%] hue-rotate-180 contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Floating location card on top of map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto max-w-xs bg-[#090A0C]/90 backdrop-blur-md border border-[#272D3B] p-3.5 rounded-xl shadow-xl">
                <p className="text-[11px] font-semibold text-[#EAB308] uppercase tracking-wider">
                  Pulse Gym & Fitness Center
                </p>
                <p className="text-xs text-zinc-200 mt-0.5">
                  Jaiswal Colony, Jagdalpur, Chhattisgarh 494001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
