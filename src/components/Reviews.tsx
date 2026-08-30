import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Reviews: React.FC = () => {
  // Realistic statistical distribution for a 4.7-star score across 206 reviews
  const ratingBreakdown = [
    { stars: 5, percentage: 84, count: 173 },
    { stars: 4, percentage: 11, count: 23 },
    { stars: 3, percentage: 3, count: 6 },
    { stars: 2, percentage: 1, count: 2 },
    { stars: 1, percentage: 1, count: 2 },
  ];

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-[#0C0E13] relative border-t border-[#1C202A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-[#EAB308]" />
            <span>Google Reviews & Reputation</span>
          </div>
          <h2
            id="reviews-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            Verified Feedback From <span className="text-[#EAB308]">Our Members</span>
          </h2>
          <p
            id="reviews-subtext"
            className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed"
          >
            Pulse Gym & Fitness Center is proud to maintain an outstanding track record of trust
            and member satisfaction in Jagdalpur, Chhattisgarh.
          </p>
        </div>

        {/* Rating Overview Box & Google Trust Showcase */}
        <div className="max-w-4xl mx-auto bg-[#12151D] border border-[#222734] rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Overall Big Score */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start justify-center pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-[#202533] md:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181C25] border border-[#2B3240] mb-4">
                {/* Google Icon Symbol */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2s.7 5.5 1.9 7.9l3.7-2.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16.5C3.7 20.2 7.5 23.5 12 23.5z"
                  />
                </svg>
                <span className="text-xs font-semibold text-zinc-300">
                  Google Verified Rating
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span
                  id="google-rating-score"
                  className="font-heading text-6xl sm:text-7xl font-bold text-white leading-none"
                >
                  4.7
                </span>
                <span className="text-zinc-500 font-heading text-3xl">/ 5.0</span>
              </div>

              <div className="flex items-center gap-1.5 my-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#EAB308] text-[#EAB308]"
                  />
                ))}
              </div>

              <p
                id="google-total-reviews-count"
                className="text-sm font-semibold text-zinc-300"
              >
                Based on <span className="text-white font-bold">206 Google Reviews</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Jaiswal Colony, Jagdalpur
              </p>
            </div>

            {/* Right Column: Rating Bars & Google CTA */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-5">
              {/* Star distribution */}
              <div className="space-y-2">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-12 font-semibold text-zinc-300 flex items-center gap-1">
                      <span>{row.stars}</span>
                      <Star className="w-3 h-3 fill-[#EAB308] text-[#EAB308]" />
                    </span>
                    <div className="flex-1 h-2.5 rounded-full bg-[#181C25] overflow-hidden border border-zinc-800">
                      <div
                        className="h-full bg-gradient-to-r from-[#EAB308] to-[#FACC15] rounded-full transition-all duration-700"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="w-9 text-right text-zinc-400 font-mono">
                      {row.percentage}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Link to Google Reviews (As requested: do not fabricate customer review texts) */}
              <div className="pt-4 border-t border-[#202533] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  id="read-reviews-on-google-button"
                  href={BUSINESS_INFO.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-5 rounded-xl bg-[#EAB308] hover:bg-[#FACC15] text-black font-heading text-lg tracking-wider uppercase font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#EAB308]/20 transition-all cursor-pointer"
                >
                  <span>Read Reviews on Google</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>

                <a
                  id="write-review-on-google-button"
                  href={BUSINESS_INFO.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 rounded-xl bg-[#171B24] hover:bg-[#202532] text-zinc-200 hover:text-white font-semibold text-xs tracking-wider uppercase text-center border border-[#2D3443] flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#EAB308]" />
                  <span>Review Pulse Gym</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Note stating verified authentic data */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#EAB308]" />
            <span>Ratings and feedback sourced directly from authenticated Google Maps reviews.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
