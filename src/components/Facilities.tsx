import React, { useState, useEffect, useCallback } from 'react';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
} from 'lucide-react';
import { FACILITIES } from '../data';
import { FacilityItem } from '../types';

export const Facilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Facilities' },
    { key: 'weight', label: 'Weight Training Area' },
    { key: 'floor', label: 'Workout Floor' },
    { key: 'equipment', label: 'Exercise & Training Gear' },
    { key: 'interior', label: 'Gym Interior' },
  ];

  const filteredItems = FACILITIES.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % FACILITIES.length : 0
    );
  }, [activeLightboxIndex]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + FACILITIES.length) % FACILITIES.length : 0
    );
  }, [activeLightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, showNext, showPrev]);

  return (
    <section
      id="facilities"
      className="py-20 sm:py-28 bg-[#0C0E13] relative border-t border-[#1C202A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#2B313E] text-xs font-semibold text-[#EAB308] uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Gym Gallery</span>
          </div>
          <h2
            id="facilities-headline"
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
          >
            Explore Our <span className="text-[#EAB308]">Facilities</span>
          </h2>
          <p
            id="facilities-subtext"
            className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed"
          >
            Take a look inside Pulse Gym & Fitness Center in Jaiswal Colony, Jagdalpur.
            A clean, well-spaced environment built with heavy iron, specialized equipment,
            and an authentic training atmosphere.
          </p>

          {/* Category Filter Tabs */}
          <div
            id="facilities-filter-tabs"
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                id={`filter-tab-${cat.key}`}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-[#EAB308] text-black shadow-md shadow-[#EAB308]/20'
                    : 'bg-[#14171F] text-zinc-300 border border-[#222734] hover:bg-[#1B202A] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: FacilityItem, index: number) => {
            const originalIndex = FACILITIES.findIndex((f) => f.id === item.id);

            return (
              <div
                key={item.id}
                id={`facility-card-${item.id}`}
                onClick={() => openLightbox(originalIndex)}
                className="group relative rounded-2xl overflow-hidden bg-[#12151D] border border-[#222734] hover:border-[#EAB308]/60 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Zoom indicator icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-200 opacity-0 group-hover:opacity-100 group-hover:text-[#EAB308] transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#0D1016]/90 backdrop-blur-md border border-[#262C3A] text-[11px] font-semibold text-[#EAB308] tracking-wider uppercase">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Info Box */}
                <div className="p-5">
                  <h3 className="font-heading text-2xl text-white uppercase tracking-wide group-hover:text-[#EAB308] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          id="facility-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Top Bar: Title, Counter & Close */}
          <div className="flex items-center justify-between z-10">
            <div>
              <span className="text-xs font-semibold text-[#EAB308] tracking-widest uppercase">
                Facility Preview
              </span>
              <h4 className="font-heading text-xl sm:text-2xl text-white uppercase">
                {FACILITIES[activeLightboxIndex].title}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400 font-mono">
                {activeLightboxIndex + 1} / {FACILITIES.length}
              </span>
              <button
                id="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close Lightbox"
                className="w-10 h-10 rounded-xl bg-[#181B22] border border-[#2B313E] text-zinc-300 hover:text-white flex items-center justify-center hover:bg-[#252A36] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Image Container with navigation */}
          <div className="relative flex-1 flex items-center justify-center py-4 my-auto max-h-[75vh]">
            <img
              id="lightbox-current-image"
              src={FACILITIES[activeLightboxIndex].imageUrl}
              alt={FACILITIES[activeLightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-zinc-800"
            />

            {/* Prev button */}
            <button
              id="lightbox-prev-btn"
              onClick={showPrev}
              aria-label="Previous Image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-black/70 border border-zinc-700/80 text-white flex items-center justify-center hover:bg-[#EAB308] hover:text-black hover:border-[#EAB308] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              id="lightbox-next-btn"
              onClick={showNext}
              aria-label="Next Image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-black/70 border border-zinc-700/80 text-white flex items-center justify-center hover:bg-[#EAB308] hover:text-black hover:border-[#EAB308] transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption & Navigation Hint */}
          <div className="text-center max-w-xl mx-auto z-10">
            <p className="text-sm text-zinc-300">
              {FACILITIES[activeLightboxIndex].description}
            </p>
            <p className="text-[11px] text-zinc-500 mt-2 font-mono">
              Use Left / Right arrow keys or click buttons to navigate • Press Esc to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
