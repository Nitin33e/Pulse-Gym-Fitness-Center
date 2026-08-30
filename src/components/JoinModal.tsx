import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Dumbbell, MapPin, Navigation, Send, MessageCircle, Phone } from 'lucide-react';
import { SERVICES } from '../data';
import { BUSINESS_CONFIG, generateWhatsAppUrl, createInquiryMessage } from '../config/businessConfig';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || SERVICES[0].title);
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsAppSend = () => {
    const message = createInquiryMessage({
      name: fullName,
      phone: phone,
      service: service,
      message: note,
    });
    window.open(generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleModalClose = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setNote('');
    onClose();
  };

  return (
    <div
      id="join-now-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="join-now-modal-container"
        className="relative w-full max-w-lg bg-[#10121A] border border-[#242A38] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/90 my-8"
      >
        {/* Close Button */}
        <button
          id="join-modal-close-button"
          onClick={handleModalClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-[#161922] border border-[#292F3E] text-zinc-400 hover:text-white flex items-center justify-center hover:bg-[#222734] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95">
            <div className="w-14 h-14 rounded-2xl bg-[#EAB308]/15 border border-[#EAB308]/40 text-[#EAB308] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-3xl text-white uppercase tracking-wide">
              Welcome to Pulse Gym!
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Thank you, <strong className="text-white">{fullName}</strong>. Your visit details for{' '}
              <strong className="text-[#EAB308]">{service}</strong> have been recorded.
            </p>

            <div className="p-3.5 rounded-xl bg-[#090B0F] border border-[#1C202B] text-left text-xs text-zinc-300">
              <p className="font-semibold text-white mb-0.5">Facility Location:</p>
              <p>{BUSINESS_CONFIG.location.addressLine}</p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading text-lg uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Confirm on WhatsApp Now</span>
              </button>

              <a
                href={BUSINESS_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#161922] hover:bg-[#202532] text-zinc-200 border border-[#282E3E] font-heading text-lg uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#EAB308]" />
                <span>Navigate to Gym</span>
              </a>

              <button
                onClick={handleModalClose}
                className="w-full py-2 rounded-xl text-zinc-400 hover:text-white text-xs font-semibold uppercase tracking-wider mt-1"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#EAB308] text-black flex items-center justify-center shadow-md shadow-[#EAB308]/20">
                <Dumbbell className="w-5 h-5 -rotate-12 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase leading-none">
                  Join Pulse Gym
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {BUSINESS_CONFIG.location.addressLine}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
              Start your fitness journey today. Choose your program and connect directly with Pulse Gym & Fitness Center.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="modal-full-name"
                  className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="modal-full-name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090B0F] border border-[#1E2330] text-white placeholder-zinc-500 focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-contact"
                  className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5"
                >
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  id="modal-contact"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g., 9876543210"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090B0F] border border-[#1E2330] text-white placeholder-zinc-500 focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-program-select"
                  className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5"
                >
                  Program / Plan of Interest
                </label>
                <select
                  id="modal-program-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090B0F] border border-[#1E2330] text-white focus:outline-none focus:border-[#EAB308] text-sm"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#10121A]">
                      {s.title}
                    </option>
                  ))}
                  <option value="General Gym Membership" className="bg-[#10121A]">
                    General Gym Membership
                  </option>
                  <option value="Personal Workout Induction" className="bg-[#10121A]">
                    Personal Workout Induction
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="modal-note"
                  className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5"
                >
                  Preferred Visit Slot / Note (Optional)
                </label>
                <input
                  type="text"
                  id="modal-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="e.g. Visiting this Saturday morning"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090B0F] border border-[#1E2330] text-white placeholder-zinc-500 focus:outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] text-sm"
                />
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading text-lg uppercase tracking-wider font-bold shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  id="modal-submit-join-button"
                  className="w-full py-3.5 rounded-xl bg-[#EAB308] hover:bg-[#FACC15] text-black font-heading text-lg uppercase tracking-wider font-bold shadow-lg shadow-[#EAB308]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-2 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-[11px] text-zinc-400">
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#EAB308]" />
                  <span>Jaiswal Colony, Jagdalpur</span>
                </p>
                {BUSINESS_CONFIG.contact.phone && (
                  <>
                    <span className="hidden sm:inline text-zinc-600">•</span>
                    <a
                      href={`tel:${BUSINESS_CONFIG.contact.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-1.5 text-zinc-300 hover:text-[#EAB308] font-medium transition-colors"
                    >
                      <Phone className="w-3 h-3 text-[#EAB308]" />
                      <span>{BUSINESS_CONFIG.contact.phone}</span>
                    </a>
                  </>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
