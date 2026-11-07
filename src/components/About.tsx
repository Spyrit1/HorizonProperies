import React, { useState } from 'react';
import { ArrowRight, ChevronRight, X, Shield, Award, Users, CheckCircle2 } from 'lucide-react';
import { AGENCY_STATS } from '../data/properties';

interface AboutProps {
  onExploreProperties: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreProperties }) => {
  const [isHeritageModalOpen, setIsHeritageModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const showcaseImages = [
    {
      src: '/images/property_coastal_glass_residence.jpg',
      title: 'Pacific Coast Modern Pavilion',
      location: 'Palisades, California',
    },
    {
      src: '/images/property_lakeside_modern_villa.jpg',
      title: 'Lake Austin Architectural Retreat',
      location: 'Austin, Texas',
    },
    {
      src: '/images/property_penthouse_skyline_dusk.jpg',
      title: 'Tribeca Horizon Penthouse',
      location: 'New York, New York',
    },
  ];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % showcaseImages.length);
  };

  return (
    <section id="about" className="py-24 bg-[#FAF9F5] text-[#111827] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Brand Introduction */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Minimal Gold Kicker */}
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AC8A5C] mb-3">
              About Us
            </span>

            {/* Section H2 */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B0F17] tracking-tight leading-[1.15]">
              Who We Are
            </h2>

            {/* Editorial Body Text (Matching reference wording + refined depth) */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              At Horizon Properties, we connect people with extraordinary homes and smart investments. Integrity, transparency, and client satisfaction are at the heart of everything we do.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-500 font-light leading-relaxed">
              We represent architectural masterpieces, private waterfront compounds, and exclusive off-market portfolios with the highest standard of discretion and tailored fiduciary care.
            </p>

            {/* Action Button */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsHeritageModalOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#0B0F17] hover:bg-[#1D2432] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExploreProperties}
                className="text-xs font-semibold uppercase tracking-wider text-[#0B0F17] hover:text-[#AC8A5C] py-2 px-3 transition-colors"
              >
                View Collection
              </button>
            </div>

            {/* Proof Metrics Strip */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {AGENCY_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-medium text-[#0B0F17] tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-slate-500 font-normal mt-0.5 tracking-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase Card with Next Preview (Exact reference layout!) */}
          <div className="lg:col-span-7 relative">
            <div className="flex gap-4 sm:gap-6 items-stretch">
              {/* Primary Featured Card */}
              <div className="relative flex-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group">
                <img
                  src={showcaseImages[activeImageIndex].src}
                  alt={showcaseImages[activeImageIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#E2CCA6] font-medium block mb-1">
                    Architectural Highlight
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                    {showcaseImages[activeImageIndex].title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {showcaseImages[activeImageIndex].location}
                  </p>
                </div>
              </div>

              {/* Peek Card of Next Property with Carousel Arrow Button */}
              <div className="relative w-1/4 sm:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-slate-800 opacity-80 hover:opacity-100 transition-opacity hidden sm:block">
                <img
                  src={showcaseImages[(activeImageIndex + 1) % showcaseImages.length].src}
                  alt="Next architectural residence"
                  className="w-full h-full object-cover blur-[0.5px]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Floating Round Next Button (matching the reference UI) */}
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white text-[#0B0F17] hover:bg-[#E2CCA6] flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none"
                  aria-label="View next showcase property"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Carousel Switcher */}
            <div className="flex sm:hidden items-center justify-between mt-4">
              <span className="text-xs text-slate-500">
                {activeImageIndex + 1} of {showcaseImages.length} Residences
              </span>
              <button
                type="button"
                onClick={handleNextImage}
                className="flex items-center gap-1 text-xs font-semibold text-[#0B0F17] p-2"
              >
                <span>Next Residence</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More / Heritage Modal */}
      {isHeritageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 overflow-y-auto max-h-[90vh]">
            <button
              type="button"
              onClick={() => setIsHeritageModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#AC8A5C] block mb-2">
              Our Heritage &amp; Ethos
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0B0F17] mb-4">
              Building Enduring Value in Prime Real Estate
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Founded over two decades ago, Horizon Properties was conceived as an antidote to mass-market real estate brokerages. We operate as a boutique private office, purposefully limiting the number of clients we advise to deliver relentless focus, absolute confidentiality, and access to private off-market estates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 py-4 border-y border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl">
                <Shield className="w-5 h-5 text-[#AC8A5C] mb-2" />
                <h4 className="text-xs font-semibold text-slate-900">Total Discretion</h4>
                <p className="text-[11px] text-slate-500 mt-1">Rigorous NDAs and private transactions.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <Award className="w-5 h-5 text-[#AC8A5C] mb-2" />
                <h4 className="text-xs font-semibold text-slate-900">Architectural Rigor</h4>
                <p className="text-[11px] text-slate-500 mt-1">Only homes of timeless spatial caliber.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <Users className="w-5 h-5 text-[#AC8A5C] mb-2" />
                <h4 className="text-xs font-semibold text-slate-900">Fiduciary Care</h4>
                <p className="text-[11px] text-slate-500 mt-1">Uncompromising client-first representation.</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Whether curating a modernist lakefront sanctuary in Austin, a secluded oceanfront compound in California, or an iconic skyline penthouse in Manhattan, our team couples architectural appraisal expertise with proprietary wealth advisory.
            </p>

            <button
              type="button"
              onClick={() => setIsHeritageModalOpen(false)}
              className="w-full py-3 bg-[#0B0F17] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#1D2432] transition-colors"
            >
              Close Overview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
