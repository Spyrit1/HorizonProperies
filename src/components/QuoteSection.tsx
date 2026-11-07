import React from 'react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-36 bg-[#0B0F17] text-white overflow-hidden text-center">
      {/* Subtle architectural ambient texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/images/hero_luxury_villa_twilight.jpg"
          alt=""
          className="w-full h-full object-cover filter grayscale contrast-125 scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0B0F17] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#C5A880] block mb-6">
          Architectural Philosophy
        </span>

        {/* Large Typography Statement */}
        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.2] text-balance">
          “More than a property. A place to belong.”
        </blockquote>

        <p className="mt-8 text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
          True luxury is not defined by excess, but by the quiet harmony of light, volume, and craftsmanship that endures for generations.
        </p>

        {/* Subtle Signature / Line divider */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="w-12 h-[1px] bg-[#C5A880]/40" />
          <span className="text-[11px] uppercase tracking-widest text-[#E2CCA6] font-light">
            Horizon Private Office
          </span>
          <div className="w-12 h-[1px] bg-[#C5A880]/40" />
        </div>
      </div>
    </section>
  );
};
