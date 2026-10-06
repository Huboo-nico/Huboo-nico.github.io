export type Language = 'es' | 'en';

export interface Integration {
  id: string;
  name: string;
  category: 'ecommerce' | 'marketplace' | 'social' | 'erp';
  description: string;
  badge: string;
  timeToSetup: string;
  popular?: boolean;
}

export interface FulfillmentStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  badge: string;
}

export interface LiveActivity {
  id: string;
  channel: string;
  orderNumber: string;
  itemCount: number;
  status: 'Empacado' | 'Enviado' | 'En reparto' | 'Stock sincronizado';
  carrier: string;
  timeAgo: string;
}

export interface CaseStudy {
  brand: string;
  category: string;
  metric: string;
  metricLabel: string;
  quote: string;
  author: string;
  role: string;
  growth: string;
}
