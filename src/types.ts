export enum IndustryType {
  MedSpa = 'Med Spa',
  Dentist = 'Dentist',
  Fitness = 'Fitness Studio',
  RealEstate = 'Real Estate',
  Law = 'Law Firm'
}

export interface GeneratedStrategy {
  headline: string;
  bonuses: string[];
  estimatedLift: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface FunnelStep {
  title: string;
  description: string;
  icon: string;
}