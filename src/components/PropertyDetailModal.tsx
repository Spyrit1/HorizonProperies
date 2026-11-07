import React, { useState, useEffect } from 'react';
import { X, MapPin, Bed, Bath, Maximize2, Calendar, ShieldCheck, Share2, Check, ArrowRight, Building } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onInquire: (propertyTitle: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onInquire,
}) => {
  const [activeImage, setActiveImage] = useState<string>('');
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    if (property) {
      setActiveImage(property.image);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [property]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!property) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleInquireNow = () => {
    onInquire(property.title);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div
        className="relative bg-[#FAF9F5] text-[#111827] rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-slate-300/40 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Actions */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md"
            title="Share property"
            aria-label="Share property link"
          >
            {copiedShare ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md"
            aria-label="Close property details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {/* Main Visual Display */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
            <img
              src={activeImage || property.image}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Price tag & category */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#E2CCA6] font-medium block">
                  {property.categoryLabel}
                </span>
                <h2 id="property-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  {property.title}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs uppercase text-slate-300 block">Offered At</span>
                <span className="font-serif text-3xl font-medium text-white tabular-nums">
                  {property.price}
                </span>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2">
            {property.gallery.map((imgUrl, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(imgUrl)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  activeImage === imgUrl ? 'border-[#AC8A5C] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-[#AC8A5C]" /> Bedrooms
              </span>
              <span className="text-lg font-serif font-medium text-[#0B0F17] mt-1 tabular-nums">
                {property.beds} Suites
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-[#AC8A5C]" /> Bathrooms
              </span>
              <span className="text-lg font-serif font-medium text-[#0B0F17] mt-1 tabular-nums">
                {property.baths} Baths
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#AC8A5C]" /> Living Area
              </span>
              <span className="text-lg font-serif font-medium text-[#0B0F17] mt-1 tabular-nums">
                {property.sqft}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#AC8A5C]" /> Built / Lot
              </span>
              <span className="text-lg font-serif font-medium text-[#0B0F17] mt-1 tabular-nums">
                {property.yearBuilt} · {property.lotSize}
              </span>
            </div>
          </div>

          {/* Architectural Story & Narrative */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-medium text-[#0B0F17]">
                Architectural Narrative
              </h3>
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#AC8A5C]" />
                <span>Designed by {property.architect}</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-light">
              {property.fullDesc}
            </p>
          </div>

          {/* Signature Highlights */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B0F17] mb-4">
              Residence Highlights &amp; Private Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-[#AC8A5C] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry CTA Footer */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500">
                Discreet private showings arranged exclusively by appointment.
              </p>
              <p className="text-[11px] text-[#AC8A5C] font-medium mt-0.5">
                Represented by Horizon Private Office
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleInquireNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0B0F17] hover:bg-[#1D2432] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md group"
              >
                <span>Request Private Tour</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
