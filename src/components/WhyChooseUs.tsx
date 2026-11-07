import React from 'react';
import { ADVANTAGES } from '../data/properties';
import { Shield, Sparkles, EyeOff, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [Shield, Sparkles, EyeOff, HeartHandshake];

  return (
    <section id="why-us" className="py-24 bg-[#FAF9F5] text-[#111827] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AC8A5C] block mb-2">
            Why Horizon
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B0F17] tracking-tight leading-tight">
            A Higher Standard of Real Estate Advisory
          </h2>
          <p className="mt-4 text-base text-slate-600 font-light max-w-2xl leading-relaxed">
            We operate with the rigor of a family wealth office and the aesthetic acuity of an architectural gallery. Here is why discerning buyers and sellers trust us with their most valuable assets.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={adv.num}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl text-[#C5A880] font-light">
                      {adv.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FAF9F5] flex items-center justify-center border border-slate-100">
                      <Icon className="w-4 h-4 text-[#AC8A5C]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#0B0F17] mb-3 leading-snug">
                    {adv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <span className="text-[10px] uppercase tracking-widest text-[#AC8A5C] font-semibold">
                    Fiduciary Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
