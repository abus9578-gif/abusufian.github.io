// Added React import to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Project {
  id: number;
  name: string;
  problem: string;
  solution: string;
  result: string;
  category: 'Scraping' | 'Lead Gen' | 'Automation' | 'Data Analysis';
  impactData: { name: string; value: number }[];
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}