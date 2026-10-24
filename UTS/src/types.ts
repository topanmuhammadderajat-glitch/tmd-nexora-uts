/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  targetUser: string;
  category: 'umkm' | 'bisnis' | 'enterprise';
  priceRp: number;
  period: string;
  description: string;
  deliveryTime: string;
  revisions: string;
  popular?: boolean;
  features: {
    name: string;
    included: boolean;
    note?: string;
  }[];
  maintenanceMonthlyRp: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  avatarUrl: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  liveUrl: string;
}
