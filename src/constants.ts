import { Project, Experience, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sugar Mill DCS Monitoring System',
    description: 'Developed a robust real-time monitoring system using HollySys DCS for a large-scale sugar processing facility, optimizing process house controls.',
    image: 'https://images.unsplash.com/photo-1581092334651-419b62630985?auto=format&fit=crop&q=80&w=800',
    tech: ['HollySys DCS', 'Industrial Networking', 'Process Control'],
    demo: '#',
  },
  {
    id: '2',
    title: 'PLC-based Automation System',
    description: 'Implemented specialized PLC logic for mill house monitoring and power house synchronization, improving operational efficiency by 15%.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800',
    tech: ['PLC Programming', 'Siemens S7', 'SCADA'],
    github: '#',
  },
  {
    id: '3',
    title: 'Industrial SCADA Dashboard',
    description: 'Designed an interactive SCADA dashboard for centralized monitoring of boiler instrumentation and refine batch pan systems.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tech: ['SCADA', 'UX Design', 'Industrial Data'],
    demo: '#',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'DCS & Automation Expert',
    company: 'Lead Sugar Industry Projects',
    period: '2020 - Present',
    description: [
      'Leading HollySys DCS implementation in Process House automation.',
      'Optimizing Mill House monitoring systems using advanced PLC logic.',
      'Supervising Electrical & Instrumentation (E&I) departments.',
    ],
  },
  {
    id: '2',
    role: 'Automation Engineer',
    company: 'Industrial Solutions Group',
    period: '2017 - 2020',
    description: [
      'Designed and deployed Boiler Instrumentation monitoring systems.',
      'Configured Industrial Networking for centralized automation architecture.',
      'Managed Refine Batch Pan systems automation.',
    ],
  }
];

export const SKILLS: Skill[] = [
  { name: 'HollySys DCS', level: 95, category: 'Automation' },
  { name: 'PLC Programming', level: 90, category: 'Automation' },
  { name: 'SCADA Systems', level: 92, category: 'Automation' },
  { name: 'Instrumentation', level: 88, category: 'Automation' },
  { name: 'Process Control', level: 94, category: 'Automation' },
  { name: 'Industrial Networking', level: 85, category: 'Automation' },
  { name: 'C++', level: 75, category: 'Programming' },
  { name: 'AI Tools', level: 80, category: 'Tools' },
  { name: 'IT Solutions', level: 85, category: 'Tools' },
];
