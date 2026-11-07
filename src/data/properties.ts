export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: string;
  rawPrice: number;
  category: 'waterfront' | 'penthouses' | 'estates' | 'villas';
  categoryLabel: string;
  beds: number;
  baths: number;
  sqft: string;
  lotSize: string;
  yearBuilt: number;
  featured: boolean;
  image: string;
  gallery: string[];
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  architect: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 'lakeside-modern-villa',
    title: 'Lakeside Modern Villa',
    location: 'Lake Austin, Austin, Texas, USA',
    city: 'Austin, TX',
    price: '$12,450,000',
    rawPrice: 12450000,
    category: 'waterfront',
    categoryLabel: 'Waterfront Villa',
    beds: 5,
    baths: 6.5,
    sqft: '8,420 sq ft',
    lotSize: '1.45 Acres',
    yearBuilt: 2024,
    featured: true,
    image: '/images/property_lakeside_modern_villa.jpg',
    gallery: [
      '/images/property_lakeside_modern_villa.jpg',
      '/images/hero_luxury_villa_twilight.jpg',
      '/images/property_coastal_glass_residence.jpg',
    ],
    shortDesc: 'Cantilevered architectural masterpiece with floor-to-ceiling glass, direct private boat dock, and heated horizon pool overlooking Lake Austin.',
    fullDesc: 'Poised gracefully on the limestone cliffs of Lake Austin, this extraordinary residence balances warm cedar millwork, honed Texas limestone, and monumental glass expanses. Designed for seamless indoor-outdoor living, the main pavilion opens directly to an expansive travertine terrace with a heated infinity pool, outdoor fire lounge, and private deep-water boat slip.',
    highlights: [
      'Private 2-slip boat dock with hydraulic lift',
      'Heated horizon infinity-edge swimming pool & spa',
      '800-bottle climate-controlled wine cellar',
      'Automated motorized glass curtain walls by Sky-Frame',
      'Primary retreat with dual spa baths and private lakeside deck',
      'LEED Platinum certified with discreet solar integration'
    ],
    architect: 'Olson Kundig Architects'
  },
  {
    id: 'coastal-glass-residence',
    title: 'The Bel-Air Coastal Pavilion',
    location: 'Pacific Palisades, California, USA',
    city: 'Los Angeles, CA',
    price: '$18,900,000',
    rawPrice: 18900000,
    category: 'villas',
    categoryLabel: 'Modern Villa',
    beds: 6,
    baths: 8,
    sqft: '9,850 sq ft',
    lotSize: '0.88 Acres',
    yearBuilt: 2025,
    featured: true,
    image: '/images/property_coastal_glass_residence.jpg',
    gallery: [
      '/images/property_coastal_glass_residence.jpg',
      '/images/hero_luxury_villa_twilight.jpg',
      '/images/property_penthouse_skyline_dusk.jpg',
    ],
    shortDesc: 'Sculptural two-story oceanfront retreat framed by lush palms, Italian travertine terraces, and panoramic Pacific horizon views.',
    fullDesc: 'Engineered as an ethereal sanctuary above the Pacific coastline, this modern pavilion features museum-quality finishes, black steel mullions, and organic cedar louvers. Lush subtropical landscape architecture frames a private lawn, zero-edge reflection pool, and bespoke outdoor dining loggia crafted for sunset entertaining.',
    highlights: [
      'Unobstructed 180-degree Pacific ocean vistas',
      'Private zero-edge lap pool and submerged sun lounger shelf',
      'Custom Boffi kitchen with Gaggenau 400 series appliances',
      'Four-car gallery garage with turntable and EV superchargers',
      'Dedicated wellness wing with sauna, steam room, and cold plunge',
      'Lutron HomeWorks QSX lighting and shading system'
    ],
    architect: 'Marmol Radziner'
  },
  {
    id: 'tribeca-crown-penthouse',
    title: 'The Sky Glass Penthouse',
    location: 'Tribeca, New York City, USA',
    city: 'New York, NY',
    price: '$24,750,000',
    rawPrice: 24750000,
    category: 'penthouses',
    categoryLabel: 'Sky Penthouse',
    beds: 4,
    baths: 5.5,
    sqft: '6,600 sq ft',
    lotSize: '2,200 sq ft Terrace',
    yearBuilt: 2024,
    featured: true,
    image: '/images/property_penthouse_skyline_dusk.jpg',
    gallery: [
      '/images/property_penthouse_skyline_dusk.jpg',
      '/images/hero_luxury_villa_twilight.jpg',
      '/images/property_lakeside_modern_villa.jpg',
    ],
    shortDesc: 'A triumph of vertical architecture spanning a full private floor with wraparound terrace, outdoor fire lounge, and panoramic skyline vistas.',
    fullDesc: 'Rising majestically above Manhattan historic Tribeca district, this full-floor duplex penthouse features soaring 14-foot ceilings, book-matched Calacatta marble slab fireplaces, and seamless access to a heated outdoor terrace overlooking the Hudson River and iconic skyline silhouettes.',
    highlights: [
      'Direct private key-locked elevator access',
      '2,200 sq ft wraparound landscaped terrace with linear fire pit',
      'Bespoke Italian walnut cabinetry & marble island',
      'Primary suite wing with dual dressing suites & soaking tub with skyline views',
      'State-of-the-art Crestron automation & acoustic insulation',
      'Full white-glove building services, concierge, and valet parking'
    ],
    architect: 'David Chipperfield Architects'
  },
  {
    id: 'aspen-zenith-estate',
    title: 'Aspen Ridge Sanctuary',
    location: 'Red Mountain, Aspen, Colorado, USA',
    city: 'Aspen, CO',
    price: '$29,500,000',
    rawPrice: 29500000,
    category: 'estates',
    categoryLabel: 'Architectural Estate',
    beds: 6,
    baths: 7.5,
    sqft: '11,200 sq ft',
    lotSize: '4.2 Acres',
    yearBuilt: 2023,
    featured: true,
    image: '/images/hero_luxury_villa_twilight.jpg',
    gallery: [
      '/images/hero_luxury_villa_twilight.jpg',
      '/images/property_lakeside_modern_villa.jpg',
      '/images/property_penthouse_skyline_dusk.jpg',
    ],
    shortDesc: 'Commanding high-alpine estate blending rough-hewn granite, blackened steel, and heated glass pavilions overlooking the snow-capped Rockies.',
    fullDesc: 'Positioned on the prestigious slopes of Red Mountain, this world-class residence captures panoramic views of Aspen Mountain and the Roaring Fork Valley. Designed with radiant-heated stone terraces, an indoor-outdoor infinity spa, private ski locker room, and a subterranean cinema suite.',
    highlights: [
      'Direct ski-in / ski-out access trail access',
      'Indoor-outdoor infinity-edge hot spring pool and cold plunge',
      'Subterranean 12-seat private Dolby Atmos screening room',
      'Executive home office suite with private terrace and mountain views',
      'Separate 2-bedroom guest pavilion with private entrance',
      'Geothermal climate regulation and backup micro-grid'
    ],
    architect: 'Charles Cunniffe Architects'
  }
];

export const AGENCY_STATS = [
  { value: '$4.8B+', label: 'Portfolio Transacted' },
  { value: '180+', label: 'Private Off-Market Sales' },
  { value: '99.4%', label: 'Discerning Client Retention' },
  { value: '24 Years', label: 'Bespoke Advisory Heritage' }
];

export const SERVICES = [
  {
    num: '01',
    title: 'Prestige Property Acquisition',
    desc: 'Unmatched access to private, non-MLS pocket listings and discreet off-market estates tailored to your architectural preferences.',
    features: ['Exclusive Off-Market Access', 'Bespoke Search Curation', 'Discreet Representation']
  },
  {
    num: '02',
    title: 'Global Marketing & Disposition',
    desc: 'International presentation through world-class architectural cinematography, editorial press placement, and direct outreach to qualified family offices.',
    features: ['Architectural Visual Production', 'Global Private Buyer Network', 'High-Profile Discretion']
  },
  {
    num: '03',
    title: 'Portfolio & Wealth Advisory',
    desc: 'Data-driven real estate portfolio structuring, yield optimization, and multi-generational real asset preservation for ultra-high-net-worth principals.',
    features: ['Asset Valuation & Capital Growth', 'Market Timing Analytics', 'Cross-Border Advisory']
  },
  {
    num: '04',
    title: 'Architectural & Design Consulting',
    desc: 'Pre-purchase zoning feasibility, heritage protection review, and partnership with world-renowned architects and landscape designers.',
    features: ['Site & View Feasibility', 'Top-Tier Architect Partnerships', 'Interior Concierge']
  }
];

export const ADVANTAGES = [
  {
    num: '01',
    title: 'Confidentiality & Discretion',
    desc: 'We operate under strict non-disclosure protocols, safeguarding your privacy and financial security at every stage of acquisition.'
  },
  {
    num: '02',
    title: 'Architectural Pedigree',
    desc: 'Every home in our curated collection is selected for rare architectural integrity, enduring craftsmanship, and irreplaceable site prominence.'
  },
  {
    num: '03',
    title: 'Private Off-Market Access',
    desc: 'More than 45% of our luxury transactions take place quietly off-market, granting our clients first access before public exposure.'
  },
  {
    num: '04',
    title: 'White-Glove Concierge',
    desc: 'From private jet charter viewings and legal closing coordination to post-acquisition estate management, we oversee every detail.'
  }
];
