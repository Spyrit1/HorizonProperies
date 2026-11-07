import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Maximize2, ArrowUpRight } from 'lucide-react';
import { Property, PROPERTIES } from '../data/properties';

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
  filteredCategory?: string;
  filteredLocation?: string;
  maxPriceLimit?: number;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onSelectProperty,
  filteredCategory = 'all',
  filteredLocation = 'all',
  maxPriceLimit = 35000000,
}) => {
  const [activeTab, setActiveTab] = useState<string>(filteredCategory);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Sync activeTab if filteredCategory prop changes
  React.useEffect(() => {
    if (filteredCategory !== 'all') {
      setActiveTab(filteredCategory);
    }
  }, [filteredCategory]);

  const categories = [
    { id: 'all', label: 'All Residences' },
    { id: 'waterfront', label: 'Waterfront Villas' },
    { id: 'villas', label: 'Modern Villas' },
    { id: 'penthouses', label: 'Sky Penthouses' },
    { id: 'estates', label: 'Architectural Estates' },
  ];

  // Filter properties
  const displayedProperties = PROPERTIES.filter((p) => {
    const matchesCategory = activeTab === 'all' || p.category === activeTab;
    const matchesLocation = filteredLocation === 'all' || p.location.toLowerCase().includes(filteredLocation.toLowerCase());
    const matchesPrice = p.rawPrice <= maxPriceLimit;
    return matchesCategory && matchesLocation && matchesPrice;
  });

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % (displayedProperties.length || 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + (displayedProperties.length || 1)) % (displayedProperties.length || 1));
  };

  return (
    <section id="properties" className="py-24 bg-white text-[#111827] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AC8A5C] block mb-2">
            Featured
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B0F17] tracking-tight">
            Featured Properties
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 font-light max-w-xl mx-auto">
            A curated collection of residences distinguished by exceptional architecture, prime positions, and bespoke craftsmanship.
          </p>
        </div>

        {/* Interactive Filter Tabs (functional segmented buttons) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveTab(cat.id);
                setCarouselIndex(0);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === cat.id
                  ? 'bg-[#0B0F17] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Properties Grid with Carousel Controls */}
        <div className="mt-12 relative">
          {/* Circular Navigation Buttons (matching the reference design arrows) */}
          <div className="flex items-center justify-between absolute -top-14 right-0 gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#0B0F17] flex items-center justify-center shadow-sm hover:shadow transition-all disabled:opacity-40"
              aria-label="Previous property"
              disabled={displayedProperties.length <= 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#0B0F17] flex items-center justify-center shadow-sm hover:shadow transition-all disabled:opacity-40"
              aria-label="Next property"
              disabled={displayedProperties.length <= 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {displayedProperties.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-500 text-sm">No residences match your active filter criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('all');
                }}
                className="mt-4 px-4 py-2 bg-[#0B0F17] text-white text-xs font-semibold rounded-lg uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProperties.map((property, idx) => (
                <article
                  key={property.id}
                  className="group relative bg-[#FAF9F5] rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* High Quality Property Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Unboxed category badge and status */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="text-[11px] font-sans font-medium uppercase tracking-widest text-[#E2CCA6] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                        {property.categoryLabel}
                      </span>
                      <span className="text-[11px] text-slate-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                        {property.yearBuilt}
                      </span>
                    </div>

                    {/* Price and Title Overlay inside media bottom */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-serif text-2xl font-medium tracking-tight text-white block tabular-nums">
                        {property.price}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Editorial Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-[#0B0F17] group-hover:text-[#AC8A5C] transition-colors leading-snug">
                        {property.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-light leading-relaxed">
                        {property.shortDesc}
                      </p>
                    </div>

                    {/* Key Specs Row */}
                    <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-slate-400" />
                        <span className="tabular-nums font-medium text-slate-700">{property.beds}</span> Beds
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-3.5 h-3.5 text-slate-400" />
                        <span className="tabular-nums font-medium text-slate-700">{property.baths}</span> Baths
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                        <span className="tabular-nums font-medium text-slate-700">{property.sqft}</span>
                      </div>
                    </div>

                    {/* View Property CTA */}
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => onSelectProperty(property)}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white hover:bg-[#0B0F17] text-[#0B0F17] hover:text-white border border-slate-300 hover:border-[#0B0F17] transition-all duration-200 group/btn shadow-sm"
                      >
                        <span>View Residence</span>
                        <ArrowUpRight className="w-4 h-4 text-[#AC8A5C] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
