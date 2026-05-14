export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Automation' | 'Programming' | 'Tools';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
}
