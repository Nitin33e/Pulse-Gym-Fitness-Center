import { BusinessDetails, FacilityItem, NavigationItem, ServiceItem, WhyChooseItem } from './types';
import { BUSINESS_CONFIG, generateWhatsAppUrl, createInquiryMessage } from './config/businessConfig';
import heroImg from './assets/images/pulse_gym_hero_1788064969679.jpg';
import weightsImg from './assets/images/pulse_gym_weights_1788064987196.jpg';
import floorImg from './assets/images/pulse_gym_floor_1788065001621.jpg';

export { BUSINESS_CONFIG, generateWhatsAppUrl, createInquiryMessage };

export const BUSINESS_INFO: BusinessDetails = {
  name: BUSINESS_CONFIG.name,
  type: BUSINESS_CONFIG.type,
  colony: BUSINESS_CONFIG.location.colony,
  city: BUSINESS_CONFIG.location.city,
  state: BUSINESS_CONFIG.location.state,
  pincode: BUSINESS_CONFIG.location.pincode,
  country: BUSINESS_CONFIG.location.country,
  address: BUSINESS_CONFIG.location.addressLine,
  fullLocation: BUSINESS_CONFIG.location.fullAddress,
  googleRating: BUSINESS_CONFIG.rating.score,
  totalReviews: BUSINESS_CONFIG.rating.totalReviews,
  googleMapsUrl: BUSINESS_CONFIG.location.googleMapsUrl,
  googleReviewsUrl: BUSINESS_CONFIG.location.googleReviewsUrl,
  phone: BUSINESS_CONFIG.contact.phone,
};

export const NAV_LINKS: NavigationItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Membership', href: '#membership' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    tag: 'Power & Muscle',
    iconName: 'Dumbbell',
    description:
      'Structured progressive resistance training routines focusing on building compound muscular strength, physical density, and safe lifting mechanics with heavy-duty free weights and racks.',
    highlights: [
      'Progressive barbell and dumbbell protocols',
      'Hypertrophy and core stability routines',
      'Proper biomechanics and lifting posture',
    ],
  },
  {
    id: 'fitness-assessment',
    title: 'Fitness Assessment',
    tag: 'Baseline Analysis',
    iconName: 'Activity',
    description:
      'Thorough assessment of functional movement patterns, joint mobility, cardiovascular endurance, and physical benchmarks to establish your customized training starting point.',
    highlights: [
      'Physical capability benchmarking',
      'Mobility and posture evaluation',
      'Milestone tracking and progression review',
    ],
  },
  {
    id: 'weight-loss-consultation',
    title: 'Weight-Loss Consultation',
    tag: 'Metabolic Conditioning',
    iconName: 'Flame',
    description:
      'Tailored fitness strategies combining caloric expenditure guidance, high-efficiency metabolic circuits, and consistency habits designed for sustainable fat loss.',
    highlights: [
      'Sustainable workout pacing',
      'Metabolic conditioning splits',
      'Habit building and consistency coaching',
    ],
  },
  {
    id: 'general-fitness-training',
    title: 'Fitness Training',
    tag: 'Overall Vitality',
    iconName: 'Zap',
    description:
      'Complete full-body training designed for adults seeking improved daily stamina, athletic agility, heart health, and reduced day-to-day physical fatigue.',
    highlights: [
      'Cardiovascular capacity building',
      'Functional athletic movements',
      'Stress relief and all-day energy',
    ],
  },
  {
    id: 'gym-workout-programs',
    title: 'Gym & Workout Programs',
    tag: 'Structured Protocols',
    iconName: 'ClipboardCheck',
    description:
      'Step-by-step workout programming customized to match individual experience levels, weekly attendance frequency, and target milestones at Pulse Gym.',
    highlights: [
      'Push-pull-legs and full-body splits',
      'Volume and progressive overload tracking',
      'Guided exercise sequencing on the gym floor',
    ],
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'fac-1',
    title: 'Weight Training Area',
    category: 'weight',
    categoryLabel: 'Weight Area',
    imageUrl: weightsImg,
    description:
      'Dedicated section equipped with heavy-duty free weights, dumbbell racks, and benches built for focused progressive lifting.',
  },
  {
    id: 'fac-2',
    title: 'Modern Workout Floor',
    category: 'floor',
    categoryLabel: 'Workout Floor',
    imageUrl: floorImg,
    description:
      'Spacious main training floor with shock-absorbent athletic flooring, ample movement lanes, and functional workout stations.',
  },
  {
    id: 'fac-3',
    title: 'Gym Interior & Atmosphere',
    category: 'interior',
    categoryLabel: 'Gym Interior',
    imageUrl: heroImg,
    description:
      'Motivating dark aesthetic accented with warm ambient lighting, clean ventilation, and high-energy workout zones.',
  },
  {
    id: 'fac-4',
    title: 'Exercise & Resistance Machines',
    category: 'equipment',
    categoryLabel: 'Exercise Equipment',
    imageUrl:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    description:
      'Selection of selectorized plate and pin-loaded machines engineered for biomechanically sound muscle isolation and joint safety.',
  },
  {
    id: 'fac-5',
    title: 'Training Equipment & Free Weights',
    category: 'equipment',
    categoryLabel: 'Training Equipment',
    imageUrl:
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
    description:
      'Olympic barbells, precision plates, kettlebells, and specialty bars maintained in prime condition for disciplined lifting.',
  },
  {
    id: 'fac-6',
    title: 'Conditioning & Movement Zone',
    category: 'floor',
    categoryLabel: 'Workout Floor',
    imageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    description:
      'Dedicated floor space for warm-ups, cool-downs, core conditioning, and high-intensity bodyweight routines.',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'why-1',
    title: 'Quality Training',
    description:
      'Structured routines and focused exercise principles designed to help members train safely, efficiently, and with measurable consistency.',
    iconName: 'Award',
  },
  {
    id: 'why-2',
    title: 'Modern Equipment',
    description:
      'Well-maintained heavy iron, precision machines, and functional gear configured to support every phase of your workout.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'why-3',
    title: 'Fitness-Focused Environment',
    description:
      'An authentic, motivating workout atmosphere in Jagdalpur where members of all levels come together to challenge their limits.',
    iconName: 'Flame',
  },
  {
    id: 'why-4',
    title: 'Personalized Guidance',
    description:
      'Attentive support focused on your individual fitness goals, form accuracy, and continuous strength progression.',
    iconName: 'Users',
  },
];
