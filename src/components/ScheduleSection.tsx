import React from 'react';
import { Clock, Sun, Moon, CheckCircle, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG, generateWhatsAppUrl } from '../config/businessConfig';

interface ScheduleSectionProps {
  onOpenInquiry: (topic?: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenInquiry }) => {
  const scheduleConfig = BUSINESS_CONFIG.schedule;

  const handleWhatsAppScheduleInquiry = () => {
    const text = `Hello Pulse Gym & Fitness Center! Could you please share the current daily batch timings, morning/evening slots, and workout hours at your Jaiswal Colony gym?`;
    window.open(generateWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="schedule"
      className="py-20 sm:py-28 bg-[#0C0E13] relative border-t border-[#1C202A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Training Hours & Batches</span>
          </div>
          <h2
            id="schedule-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            Workout Hours & <span className="text-[#EAB308]">Batch Schedule</span>
          </h2>
          <p
            id="schedule-subtext"
            className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed"
          >
            Train consistently around your personal routine. Pulse Gym accommodates dedicated morning and
            evening lifters in Jagdalpur with spacious lanes and prime training slots.
          </p>
        </div>

        {/* Schedule Grid: Morning & Evening Overview + Live Inquiry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Batch Structure */}
          <div className="lg:col-span-6 space-y-4">
            {/* Morning Batch */}
            <div className="p-6 rounded-2xl bg-[#11141C] border border-[#202532] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAB308]/15 border border-[#EAB308]/30 text-[#EAB308] flex items-center justify-center shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#EAB308] uppercase tracking-wider">
                  Session 01
                </span>
                <h3 className="font-heading text-2xl text-white uppercase tracking-wide">
                  Morning Workout Batches
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Start your day with high metabolic drive. Convenient early hours tailored for professionals,
                  students, and morning lifters seeking optimal energy before work.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-zinc-300 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#EAB308]" />
                  <span>Cardio, mobility & heavy resistance training</span>
                </div>
              </div>
            </div>

            {/* Evening Batch */}
            <div className="p-6 rounded-2xl bg-[#11141C] border border-[#202532] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAB308]/15 border border-[#EAB308]/30 text-[#EAB308] flex items-center justify-center shrink-0">
                <Moon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#EAB308] uppercase tracking-wider">
                  Session 02
                </span>
                <h3 className="font-heading text-2xl text-white uppercase tracking-wide">
                  Evening Prime Batches
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  High-energy atmosphere designed for intense hypertrophy sessions, progressive barbell splits,
                  and de-stressing after a long workday.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-zinc-300 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#EAB308]" />
                  <span>High-intensity sets & strength circuits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timings Notice & Instant WhatsApp Action */}
          <div className="lg:col-span-6 rounded-2xl bg-[#12151E] border border-[#262C3A] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAB308] text-black flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-white uppercase leading-none">
                    Current Batch Schedule
                  </h4>
                  <p className="text-xs text-[#EAB308] font-semibold mt-0.5">
                    Updated For Members & Walk-Ins
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0D0F16] border border-[#1E2332]">
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {scheduleConfig.generalNotice ||
                    'Pulse Gym operates multiple convenient shifts throughout the day. Because seasonal timings or dedicated ladies/beginners slots may vary, please verify today’s open hours directly with our desk.'}
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between text-xs text-zinc-300 py-1.5 border-b border-[#1C202E]">
                  <span className="font-semibold text-white">Facility Status:</span>
                  <span className="text-[#EAB308] font-bold">Active in Jaiswal Colony</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-300 py-1.5 border-b border-[#1C202E]">
                  <span className="font-semibold text-white">Sunday Routine:</span>
                  <span className="text-zinc-400">Ask desk for special sessions</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-300 py-1.5">
                  <span className="font-semibold text-white">Google Rating:</span>
                  <span className="text-zinc-200">4.7 ⭐ from 206 verified reviews</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#1E2332] space-y-3">
              <button
                id="schedule-inquire-whatsapp-btn"
                onClick={handleWhatsAppScheduleInquiry}
                className="w-full py-3.5 px-4 rounded-xl bg-[#EAB308] hover:bg-[#FACC15] text-black font-heading text-lg uppercase tracking-wider font-bold transition-all shadow-lg shadow-[#EAB308]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                <span>Inquire Batch Timings on WhatsApp</span>
              </button>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
                <button
                  onClick={() => onOpenInquiry('Workout Timings & Batches')}
                  className="hover:text-white transition-colors"
                >
                  Send Website Inquiry
                </button>
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EAB308] transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3 text-[#EAB308]" />
                  <span>Jaiswal Colony, Jagdalpur</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
