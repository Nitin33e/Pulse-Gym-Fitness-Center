export interface NavigationItem {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: string;
  tag: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'weight' | 'equipment' | 'floor' | 'interior';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface OwnerProfile {
  name: string;
  role: string;
  bio: string;
  image?: string;
  credentials?: string[];
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience?: string;
  bio?: string;
  image?: string;
}

export interface TimingSlot {
  dayGroup: string;
  morning?: string;
  evening?: string;
  note?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  badge?: string;
  features: string[];
  popular?: boolean;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  type: string;
  location: {
    colony: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    addressLine: string;
    fullAddress: string;
    googleMapsUrl: string;
    googleReviewsUrl: string;
    embedMapQuery: string;
  };
  rating: {
    score: number;
    totalReviews: number;
    source: string;
    maxScore: number;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  owner: OwnerProfile | null;
  trainers: TrainerProfile[];
  schedule: {
    hasSpecificSchedule: boolean;
    slots?: TimingSlot[];
    generalNotice?: string;
  };
  membership: {
    hasSpecificPricing: boolean;
    plans?: PricingPlan[];
    generalNotice?: string;
  };
}

export interface BusinessDetails {
  name: string;
  type: string;
  address: string;
  colony: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  fullLocation: string;
  googleRating: number;
  totalReviews: number;
  googleMapsUrl: string;
  googleReviewsUrl: string;
  phone?: string;
}

