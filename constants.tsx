
import React from 'react';
import { Project, Service, Testimonial } from './types';
import { Database, Search, Cpu, Globe, Mail, MessageSquare, TrendingUp, BarChart } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "E-commerce Price Scraper",
    problem: "Clients struggle to monitor competitor prices manually.",
    solution: "Automated Python scraper that extracts prices daily from multiple websites.",
    result: "Real-time price comparisons in Excel/Google Sheet, saving 20 hours/week.",
    category: "Scraping",
    impactData: [{ name: 'Manual', value: 20 }, { name: 'Automated', value: 0.5 }]
  },
  {
    id: 2,
    name: "Lead Generation for B2B SaaS",
    problem: "Finding verified leads manually is time-consuming.",
    solution: "Python automation that collects company names, emails, and phone numbers from LinkedIn and business directories.",
    result: "Generated 500+ verified leads per week, increasing outreach efficiency.",
    category: "Lead Gen",
    impactData: [{ name: 'Manual Leads', value: 50 }, { name: 'Automated Leads', value: 500 }]
  },
  {
    id: 3,
    name: "Real Estate Data Aggregator",
    problem: "Real estate agents need consolidated property data from multiple portals.",
    solution: "Web scraping script that aggregates property details including price, location, and features.",
    result: "Excel/CSV dashboards for 1000+ listings updated daily.",
    category: "Scraping",
    impactData: [{ name: 'Portals', value: 12 }, { name: 'Listings', value: 1000 }]
  },
  {
    id: 4,
    name: "Amazon Product Review Analyzer",
    problem: "Clients want insights from product reviews but manual analysis is slow.",
    solution: "Python script to scrape reviews, perform sentiment analysis, and generate charts.",
    result: "Visual insights into customer satisfaction and trends for decision-making.",
    category: "Data Analysis",
    impactData: [{ name: 'Positive', value: 75 }, { name: 'Neutral', value: 15 }, { name: 'Negative', value: 10 }]
  },
  {
    id: 5,
    name: "Job Listings Scraper",
    problem: "Finding relevant job postings across multiple sites is tedious.",
    solution: "Automation script scraping job title, company, location, and posting date.",
    result: "Daily CSV updates with filtered, ready-to-apply jobs.",
    category: "Automation",
    impactData: [{ name: 'Sites', value: 15 }, { name: 'Daily Leads', value: 120 }]
  },
  {
    id: 6,
    name: "Social Media Mentions Tracker",
    problem: "Brands struggle to track mentions across platforms.",
    solution: "Python scraper tracks keywords, mentions, and hashtags on Twitter, Instagram, and Reddit.",
    result: "Dashboard showing trends and sentiment in real-time.",
    category: "Scraping",
    impactData: [{ name: 'Sentiment', value: 85 }, { name: 'Volume', value: 4500 }]
  },
  {
    id: 7,
    name: "Cryptocurrency Price Tracker",
    problem: "Clients need real-time crypto data across multiple exchanges.",
    solution: "Python script fetches live prices, historical charts, and alerts on thresholds.",
    result: "Excel dashboard with automated price alerts for trading decisions.",
    category: "Automation",
    impactData: [{ name: 'Latency', value: 1 }, { name: 'Accuracy', value: 100 }]
  },
  {
    id: 8,
    name: "News Aggregator for Market Trends",
    problem: "Reading multiple news sites manually is time-consuming.",
    solution: "Web scraper collects news headlines, summaries, and publication dates from 20+ sources.",
    result: "Consolidated daily newsletter in CSV/PDF format for executives.",
    category: "Data Analysis",
    impactData: [{ name: 'Sources', value: 20 }, { name: 'Daily Articles', value: 300 }]
  },
  {
    id: 9,
    name: "Travel Deals Finder",
    problem: "Users miss limited-time travel offers.",
    solution: "Python automation scrapes flight, hotel, and package deals from multiple booking sites.",
    result: "Personalized email alerts with best deals weekly.",
    category: "Automation",
    impactData: [{ name: 'Savings %', value: 45 }, { name: 'Time Saved', value: 10 }]
  },
  {
    id: 10,
    name: "Stock Market Data Collector",
    problem: "Investors need historical and live stock data for analysis.",
    solution: "Python script collects daily OHLC data, volume, and indicators from multiple sources.",
    result: "Excel/Google Sheet dashboards for investment analysis.",
    category: "Data Analysis",
    impactData: [{ name: 'Tickers', value: 500 }, { name: 'Frequency', value: 60 }]
  },
  {
    id: 11,
    name: "Restaurant Menu Scraper",
    problem: "Food delivery platforms lack consolidated menu and review info.",
    solution: "Scraper collects restaurant menus, prices, and reviews from multiple websites.",
    result: "CSV reports helping clients choose new restaurant partners.",
    category: "Scraping",
    impactData: [{ name: 'Restaurants', value: 250 }, { name: 'Items', value: 12000 }]
  },
  {
    id: 12,
    name: "Event Data Aggregator",
    problem: "Companies struggle to track relevant events in their industry.",
    solution: "Automation script scrapes event name, date, location, and registration info.",
    result: "Weekly Excel update with all upcoming relevant events.",
    category: "Lead Gen",
    impactData: [{ name: 'Events', value: 85 }, { name: 'Avg. Attendance', value: 1500 }]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Web Scraping",
    description: "Extracting high-quality data from any website into Excel, CSV, or Google Sheets with 100% accuracy.",
    icon: <Globe className="w-8 h-8 text-emerald-600" />
  },
  {
    title: "Lead Generation",
    description: "Targeted business leads using Python scripts to find verified contact information across platforms.",
    icon: <Search className="w-8 h-8 text-emerald-600" />
  },
  {
    title: "Python Automation",
    description: "Automating repetitive browser tasks, data entry, and file management to save hundreds of hours.",
    icon: <Cpu className="w-8 h-8 text-emerald-600" />
  },
  {
    title: "Data Cleansing",
    description: "Structuring messy scraped data into usable, clean dashboards and formatted reports.",
    icon: <Database className="w-8 h-8 text-emerald-600" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "John Harrison",
    role: "CEO",
    company: "B2B Outreach Solutions",
    content: "Md Abu Sufian transformed our lead generation process. What took days now takes minutes. Highly recommended for complex scraping.",
    avatar: "https://picsum.photos/seed/john/100/100"
  },
  {
    name: "Sarah Miller",
    role: "Marketing Director",
    company: "TrendWatch Inc.",
    content: "The automated price tracker Sufian built has given us a massive competitive advantage. Precise and reliable data every single morning.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Robert Chen",
    role: "Founder",
    company: "PropertyMatch",
    content: "Exceptional Python skills. Sufian aggregated property data from dozens of sites seamlessly. A true professional who understands business needs.",
    avatar: "https://picsum.photos/seed/robert/100/100"
  }
];
