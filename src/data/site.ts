/**
 * Single source of truth for every piece of copy on the site.
 * Edit here — the components only render what this file exports.
 */

export const business = {
  name: 'Prateek Enterprises',
  nameKannada: 'ಪ್ರತೀಕ್ ಎಂಟರ್‌ಪ್ರೈಸಸ್',
  tagline: 'Cook Food. Serve Love.',
  brand: 'Bharat Gas',
  parent: 'Bharat Petroleum',
  phone: '080 4205 2762',
  phoneHref: 'tel:+918042052762',
  /**
   * WHATSAPP NUMBER NOT SUPPLIED — set this before launch.
   *
   * The listed number above is a Bengaluru landline and cannot receive WhatsApp,
   * so it cannot be reused here. Put the team's mobile in international format:
   * country code + number, digits only, no "+" or spaces. e.g. '919876543210'.
   *
   * While this is empty, every WhatsApp button is hidden rather than rendering a
   * dead link — see `whatsappHref` in src/lib/contact.ts.
   */
  whatsapp: '',
  /* Bharat Gas national helpline (Urja WhatsApp booking) — printed on the showroom hoarding */
  helpline: '1800 22 4344',
  address: {
    line1: 'OMBR Layout, Banaswadi',
    line2: 'Bengaluru, Karnataka 560043',
    landmark: 'Located in CMR University (Satellite Campus — OMBR Layout)',
    full: 'OMBR Layout, Banaswadi, Bengaluru, Karnataka 560043',
  },
  mapsUrl: 'https://maps.google.com/?q=Prateek+Enterprises+OMBR+Layout+Banaswadi+Bengaluru',
  hours: [
    { days: 'Monday – Saturday', time: '9:30 am – 7:00 pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
  rating: { score: '3.2', count: '956' },
} as const

export const stats = [
  { value: 20, suffix: '+', label: 'Years distributing Bharat Gas' },
  { value: 40, suffix: '+', label: 'Commercial accounts served' },
  { value: 24, suffix: 'hr', label: 'Standard refill turnaround' },
  { value: 100, suffix: '%', label: 'BPCL-authorised supply' },
] as const

export const services = [
  {
    title: 'Domestic LPG Connections',
    body: 'New Bharat Gas connections, refills and 5kg MiniBharatGas cylinders for households across Banaswadi, OMBR Layout and the wider east Bengaluru belt. Bring your ID proof and take it home the same day.',
    image: '/images/delivery-staff.jpg',
    alt: 'Bharat Gas delivery staff wheeling a domestic LPG cylinder to a customer’s door',
  },
  {
    title: 'Commercial LPG Supply',
    body: 'Bulk 19kg and 47.5kg commercial cylinders for restaurants, cloud kitchens, hotels, hospitals, canteens and corporate campuses — on scheduled routes so your kitchen never runs dry mid-service.',
    image: '/images/truck-ub-city.jpg',
    alt: 'Bharat Gas commercial delivery truck parked outside UB City, Bengaluru',
  },
  {
    title: 'Customised Supply Plans',
    body: 'Tailored refill cycles built around your consumption — fixed delivery windows, buffer cylinder stock and consolidated monthly billing for multi-site operators.',
    image: '/images/truck-vidhana-soudha.jpg',
    alt: 'Bharat Gas truck on a Bengaluru road in front of Vidhana Soudha',
  },
] as const

export const strengths = [
  {
    icon: 'zap',
    title: 'Fast Response Team',
    body: 'Need an urgent refill? Our dispatch desk turns around emergency commercial requests the same working day, wherever you are on our route map.',
  },
  {
    icon: 'shield',
    title: 'Trained & Safety-Certified Crew',
    body: 'Every delivery hand is trained on BPCL safety protocol — leak checks, regulator fitting and correct cylinder handling on every single drop.',
  },
  {
    icon: 'truck',
    title: 'Owned Fleet Capacity',
    body: 'A dedicated fleet of GPS-tracked BharatBenz carriers keeps route efficiency high and on-time delivery consistent, even at peak demand.',
  },
] as const

/**
 * PLACEHOLDER TESTIMONIALS — replace before launch.
 * These are illustrative copy, not real customer reviews. Prateek Enterprises has 956
 * genuine Google reviews; pull real quotes from there (with the reviewer's name as it
 * appears publicly) rather than shipping these.
 */
export const testimonials = [
  {
    name: 'Placeholder — swap for a real Google review',
    date: 'Replace with review date',
    stars: 5,
    body: 'Placeholder text. Replace with a genuine customer review about the refill or delivery experience.',
  },
  {
    name: 'Placeholder — swap for a real Google review',
    date: 'Replace with review date',
    stars: 5,
    body: 'Placeholder text. Replace with a genuine customer review from a commercial account.',
  },
  {
    name: 'Placeholder — swap for a real Google review',
    date: 'Replace with review date',
    stars: 4,
    body: 'Placeholder text. Replace with a genuine customer review about the showroom or new connection process.',
  },
] as const

/**
 * CURRENT CLIENTELE — user to verify/trim before launch.
 * Names taken from the supply-request documents in ~/Downloads/Prateek.
 * Confirm each account is happy to be named publicly before this goes live.
 */
export const clients = [
  { name: 'Foxconn', sector: 'Manufacturing' },
  { name: 'Société Générale', sector: 'Corporate' },
  { name: 'Fidelity', sector: 'Corporate' },
  { name: 'Jayadev Memorial Rashtrotthana Hospital', sector: 'Healthcare' },
  { name: 'East Point', sector: 'Education' },
  { name: 'Chanakya', sector: 'Hospitality' },
  { name: 'Farmle Foods', sector: 'Food Processing' },
  { name: 'POPO Ventures', sector: 'Hospitality' },
  { name: 'Foodsta Kitchens', sector: 'Cloud Kitchen' },
  { name: 'Gigu Hospitality', sector: 'Hospitality' },
  { name: 'Hot Smoke Deli', sector: 'Restaurant' },
  { name: 'Udupi Upachar', sector: 'Restaurant' },
] as const

export const faqs = [
  {
    q: 'What areas do you deliver to?',
    a: 'We serve OMBR Layout, Banaswadi, Kalyan Nagar, Ramamurthy Nagar, HRBR Layout and the surrounding east Bengaluru neighbourhoods for domestic refills. Commercial accounts are served city-wide — call us with your location and we will confirm the route.',
  },
  {
    q: 'How do I book a Bharat Gas refill?',
    a: `Call us on ${business.phone}, or use the Bharat Gas Urja WhatsApp service — say "Hi" on ${business.helpline} to book and pay for a cylinder, check prices, or update your mobile number.`,
  },
  {
    q: 'What do I need for a new domestic connection?',
    a: 'Valid photo ID and address proof are enough to start. Visit the showroom in OMBR Layout and our team will complete the KYC and hand over the connection — the 5kg MiniBharatGas cylinder can be taken home on the spot.',
  },
  {
    q: 'Do you supply commercial 19kg cylinders to restaurants?',
    a: 'Yes. Commercial 19kg and 47.5kg cylinders are our core business — we already supply restaurants, cloud kitchens, hotels, hospital canteens and corporate cafeterias across Bengaluru on scheduled refill cycles.',
  },
  {
    q: 'Can you set up a fixed delivery schedule for our kitchen?',
    a: 'We can. Share your average weekly consumption and we will build a refill cycle with a buffer cylinder on site, fixed delivery windows that avoid your service hours, and consolidated monthly billing.',
  },
  {
    q: 'What are your showroom timings?',
    a: 'The showroom is open Monday to Saturday, 9:30 am to 7:00 pm, and closed on Sunday.',
  },
] as const

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#strength' },
  { label: 'Clients', href: '#clients' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Location', href: '#location' },
] as const
