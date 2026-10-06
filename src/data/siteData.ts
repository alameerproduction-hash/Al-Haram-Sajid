import { INLINE_IMAGES } from './inlineImages';

export type PageId =
  | 'home'
  | 'about'
  | 'umrah'
  | 'tours'
  | 'services'
  | 'why-choose-us'
  | 'gallery'
  | 'reviews'
  | 'contact'
  | 'book'
  | 'admin';

export const IMAGES = {
  heroHaram: INLINE_IMAGES.heroHaram,
  madinahMosque: INLINE_IMAGES.madinahMosque,
  umrahSanctuary: INLINE_IMAGES.umrahSanctuary,
  luxuryHospitality: INLINE_IMAGES.luxuryHospitality,
  arabianOasis: INLINE_IMAGES.arabianOasis,
  ceoPortrait: INLINE_IMAGES.ceoPortrait,
};

export const OFFICE_LOCATION = {
  city: 'Gujranwala, Punjab, Pakistan',
  shortCity: 'Gujranwala, Pakistan',
  googleMapsUrl: 'https://maps.app.goo.gl/gYJr1yp4XncCRaAf6',
  embedMapUrl:
    'https://maps.google.com/maps?q=Al%20Haram%20Travels%20%26%20Tours%20Gujranwala%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed',
};

export interface ContactNumber {
  display: string;
  raw: string;
  whatsappIntl: string;
  telHref: string;
  whatsappHref: string;
  label: string;
}

export const CONTACT_NUMBERS: ContactNumber[] = [
  {
    display: '0321-7455558',
    raw: '03217455558',
    whatsappIntl: '923217455558',
    telHref: 'tel:+923217455558',
    whatsappHref:
      'https://wa.me/923217455558?text=Assalamu%20Alaikum%20Al%20Haram%20Travels%20%26%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.',
    label: 'Primary Line & WhatsApp',
  },
  {
    display: '0326-7455558',
    raw: '03267455558',
    whatsappIntl: '923267455558',
    telHref: 'tel:+923267455558',
    whatsappHref:
      'https://wa.me/923267455558?text=Assalamu%20Alaikum%20Al%20Haram%20Travels%20%26%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.',
    label: 'Umrah & Tours Desk (Call & WhatsApp)',
  },
  {
    display: '0333-7455558',
    raw: '03337455558',
    whatsappIntl: '923337455558',
    telHref: 'tel:+923337455558',
    whatsappHref:
      'https://wa.me/923337455558?text=Assalamu%20Alaikum%20Al%20Haram%20Travels%20%26%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.',
    label: 'Executive Desk (Call & WhatsApp)',
  },
];

export interface SocialLinkItem {
  id: 'tiktok' | 'facebook' | 'youtube';
  name: string;
  handle: string;
  url: string;
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Sajid Kahloon Official',
    url: 'https://www.facebook.com/sajid.kahloon.971756',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@AlHaramTravels',
    url: 'https://vm.tiktok.com/ZS9D9o8b29hRc-gygEv/',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@sajidkahloonofficial8534',
    url: 'https://youtube.com/@sajidkahloonofficial8534?si=NiV7xlKjQl0W1YV9',
  },
];

export interface UmrahPackage {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  makkahStay: string;
  madinahStay: string;
  hotelCategory: string;
  transport: string;
  guidance: string;
  support: string;
  flightInfo: string;
  availabilityNote: string;
  image: string;
  highlights: string[];
}

export const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: 'executive-customized',
    name: 'Customized Package — Executive Proximity',
    subtitle: 'Tailored Individual & Couple Pilgrimage',
    duration: 'Flexible Duration (7, 10, 14, or 21 Days)',
    makkahStay: 'Customized Stay near Masjid al-Haram Courtyard',
    madinahStay: 'Customized Stay near Al-Masjid an-Nabawi',
    hotelCategory: 'Customized Selection (Premium / 5-Star / Suites Available)',
    transport: 'Private Executive Ground Transfers (Jeddah · Makkah · Madinah)',
    guidance: 'Dedicated Step-by-Step Umrah & Ziyarat Guidance',
    support: '24/7 Personal Travel Coordinator & On-Ground Assistance',
    flightInfo: 'Direct or Preferred Airline Routing from Pakistan',
    availabilityNote: 'Contact us for current availability and pricing.',
    image: IMAGES.heroHaram,
    highlights: [
      'Complete Umrah visa processing & documentation',
      'Personalized itinerary built around your preferred dates',
      'Private air-conditioned vehicle for Makkah & Madinah Ziyarat',
      'Flexible departure airports and airline selection',
    ],
  },
  {
    id: 'family-customized',
    name: 'Customized Package — Family Comfort',
    subtitle: 'Dedicated Arrangements for Families & Seniors',
    duration: 'Customized Duration Tailored to Family Schedule',
    makkahStay: 'Spacious Family Rooms with Easy Haram Access',
    madinahStay: 'Comfortable Family Accommodation near Markaziya',
    hotelCategory: 'Customized Hotel Category per Family Preference',
    transport: 'Comfortable Private Family Van / SUV Transfers',
    guidance: 'Family-Paced Ziyarat & Ritual Assistance',
    support: 'Dedicated Pre-Departure Briefing & Continuous Care',
    flightInfo: 'Coordinated Family Seating & Convenient Flight Timings',
    availabilityNote: 'Contact us for current availability and pricing.',
    image: IMAGES.madinahMosque,
    highlights: [
      'Wheelchair & senior-friendly transit planning upon request',
      'Interconnected or multi-bed family room coordination',
      'Guided visits to historical Islamic sites in Makkah & Madinah',
      'Attentive support from Gujranwala departure to return',
    ],
  },
  {
    id: 'group-customized',
    name: 'Customized Package — Organized Group Umrah',
    subtitle: 'Structured Spiritual Journey with Group Coordination',
    duration: 'Scheduled & Custom Group Departures (14 / 15 / 21 Days)',
    makkahStay: 'Organized Group Accommodation in Makkah',
    madinahStay: 'Organized Group Accommodation in Madinah',
    hotelCategory: 'Customized Group Hotel Tiers (Economy Plus to Premium)',
    transport: 'Modern Air-Conditioned Luxury Group Coaches',
    guidance: 'Experienced Group Coordination & Ziyarat Arrangements',
    support: 'Full Team Assistance Before & Throughout the Journey',
    flightInfo: 'Group Airline Ticketing & Baggage Coordination',
    availabilityNote: 'Contact us for current availability and pricing.',
    image: IMAGES.umrahSanctuary,
    highlights: [
      'Synchronized visa, flight, and hotel check-in management',
      'Comprehensive pre-departure orientation in Gujranwala',
      'Complete Ziyarat tour of sacred landmarks in both Holy Cities',
      'Transparent communication and reliable group scheduling',
    ],
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export const UMRAH_SERVICES: ServiceItem[] = [
  {
    id: 'visa',
    number: '01',
    title: 'Umrah Visa Assistance',
    description: 'Professional guidance throughout the visa process.',
    details: 'Complete documentation verification, application submission, and timely visa processing with transparent updates at every stage.',
    iconName: 'FileCheck',
  },
  {
    id: 'flights',
    number: '02',
    title: 'Flight Booking',
    description: 'Travel planning and flight assistance.',
    details: 'Convenient routing options, preferred airlines, and coordinated departure schedules tailored to your travel timeline.',
    iconName: 'Plane',
  },
  {
    id: 'hotels',
    number: '03',
    title: 'Hotel Accommodation',
    description: 'Accommodation assistance in Makkah and Madinah.',
    details: 'Carefully arranged stays in Makkah and Madinah matched to your comfort preferences, family size, and proximity needs.',
    iconName: 'Building2',
  },
  {
    id: 'transport',
    number: '04',
    title: 'Transportation',
    description: 'Comfortable transportation arrangements.',
    details: 'Reliable airport pick-up, inter-city transfers between Makkah and Madinah, and local ground transport in modern vehicles.',
    iconName: 'Car',
  },
  {
    id: 'ziyarat',
    number: '05',
    title: 'Ziyarat',
    description: 'Guidance and arrangements for important Islamic sites.',
    details: 'Organized visits to sacred and historical Islamic landmarks in Makkah and Madinah with respectful scheduling.',
    iconName: 'Compass',
  },
  {
    id: 'assistance',
    number: '06',
    title: 'Travel Assistance',
    description: 'Dedicated support before and during your journey.',
    details: 'Pre-departure orientation, travel checklists, and responsive assistance while you are traveling so you can focus on worship.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'family-umrah',
    number: '07',
    title: 'Family Umrah Planning',
    description: 'Customized arrangements for families.',
    details: 'Bespoke itineraries designed around children, elders, and family privacy with flexible pacing and private transfers.',
    iconName: 'Users',
  },
  {
    id: 'group-umrah',
    number: '08',
    title: 'Group Umrah',
    description: 'Professional group travel coordination.',
    details: 'Well-structured group departures with unified logistics, shared spiritual camaraderie, and attentive coordination.',
    iconName: 'Globe',
  },
];

export interface TourCategory {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export const TOUR_CATEGORIES: TourCategory[] = [
  {
    id: 'international-tours',
    title: 'International Tours',
    category: 'Global Destinations',
    description: 'Curated international travel itineraries across the Middle East, Turkey, Malaysia, and beyond with end-to-end planning.',
    image: IMAGES.arabianOasis,
    features: ['Custom multi-city routing', 'Complete visa & flight coordination', 'Selected quality accommodations'],
  },
  {
    id: 'family-tours',
    title: 'Family Tours',
    category: 'Private & Comfortable',
    description: 'Relaxed, family-friendly vacation planning designed around comfort, safety, and memorable shared experiences.',
    image: IMAGES.luxuryHospitality,
    features: ['Flexible daily schedules', 'Family suite bookings', 'Private airport & sightseeing transfers'],
  },
  {
    id: 'group-tours',
    title: 'Group Tours',
    category: 'Coordinated Departures',
    description: 'Professionally managed group travel for corporate delegations, community organizations, and extended families.',
    image: IMAGES.umrahSanctuary,
    features: ['Dedicated group logistics', 'Coordinated ticketing & stays', 'Clear, transparent communication'],
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking',
    category: 'Hospitality',
    description: 'Reliable hotel reservation assistance in Saudi Arabia and international destinations tailored to your preferences.',
    image: IMAGES.luxuryHospitality,
    features: ['Verified accommodation options', 'Family & executive room types', 'Seamless check-in documentation'],
  },
  {
    id: 'flight-booking',
    title: 'Flight Booking',
    category: 'Air Travel',
    description: 'Professional airline ticketing and route planning for domestic and international journeys.',
    image: IMAGES.heroHaram,
    features: ['Optimal transit connections', 'Group & family seat coordination', 'Date change & schedule support'],
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    category: 'Documentation',
    description: 'Structured visa file preparation and application guidance for Umrah and international travel destinations.',
    image: IMAGES.madinahMosque,
    features: ['Document checklist review', 'Application form preparation', 'Timely status updates'],
  },
  {
    id: 'transportation',
    title: 'Transportation',
    category: 'Ground Logistics',
    description: 'Pre-arranged airport transfers, inter-city vehicles, and private chauffeurs for smooth ground mobility.',
    image: IMAGES.arabianOasis,
    features: ['Private sedans, SUVs & vans', 'Luxury group coaches', 'Punctual airport meet-and-assist'],
  },
  {
    id: 'customized-plans',
    title: 'Customized Travel Plans',
    category: 'Bespoke Journeys',
    description: 'Tailor-made travel solutions combining Umrah with international stopovers or personalized holiday schedules.',
    image: IMAGES.umrahSanctuary,
    features: ['100% personalized dates', 'Tailored budget & comfort level', 'One-on-one travel consultation'],
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Makkah' | 'Madinah' | 'Umrah' | 'Travel' | 'Tours';
  caption: string;
  location: string;
  image: string;
  aspect: 'wide' | 'tall' | 'standard';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Masjid al-Haram at Golden Hour',
    category: 'Makkah',
    caption: 'Peaceful evening light over the Holy Kaaba and marble courtyard in Makkah.',
    location: 'Makkah al-Mukarramah',
    image: IMAGES.heroHaram,
    aspect: 'wide',
  },
  {
    id: 'gal-2',
    title: 'Al-Masjid an-Nabawi Courtyard',
    category: 'Madinah',
    caption: 'The serene plaza and iconic architecture of the Prophet’s Mosque at twilight.',
    location: 'Al-Madinah al-Munawwarah',
    image: IMAGES.madinahMosque,
    aspect: 'standard',
  },
  {
    id: 'gal-3',
    title: 'Sanctuary Archways & Spiritual Reflection',
    category: 'Umrah',
    caption: 'Timeless Islamic architectural geometry framing the sacred pilgrimage sanctuary.',
    location: 'Masjid al-Haram',
    image: IMAGES.umrahSanctuary,
    aspect: 'tall',
  },
  {
    id: 'gal-4',
    title: 'Executive Hospitality & Comfort',
    category: 'Travel',
    caption: 'Refined Arabian hospitality interiors designed for restful stays during your journey.',
    location: 'Makkah & Madinah Hospitality',
    image: IMAGES.luxuryHospitality,
    aspect: 'standard',
  },
  {
    id: 'gal-5',
    title: 'Historic Arabian Heritage & Oasis',
    category: 'Tours',
    caption: 'Exploring timeless heritage landscapes and cultural destinations across the region.',
    location: 'Arabian Peninsula',
    image: IMAGES.arabianOasis,
    aspect: 'wide',
  },
  {
    id: 'gal-6',
    title: 'Guided Pilgrimage Preparation',
    category: 'Umrah',
    caption: 'Organized travel planning ensuring peace of mind for individuals, families, and groups.',
    location: 'Makkah & Madinah',
    image: IMAGES.heroHaram,
    aspect: 'standard',
  },
];
