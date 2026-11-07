import React, { useState } from 'react';
import { ArrowDown, Search, Compass, ShieldCheck, MapPin, Building2, SlidersHorizontal } from 'lucide-react';

interface HeroProps {
  onSearch: (filter: { location: string; category: string; maxPrice: number }) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenConsultation }) => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState(35000000);

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location: selectedLocation,
      category: selectedCategory,
      maxPrice: selectedPrice,
    });
    // Smooth scroll to properties section
    const elem = document.getElementById('properties');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0B0F17]">
      {/* Background Architectural Image with Luxury Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_luxury_villa_twilight.jpg"
          alt="Architectural modern luxury villa illuminated at twilight with infinity pool"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Subtle top & bottom dark scrim for high contrast typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/90 via-[#0B0F17]/40 to-[#0B0F17]/90" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center mt-6 lg:mt-12">
        {/* Luxury Monogram Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#0B0F17]/60 backdrop-blur-md mb-6">
          <span className="text-[11px] font-sans font-medium tracking-[0.25em] text-[#E2CCA6] uppercase">
            Private Client Real Estate
          </span>
        </div>

        {/* Primary H1 Headline (Balanced type scale & no orphans) */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.1] max-w-4xl text-balance">
          Discover Exceptional Homes &amp; Investments
        </h1>

        {/* Refined Subtitle & Quote */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed text-balance">
          Where exceptional spaces become extraordinary living. Curated architectural estates in prime locations, represented with absolute discretion.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#properties"
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0B0F17] bg-[#C5A880] hover:bg-[#D4B58C] transition-all duration-200 rounded-full shadow-lg shadow-[#C5A880]/20 hover:shadow-xl hover:shadow-[#C5A880]/30 text-center active:scale-[0.98]"
          >
            Explore Properties
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white border border-white/30 hover:border-[#C5A880] hover:text-[#E2CCA6] transition-all duration-200 rounded-full bg-black/30 backdrop-blur-sm text-center"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Integrated Luxury Search Filter Strip */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-10">
        <form
          onSubmit={handleFilterSubmit}
          className="bg-[#0B0F17]/90 border border-white/15 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-2xl shadow-black/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center"
        >
          {/* Location Picker */}
          <div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
            <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
            <div className="flex-1 text-left">
              <label htmlFor="hero-location" className="block text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Location
              </label>
              <select
                id="hero-location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-transparent text-xs text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-[#121824] text-white">All Prime Locations</option>
                <option value="Austin" className="bg-[#121824] text-white">Austin, Texas</option>
                <option value="Los Angeles" className="bg-[#121824] text-white">Los Angeles, CA</option>
                <option value="New York" className="bg-[#121824] text-white">New York, NY</option>
                <option value="Aspen" className="bg-[#121824] text-white">Aspen, Colorado</option>
              </select>
            </div>
          </div>

          {/* Property Type */}
          <div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
            <Building2 className="w-4 h-4 text-[#C5A880] shrink-0" />
            <div className="flex-1 text-left">
              <label htmlFor="hero-category" className="block text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Property Type
              </label>
              <select
                id="hero-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent text-xs text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-[#121824] text-white">All Residences</option>
                <option value="waterfront" className="bg-[#121824] text-white">Waterfront Villas</option>
                <option value="villas" className="bg-[#121824] text-white">Modern Villas</option>
                <option value="penthouses" className="bg-[#121824] text-white">Sky Penthouses</option>
                <option value="estates" className="bg-[#121824] text-white">Architectural Estates</option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
            <SlidersHorizontal className="w-4 h-4 text-[#C5A880] shrink-0" />
            <div className="flex-1 text-left">
              <label htmlFor="hero-price" className="block text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Price Cap: ${(selectedPrice / 1000000).toFixed(0)}M
              </label>
              <input
                id="hero-price"
                type="range"
                min="10000000"
                max="35000000"
                step="2500000"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(Number(e.target.value))}
                className="w-full accent-[#C5A880] cursor-pointer h-1.5 bg-white/20 rounded-lg"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#C5A880] hover:bg-[#D4B58C] text-[#0B0F17] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#0B0F17]" />
            <span>Search Portfolio</span>
          </button>
        </form>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div className="relative z-10 flex justify-center mt-6">
        <a
          href="#about"
          className="text-slate-400 hover:text-white transition-colors p-2 rounded-full border border-white/10 hover:border-white/30"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
