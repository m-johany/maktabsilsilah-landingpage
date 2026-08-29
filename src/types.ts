export interface StudentAttendance {
  id: string;
  name: string;
  yearGroup: string;
  history: ('P' | 'A' | 'L')[];
}

export interface InvoiceItem {
  id: string;
  studentName: string;
  parentName: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  phone: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  institution: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  featured?: boolean;
  features: string[];
  ctaText: string;
}
