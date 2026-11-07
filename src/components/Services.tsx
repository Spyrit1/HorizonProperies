import React from 'react';
import { SERVICES } from '../data/properties';
import { ArrowUpRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white text-[#111827] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AC8A5C] block mb-2">
              Our Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B0F17] tracking-tight">
              Bespoke Real Estate Advisory
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-500 font-light max-w-md">
            Delivering discreet, strategic representation across the lifecycle of luxury residential acquisitions and estate preservation.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="p-8 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-slate-200/80 hover:border-[#AC8A5C]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-light text-[#AC8A5C]">
                    {service.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                    Private Practice
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#0B0F17] mt-6 group-hover:text-[#AC8A5C] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 font-light leading-relaxed">
                  {service.desc}
                </p>

                {/* Service Features */}
                <div className="mt-6 space-y-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#AC8A5C]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B0F17] group-hover:text-[#AC8A5C] transition-colors"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#AC8A5C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
