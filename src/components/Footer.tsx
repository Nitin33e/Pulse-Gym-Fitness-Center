import React from 'react';
import { Dumbbell, MapPin, Star, Navigation, ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '../data';
import { BUSINESS_CONFIG, generateWhatsAppUrl } from '../config/businessConfig';

export const Footer: React.FC = () => {
  const phone = BUSINESS_CONFIG.contact.phone?.trim();
  const social = BUSINESS_CONFIG.social;
  const hasSocials = Boolean(social.instagram?.trim() || social.facebook?.trim() || social.youtube?.trim());

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleWhatsAppClick = () => {
    const text = `Hello Pulse Gym & Fitness Center! I would like to connect and inquire about gym admission in Jagdalpur.`;
    window.open(generateWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#050608] border-t border-[#161820] text-zinc-400 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#161820]">
          {/* Business Info Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAB308] text-black flex items-center justify-center shadow-md shadow-[#EAB308]/20">
                <Dumbbell className="w-5 h-5 -rotate-12 stroke-[2.5]" />
              </div>
              <div>
                <h3
                  id="footer-business-name"
                  className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wider leading-none"
                >
                  {BUSINESS_CONFIG.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Premier Strength & Conditioning Center
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
              Dedicated to building physical strength, sustainable conditioning, and lasting confidence
              in the heart of Jagdalpur, Chhattisgarh.
            </p>

            {/* Address */}
            <div className="flex items-start gap-2.5 pt-2">
              <MapPin className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
              <p id="footer-address" className="text-sm text-zinc-300 font-medium leading-relaxed">
                {BUSINESS_CONFIG.location.fullAddress}
              </p>
            </div>

            {/* Direct Telephone */}
            {phone && (
              <div className="flex items-center gap-2.5 pt-0.5">
                <Phone className="w-4 h-4 text-[#EAB308] shrink-0" />
                <a
                  id="footer-phone-display"
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="text-sm text-zinc-300 hover:text-[#EAB308] font-semibold transition-colors"
                >
                  {phone}
                </a>
              </div>
            )}

            {/* Google Rating Pill */}
            <a
              id="footer-rating-pill"
              href={BUSINESS_CONFIG.location.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1117] border border-[#1E2330] hover:border-[#EAB308]/40 transition-colors"
            >
              <div className="flex items-center text-[#EAB308]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#EAB308]" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">
                4.7 ⭐ (206 Google Reviews)
              </span>
            </a>

            {/* Conditional Social Media Links - Only rendered if URLs are provided */}
            {hasSocials && (
              <div className="pt-2 flex items-center gap-3">
                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-lg bg-[#141720] border border-[#232836] text-zinc-300 hover:text-[#EAB308] hover:border-[#EAB308] flex items-center justify-center transition-colors text-xs font-bold"
                  >
                    IG
                  </a>
                )}
                {social.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-lg bg-[#141720] border border-[#232836] text-zinc-300 hover:text-[#EAB308] hover:border-[#EAB308] flex items-center justify-center transition-colors text-xs font-bold"
                  >
                    FB
                  </a>
                )}
                {social.youtube && (
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-lg bg-[#141720] border border-[#232836] text-zinc-300 hover:text-[#EAB308] hover:border-[#EAB308] flex items-center justify-center transition-colors text-xs font-bold"
                  >
                    YT
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-lg text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    id={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-[#EAB308] transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Instant Action Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-lg text-white uppercase tracking-wider">
              Location & Contact
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Visit us directly in Jaiswal Colony, Jagdalpur. Open Google Maps for instant turn-by-turn directions.
            </p>

            <div className="space-y-2">
              <a
                id="footer-google-maps-link"
                href={BUSINESS_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#12151D] hover:bg-[#1A1F2A] text-zinc-200 hover:text-white border border-[#222734] hover:border-[#EAB308]/40 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>Get Directions on Maps</span>
              </a>

              <button
                id="footer-whatsapp-chat-btn"
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </button>

              {phone && (
                <a
                  id="footer-phone-call-btn"
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#12151D] hover:bg-[#1A1F2A] border border-[#222734] hover:border-[#EAB308]/40 text-zinc-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
                  <span>Call {phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p id="footer-copyright">
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500">Jaiswal Colony, Jagdalpur, Chhattisgarh 494001</span>
            <button
              id="footer-scroll-top-button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-lg bg-[#12151D] border border-[#222734] text-zinc-300 hover:text-[#EAB308] hover:border-[#EAB308] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
