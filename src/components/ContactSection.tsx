import React, { useState } from 'react';
import {
  MapPin,
  Send,
  Navigation,
  CheckCircle2,
  Dumbbell,
  ArrowRight,
  MessageCircle,
  Phone,
  Clock,
  Eye,
} from 'lucide-react';
import { SERVICES } from '../data';
import { BUSINESS_CONFIG, generateWhatsAppUrl, createInquiryMessage } from '../config/businessConfig';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceInterest: initialService || SERVICES[0].title,
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const phone = BUSINESS_CONFIG.contact.phone?.trim();

  // Generates current message draft
  const currentFormattedMessage = createInquiryMessage({
    name: formData.fullName,
    phone: formData.phone,
    service: formData.serviceInterest,
    message: formData.message || (formData.preferredTime ? `Preferred batch: ${formData.preferredTime}` : ''),
  });

  const handleSendViaWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const url = generateWhatsAppUrl(currentFormattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      serviceInterest: SERVICES[0].title,
      preferredTime: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#090A0C] relative border-t border-[#1C202A]"
    >
      {/* Background Gold Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[#EAB308]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Call To Action Box */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>

          <h2
            id="contact-cta-headline"
            className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-none mb-6"
          >
            Ready to Start Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-[#FACC15]">
              Fitness Journey?
            </span>
          </h2>

          <p
            id="contact-cta-subheading"
            className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Visit us in person at Jaiswal Colony, Jagdalpur, or send an inquiry directly via WhatsApp
            to connect with <strong className="text-white">{BUSINESS_CONFIG.name}</strong>.
          </p>

          {/* Quick Action Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              id="cta-whatsapp-quick-btn"
              onClick={() => handleSendViaWhatsApp()}
              className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading text-xl uppercase tracking-wider font-bold shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Inquire on WhatsApp</span>
            </button>

            {phone && (
              <a
                id="cta-phone-call-btn"
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="px-6 py-3.5 rounded-xl bg-[#171B24] hover:bg-[#202532] text-white font-heading text-xl uppercase tracking-wider font-semibold border border-[#2D3342] hover:border-[#EAB308]/50 shadow-md transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#EAB308]" />
                <span>Call {phone}</span>
              </a>
            )}

            <a
              id="cta-get-directions-button"
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#141720] hover:bg-[#1C202B] text-zinc-200 hover:text-white font-heading text-xl uppercase tracking-wider font-semibold border border-[#272D3D] hover:border-[#EAB308]/50 shadow-md transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#EAB308]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Contact / Inquiry Card */}
        <div
          id="inquiry-form-card"
          className="max-w-2xl mx-auto rounded-3xl bg-[#11141C] border border-[#202532] p-6 sm:p-10 shadow-2xl relative"
        >
          {submitted ? (
            <div
              id="contact-submission-success"
              className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#EAB308]/15 border border-[#EAB308]/40 text-[#EAB308] flex items-center justify-center mx-auto shadow-lg shadow-[#EAB308]/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-3xl text-white uppercase tracking-wide">
                Inquiry Prepared!
              </h3>
              <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your interest in{' '}
                <span className="text-[#EAB308] font-semibold">{formData.serviceInterest}</span> has been structured.
                You can now send it directly to our desk on WhatsApp or visit us at Jaiswal Colony, Jagdalpur.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => handleSendViaWhatsApp()}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading text-lg tracking-wider uppercase font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Send via WhatsApp Now</span>
                </button>

                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#181C25] hover:bg-[#222734] text-zinc-200 font-heading text-lg tracking-wider uppercase border border-[#2B313F] flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#EAB308]" />
                  <span>Navigate to Gym</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                >
                  Fill Another Inquiry Form
                </button>
              </div>
            </div>
          ) : (
            <form id="pulse-gym-inquiry-form" onSubmit={handleDirectSubmit} className="space-y-5">
              <div className="border-b border-[#1E2330] pb-4 mb-2">
                <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase">
                  Inquire Or Plan Your Visit
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Sends directly to WhatsApp or registers your inquiry with Pulse Gym & Fitness Center
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-full-name"
                  className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="contact-full-name"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0F15] border border-[#1F2430] text-white placeholder-zinc-500 focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition-colors text-sm"
                />
              </div>

              {/* Contact Info (Phone) */}
              <div>
                <label
                  htmlFor="contact-info-field"
                  className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                >
                  Your Phone Number (WhatsApp preferred) *
                </label>
                <input
                  type="tel"
                  id="contact-info-field"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g., 9876543210"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0F15] border border-[#1F2430] text-white placeholder-zinc-500 focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition-colors text-sm"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="contact-service-interest"
                  className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                >
                  Primary Fitness Interest
                </label>
                <select
                  id="contact-service-interest"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0F15] border border-[#1F2430] text-white focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition-colors text-sm"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#12151D] text-white">
                      {s.title}
                    </option>
                  ))}
                  <option value="General Gym Membership & Visit" className="bg-[#12151D] text-white">
                    General Gym Membership & Visit
                  </option>
                  <option value="Morning Batch Timings" className="bg-[#12151D] text-white">
                    Morning Batch Timings
                  </option>
                  <option value="Evening Batch Timings" className="bg-[#12151D] text-white">
                    Evening Batch Timings
                  </option>
                </select>
              </div>

              {/* Preferred Batch / Timing */}
              <div>
                <label
                  htmlFor="contact-preferred-time"
                  className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                >
                  Preferred Workout Slot (Optional)
                </label>
                <input
                  type="text"
                  id="contact-preferred-time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  placeholder="e.g., Early Morning (6-8 AM) or Evening (6-8 PM)"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0F15] border border-[#1F2430] text-white placeholder-zinc-500 focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition-colors text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                >
                  Message or Fitness Goal (Optional)
                </label>
                <textarea
                  id="contact-message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific goals, questions on equipment, or planned visit date..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0F15] border border-[#1F2430] text-white placeholder-zinc-500 focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition-colors text-sm resize-none"
                />
              </div>

              {/* Message Preview Toggle */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-xs text-[#EAB308] hover:text-[#FACC15] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showPreview ? 'Hide WhatsApp Message Preview' : 'Preview WhatsApp Message'}</span>
                </button>

                {showPreview && (
                  <div className="mt-2 p-3.5 rounded-xl bg-[#08090C] border border-[#202532] text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed">
                    {currentFormattedMessage}
                  </div>
                )}
              </div>

              {/* Dual Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  id="contact-send-whatsapp-button"
                  onClick={() => handleSendViaWhatsApp()}
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading text-lg uppercase tracking-wider font-bold shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  id="contact-submit-button"
                  className="w-full py-3.5 rounded-xl bg-[#EAB308] hover:bg-[#FACC15] text-black font-heading text-lg uppercase tracking-wider font-bold shadow-lg shadow-[#EAB308]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Address & Phone Note */}
              <div className="text-[12px] text-zinc-400 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pt-3 border-t border-[#1C202C]">
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
                  <span>Jaiswal Colony, Jagdalpur</span>
                </p>
                {phone && (
                  <>
                    <span className="hidden sm:inline text-zinc-600">•</span>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-1.5 text-zinc-300 hover:text-[#EAB308] font-medium transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
                      <span>{phone}</span>
                    </a>
                  </>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
