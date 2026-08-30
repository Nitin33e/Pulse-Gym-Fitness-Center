import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, MapPin, Star, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '../data';
import { BUSINESS_CONFIG, generateWhatsAppUrl } from '../config/businessConfig';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phone = BUSINESS_CONFIG.contact.phone?.trim();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const handleWhatsAppQuickChat = () => {
    const message = `Hello Pulse Gym & Fitness Center! I would like to inquire about membership and training in Jagdalpur.`;
    window.open(generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090B]/95 backdrop-blur-md border-b border-[#1E2330] py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#08090B]/95 via-[#08090B]/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            id="nav-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group text-left"
          >
            <div
              id="brand-icon-box"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#EAB308] to-[#CA8A04] flex items-center justify-center shadow-lg shadow-[#EAB308]/20 group-hover:scale-105 transition-transform duration-200"
            >
              <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-black transform -rotate-12 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  id="brand-name-text"
                  className="font-heading text-2xl sm:text-3xl text-white tracking-wider leading-none"
                >
                  PULSE <span className="text-[#EAB308]">GYM</span>
                </span>
                <span
                  id="brand-rating-badge"
                  className="hidden 2xl:inline-flex items-center gap-1 bg-[#141720] border border-[#262C3A] text-[11px] font-semibold px-2 py-0.5 rounded-full text-zinc-300"
                >
                  <Star className="w-3 h-3 text-[#EAB308] fill-[#EAB308]" />
                  <span>4.7 (206)</span>
                </span>
              </div>
              <p
                id="brand-tagline-text"
                className="text-[11px] sm:text-xs text-zinc-400 font-medium tracking-wide"
              >
                & Fitness Center • Jagdalpur
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden xl:flex items-center gap-1 2xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs 2xl:text-sm font-semibold text-zinc-300 hover:text-white px-2.5 2xl:px-3 py-2 rounded-lg hover:bg-white/5 transition-colors duration-150 tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Conditional Phone Call button: ONLY shown if phone number is configured */}
            {phone && (
              <a
                id="nav-call-btn"
                href={`tel:${phone.replace(/\s+/g, '')}`}
                title={`Call Pulse Gym: ${phone}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[#161922] hover:bg-[#202532] text-zinc-200 border border-[#2B313F] transition-all duration-200 hover:border-[#EAB308]/50 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
                <span className="hidden lg:inline">{phone}</span>
                <span className="lg:hidden">Call</span>
              </a>
            )}

            {/* Quick WhatsApp Action */}
            <button
              id="nav-whatsapp-btn"
              onClick={handleWhatsAppQuickChat}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[#161922] hover:bg-[#202532] text-zinc-200 border border-[#2B313F] transition-all duration-200 hover:border-[#25D366]/50 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </button>

            {/* Directions Link */}
            <a
              id="nav-directions-btn"
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[#141720] hover:bg-[#1E2330] text-zinc-300 border border-[#272D3D] transition-all duration-200 hover:border-[#EAB308]/40"
            >
              <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>Jaiswal Colony</span>
            </a>

            {/* Main Join Now CTA */}
            <button
              id="nav-join-button"
              onClick={onOpenJoinModal}
              className="relative group overflow-hidden rounded-lg bg-[#EAB308] hover:bg-[#FACC15] text-black font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 shadow-md shadow-[#EAB308]/20 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span className="flex items-center gap-1.5 relative z-10 font-heading text-base tracking-wider uppercase font-bold">
                Join Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Actions & Menu Trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              id="mobile-join-button"
              onClick={onOpenJoinModal}
              className="sm:hidden bg-[#EAB308] text-black font-heading text-sm px-3 py-1.5 rounded-md font-bold tracking-wider"
            >
              JOIN
            </button>
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-lg bg-[#141720] border border-[#272D3C] text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden bg-[#0C0E14] border-b border-[#202532] px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#EAB308] fill-[#EAB308]" />
              <span className="text-xs font-semibold text-zinc-300">
                4.7 ⭐ from 206 Google Reviews
              </span>
            </div>
            <span className="text-xs text-zinc-400">Jagdalpur, CG</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-xs font-semibold text-zinc-300 hover:text-[#EAB308] px-3 py-2.5 rounded-md bg-[#13161F] hover:bg-[#1C212D] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              id="mobile-drawer-join-now-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 rounded-xl bg-[#EAB308] hover:bg-[#FACC15] text-black font-bold font-heading text-lg tracking-wider uppercase text-center shadow-lg shadow-[#EAB308]/20 flex items-center justify-center gap-2"
            >
              <span>Join Now / Schedule Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="mobile-drawer-whatsapp-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppQuickChat();
              }}
              className="w-full py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>

            {phone && (
              <a
                id="mobile-drawer-phone-btn"
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 rounded-xl bg-[#161922] border border-[#2A303F] text-zinc-200 text-xs font-semibold text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#EAB308]" />
                <span>Call Pulse Gym ({phone})</span>
              </a>
            )}

            <a
              id="mobile-drawer-directions-btn"
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#161922] border border-[#2A303F] text-zinc-300 text-xs font-semibold text-center flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#EAB308]" />
              <span>Get Directions to Jaiswal Colony</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
