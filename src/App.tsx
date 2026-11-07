/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProperties } from './components/FeaturedProperties';
import { CallToActionBanner } from './components/CallToActionBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { Property } from './data/properties';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [contactPropertyInterest, setContactPropertyInterest] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState<{
    location: string;
    category: string;
    maxPrice: number;
  }>({
    location: 'all',
    category: 'all',
    maxPrice: 35000000,
  });

  const handleOpenConsultation = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireFromModal = (propertyTitle: string) => {
    setContactPropertyInterest(propertyTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setContactPropertyInterest(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProperties = () => {
    const propElem = document.getElementById('properties');
    if (propElem) {
      propElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSearch = (filters: { location: string; category: string; maxPrice: number }) => {
    setSearchFilter(filters);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111827] flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onSearch={handleHeroSearch}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 2. About Section ("Who We Are") */}
        <About onExploreProperties={handleExploreProperties} />

        {/* 3. Featured Properties Showcase */}
        <FeaturedProperties
          onSelectProperty={(property) => setSelectedProperty(property)}
          filteredCategory={searchFilter.category}
          filteredLocation={searchFilter.location}
          maxPriceLimit={searchFilter.maxPrice}
        />

        {/* 4. Ready To Find Perfect Property Banner */}
        <CallToActionBanner onContactClick={handleOpenConsultation} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Services */}
        <Services onSelectService={handleSelectService} />

        {/* 7. Typography-Focused Luxury Quote Section */}
        <QuoteSection />

        {/* 8. Contact Section & Private Consultation Booking */}
        <ContactSection initialPropertyInterest={contactPropertyInterest} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onInquire={handleInquireFromModal}
      />
    </div>
  );
}
