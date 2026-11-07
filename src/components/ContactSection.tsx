import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialPropertyInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPropertyInterest = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: initialPropertyInterest ? `Property: ${initialPropertyInterest}` : 'General Acquisition Inquiry',
    message: initialPropertyInterest
      ? `I would like to request a private viewing and confidential prospectus for ${initialPropertyInterest}.`
      : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if initialPropertyInterest changes
  React.useEffect(() => {
    if (initialPropertyInterest) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: `Property: ${initialPropertyInterest}`,
        message: `I would like to request a private viewing and confidential prospectus for ${initialPropertyInterest}.`,
      }));
    }
  }, [initialPropertyInterest]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for private viewings';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details on your requirements';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF9F5] text-[#111827] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#AC8A5C] block mb-2">
                Private Consultation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B0F17] tracking-tight leading-tight">
                Connect With Our Private Office
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Whether you seek private off-market property acquisition, confidential disposition of a landmark estate, or multi-market wealth consultation, our managing directors respond with immediate discretion.
              </p>

              {/* Direct Reachability Cards */}
              <div className="mt-8 space-y-4">
                <a
                  href="tel:5552467890"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#AC8A5C] transition-colors group shadow-sm"
                  aria-label="Direct phone line"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F5] flex items-center justify-center text-[#AC8A5C] group-hover:bg-[#0B0F17] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      Direct Concierge Line
                    </span>
                    <span className="text-sm font-semibold text-[#0B0F17] group-hover:text-[#AC8A5C] transition-colors tabular-nums">
                      (555) 246-7890
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:concierge@horizonproperties.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#AC8A5C] transition-colors group shadow-sm"
                  aria-label="Email private office"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F5] flex items-center justify-center text-[#AC8A5C] group-hover:bg-[#0B0F17] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      Confidential Inquiries
                    </span>
                    <span className="text-sm font-semibold text-[#0B0F17] group-hover:text-[#AC8A5C] transition-colors">
                      concierge@horizonproperties.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Office Locations */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#AC8A5C]" />
                  <span>Private Office Locations</span>
                </h3>

                <div className="grid grid-cols-2 gap-4 text-xs text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-900 block">New York</span>
                    <span>450 Park Avenue, 28th Fl</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Austin</span>
                    <span>300 Colorado Street, 19th Fl</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Los Angeles</span>
                    <span>9465 Wilshire Blvd, Beverly Hills</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">London</span>
                    <span>14 Berkeley Square, Mayfair</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-[#AC8A5C]" />
                  <span>Client Hours: Mon – Fri 08:30 – 18:30 EST · Dedicated 24/7 emergency desk for active escrow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Viewing Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#0B0F17]">
                    Inquiry Received
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-medium text-slate-900">{formData.name}</span>. A senior partner from Horizon Private Office will review your requirements and reach out within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'General Acquisition Inquiry',
                        message: '',
                      });
                    }}
                    className="mt-8 px-6 py-3 bg-[#0B0F17] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#1D2432] transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0B0F17]">
                      Schedule a Private Consultation
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-light">
                      Please enter your contact details to arrange a confidential discussion.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#FAF9F5] text-sm text-[#0B0F17] focus:outline-none focus:ring-2 focus:ring-[#AC8A5C]/40 transition-colors ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="eleanor@domain.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border bg-[#FAF9F5] text-sm text-[#0B0F17] focus:outline-none focus:ring-2 focus:ring-[#AC8A5C]/40 transition-colors ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border bg-[#FAF9F5] text-sm text-[#0B0F17] focus:outline-none focus:ring-2 focus:ring-[#AC8A5C]/40 transition-colors ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="contact-inquiry-type" className="block text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5">
                      Nature of Inquiry
                    </label>
                    <select
                      id="contact-inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#FAF9F5] text-sm text-[#0B0F17] focus:outline-none focus:ring-2 focus:ring-[#AC8A5C]/40"
                    >
                      <option value="General Acquisition Inquiry">General Acquisition Inquiry</option>
                      <option value="Private Property Disposition">Selling / Marketing an Estate</option>
                      <option value="Off-Market Portfolio Access">Off-Market Portfolio Access</option>
                      <option value="Architectural Advisory">Architectural &amp; Development Advisory</option>
                      <option value="Property: Lakeside Modern Villa">Property: Lakeside Modern Villa (Austin)</option>
                      <option value="Property: The Bel-Air Coastal Pavilion">Property: Bel-Air Coastal Pavilion (California)</option>
                      <option value="Property: The Sky Glass Penthouse">Property: Sky Glass Penthouse (Tribeca NY)</option>
                      <option value="Property: Aspen Ridge Sanctuary">Property: Aspen Ridge Sanctuary (Colorado)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-wider text-slate-700 mb-1.5">
                      Specific Requirements or Target Timeline *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Please mention your preferred location, architectural aesthetic, or timing requirements..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#FAF9F5] text-sm text-[#0B0F17] focus:outline-none focus:ring-2 focus:ring-[#AC8A5C]/40 transition-colors ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#0B0F17] hover:bg-[#1D2432] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-[0.99] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#C5A880]" />
                          <span>Submit Confidential Request</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-3 font-light">
                      Protected by strict fiduciary non-disclosure. We never disclose or share client information.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
