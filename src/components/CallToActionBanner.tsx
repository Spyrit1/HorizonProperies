import React from 'react';
import { KeyRound, ArrowRight } from 'lucide-react';

interface CallToActionBannerProps {
  onContactClick: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onContactClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative overflow-hidden bg-[#0F1D33] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Subtle background ambient light */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Side: Icon & Copy */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 relative z-10">
          <div className="w-14 h-14 rounded-full bg-[#182B48] border border-white/15 flex items-center justify-center shrink-0 shadow-inner">
            <KeyRound className="w-7 h-7 text-[#E2CCA6]" />
          </div>

          <div>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-white">
              Ready to Find Your Perfect Property?
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-slate-300 font-light max-w-xl">
              Let our private office advisors guide you to the right architectural home or generational investment.
            </p>
          </div>
        </div>

        {/* Right Side: Primary Action Button */}
        <div className="relative z-10 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1B365D] hover:bg-[#234574] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl group"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 text-[#E2CCA6] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
