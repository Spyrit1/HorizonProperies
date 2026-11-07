import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="bg-[#0B0F17] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm border border-[#C5A880]/60 flex items-center justify-center p-1 bg-[#121824]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5 text-[#C5A880]">
                  <path d="M3 21h18M6 21V9l6-5 6 5v12M10 21V13h4v8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.2em] font-medium uppercase text-white leading-tight">
                  HORIZON
                </span>
                <span className="text-[9px] tracking-[0.3em] font-sans font-light uppercase text-[#C5A880] leading-none">
                  PROPERTIES
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm pt-2">
              Discreet private real estate advisory presenting extraordinary architectural residences, waterfront sanctuaries, and off-market investment portfolios.
            </p>

            <div className="pt-2 text-xs text-[#C5A880] font-light">
              New York · Austin · Los Angeles · London
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E2CCA6] block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Curated Properties</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Who We Are</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Private Advisory</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">The Horizon Standard</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Private Consultation</a></li>
            </ul>
          </div>

          {/* Portfolio Categories */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E2CCA6] block mb-2">
              Collections
            </span>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li><a href="#properties" className="hover:text-white transition-colors">Waterfront Villas</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Skyline Penthouses</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Architectural Estates</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Alpine Retreats</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Private Pocket Listings</a></li>
            </ul>
          </div>

          {/* Newsletter / Private Catalogue Signup */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E2CCA6] block mb-1">
              The Private Catalogue
            </span>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Receive confidential quarterly briefings on unlisted prime properties and global market intelligence.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/5 border border-[#C5A880]/30 rounded-xl text-xs text-[#E2CCA6] flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You have been added to the private registry.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white/5 border border-white/15 px-3.5 py-2.5 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880] flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#C5A880] hover:bg-[#D4B58C] text-[#0B0F17] font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors flex items-center gap-1">
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors flex items-center gap-1">
                Instagram <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="https://architecturaldigest.com" target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors flex items-center gap-1">
                Editorial Press <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Legal & Copyright Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-light">
          <div>
            © {new Date().getFullYear()} Horizon Luxury Properties LLC. All rights reserved. Equal Housing Opportunity.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Representation</span>
            <span className="hover:text-slate-300 cursor-pointer">Fiduciary Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
