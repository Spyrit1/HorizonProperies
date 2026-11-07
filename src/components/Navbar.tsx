import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl shadow-black/20'
            : 'bg-gradient-to-b from-[#0B0F17]/80 via-[#0B0F17]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              className="group flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded"
              aria-label="Horizon Properties Home"
            >
              {/* Minimal geometric architectural logo mark */}
              <div className="w-8 h-8 rounded-sm border border-[#C5A880]/60 flex items-center justify-center p-1 bg-[#121824]/80 group-hover:border-[#C5A880] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5 text-[#C5A880]">
                  <path d="M3 21h18M6 21V9l6-5 6 5v12M10 21V13h4v8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.2em] font-medium uppercase text-white group-hover:text-[#E2CCA6] transition-colors leading-tight">
                  HORIZON
                </span>
                <span className="text-[9px] tracking-[0.3em] font-sans font-light uppercase text-[#C5A880] leading-none">
                  PROPERTIES
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Single-line, unboxed text) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-normal text-slate-300" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 hover:text-white transition-colors relative py-1 text-[13px] tracking-wide uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action, Phone Link & PWA Install */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <PWAInstallButton variant="nav" />

              <a
                href="tel:5552467890"
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 border border-white/20 rounded-full hover:border-[#C5A880] hover:text-[#E2CCA6] transition-colors whitespace-nowrap bg-black/20 backdrop-blur-sm"
                aria-label="Call Horizon Properties directly at (555) 246-7890"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="tabular-nums tracking-wide">(555) 246-7890</span>
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B0F17] bg-[#C5A880] hover:bg-[#D4B58C] rounded-full transition-all duration-200 shadow-md shadow-[#C5A880]/15 hover:shadow-lg hover:shadow-[#C5A880]/25 whitespace-nowrap active:scale-[0.98]"
              >
                Inquire
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="tel:5552467890"
                className="p-2 text-[#C5A880] border border-white/15 rounded-full hover:border-[#C5A880]"
                aria-label="Call concierge"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#C5A880] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col justify-between bg-[#0B0F17] text-white pt-24 px-6 pb-8 transition-opacity duration-300">
          <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif tracking-wide text-slate-200 hover:text-[#C5A880] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-6 space-y-4 border-t border-white/10">
            <div className="flex justify-center">
              <PWAInstallButton variant="banner" />
            </div>
            <a
              href="tel:5552467890"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium border border-white/20 rounded-lg text-slate-200"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span className="tabular-nums">(555) 246-7890</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0F17] bg-[#C5A880] rounded-lg shadow-md"
            >
              Private Consultation
            </button>
            <p className="text-center text-xs text-slate-500 tracking-wider">
              NEW YORK · AUSTIN · LOS ANGELES · LONDON
            </p>
          </div>
        </div>
      )}
    </>
  );
};
