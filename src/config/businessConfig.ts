import { BusinessConfig } from '../types';

/**
 * ============================================================================
 * PULSE GYM & FITNESS CENTER - CENTRALIZED BUSINESS CONFIGURATION
 * ============================================================================
 *
 * ALL business details, contact channels, social links, schedules, and team
 * profiles are managed here.
 *
 * IMPORTANT COMPLIANCE RULE:
 * - Phone numbers, email, social URLs, owner, trainers, specific timings,
 *   and specific prices are left empty/null unless verified from the client.
 * - When any field is populated, the UI dynamically and automatically displays
 *   the corresponding button, link, or section.
 * - When left empty, sections cleanly hide or present smart fallbacks (e.g.
 *   "Contact gym for current schedule" and "Inquire for membership plans").
 */
export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Pulse Gym & Fitness Center',
  tagline: 'Premier Strength & Conditioning Destination in Jagdalpur',
  type: 'Gym & Fitness Center',

  location: {
    colony: 'Jaiswal Colony',
    city: 'Jagdalpur',
    state: 'Chhattisgarh',
    pincode: '494001',
    country: 'India',
    addressLine: 'Jaiswal Colony, Jagdalpur, Chhattisgarh 494001',
    fullAddress: 'Jaiswal Colony, Jagdalpur, Chhattisgarh 494001, India',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Pulse+Gym+%26+Fitness+Center+Jaiswal+Colony+Jagdalpur+Chhattisgarh+494001',
    googleReviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=Pulse+Gym+%26+Fitness+Center+Jaiswal+Colony+Jagdalpur+Chhattisgarh+494001#reviews',
    embedMapQuery:
      'Pulse+Gym+and+Fitness+Center+Jaiswal+Colony+Jagdalpur+Chhattisgarh+494001',
  },

  rating: {
    score: 4.7,
    totalReviews: 206,
    source: 'Google Reviews',
    maxScore: 5.0,
  },

  // Contact information: Verified by client
  contact: {
    phone: '+91 62604 23468', // Enables 'Call Now' buttons across the site
    whatsapp: '+91 62604 23468', // Routes directly to Pulse Gym on WhatsApp
    email: '', // If set e.g. "info@pulsefitness.com", displays email contact
  },

  // Social media handles: Empty until verified
  social: {
    instagram: '', // If set e.g. "https://instagram.com/pulsegymajg", displays Instagram link
    facebook: '', // If set e.g. "https://facebook.com/pulsegymajg", displays Facebook link
    youtube: '', // If set e.g. "https://youtube.com/...", displays YouTube link
  },

  /**
   * OWNER / MANAGEMENT SECTION
   * Set to an OwnerProfile object if provided, or null to cleanly hide the section.
   */
  owner: null,

  /**
   * TRAINERS / TEAM SECTION
   * Populate with TrainerProfile items if provided, or leave as empty array []
   * to cleanly hide the section.
   */
  trainers: [],

  /**
   * SCHEDULE & TIMINGS SECTION
   * When hasSpecificSchedule is false, the website renders a smart schedule advisory
   * explaining morning and evening sessions, inviting members to inquire for today's batch slots.
   */
  schedule: {
    hasSpecificSchedule: false,
    generalNotice:
      'Pulse Gym operates convenient morning and evening training sessions. Inquire on WhatsApp or visit our front desk at Jaiswal Colony for current batch timings and lady-friendly slots.',
    slots: [],
  },

  /**
   * MEMBERSHIP & ADMISSION PLANS
   * When hasSpecificPricing is false, the website presents flexible membership options
   * (Monthly, Quarterly, Annual) with inclusions (fitness assessment, induction, floor access)
   * and a direct inquiry button without fabricating unverified price numbers.
   */
  membership: {
    hasSpecificPricing: false,
    generalNotice:
      'Pulse Gym offers flexible, transparent membership tiers tailored to your workout routine. Every new admission includes an initial fitness assessment and workout orientation.',
    plans: [],
  },
};

/**
 * Generates a WhatsApp Click-to-Chat URL with pre-filled message text.
 * Works seamlessly whether a specific business WhatsApp number is configured or not!
 */
export function generateWhatsAppUrl(
  message: string,
  customNumber?: string
): string {
  const targetNumber = (customNumber || BUSINESS_CONFIG.contact.whatsapp).replace(
    /\D/g,
    ''
  );
  const encodedText = encodeURIComponent(message.trim());

  if (targetNumber) {
    return `https://wa.me/${targetNumber}?text=${encodedText}`;
  }

  // Generic WhatsApp share endpoint that opens WhatsApp and lets user select or send
  return `https://api.whatsapp.com/send?text=${encodedText}`;
}

/**
 * Standard pre-filled WhatsApp message generator for gym inquiries.
 */
export function createInquiryMessage(options: {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
}): string {
  const parts: string[] = [
    `Hello ${BUSINESS_CONFIG.name}!`,
    `I am interested in joining or learning more about your fitness center in Jaiswal Colony, Jagdalpur.`,
  ];

  if (options.service) {
    parts.push(`*Selected Program / Service:* ${options.service}`);
  }

  if (options.name) {
    parts.push(`*My Name:* ${options.name}`);
  }

  if (options.phone) {
    parts.push(`*My Phone:* ${options.phone}`);
  }

  if (options.message && options.message.trim()) {
    parts.push(`*Note / Preferred Time:* ${options.message.trim()}`);
  }

  parts.push(`Could you please share details on membership and batch availability?`);
  return parts.join('\n\n');
}
