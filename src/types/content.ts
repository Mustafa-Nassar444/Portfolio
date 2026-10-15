export interface ProfessionalLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  about: string[];
  backendSummary?: { label: string; value: string }[];
  /** Clearly label sample biography copy until it has been personalized. */
  isPlaceholder?: boolean;
  location?: string;
  email?: string;
  links: ProfessionalLink[];
  /** Set only after adding the actual file to public/documents. */
  cvPath?: string;
}

export interface SkillCategory {
  isPlaceholder?: boolean;
  id: string;
  title: string;
  skills: string[];
}

export interface Experience {
  isPlaceholder?: boolean;
  id: string;
  company: string;
  role: string;
  /** ISO year-month, e.g. 2026-01. Empty only for labeled placeholders. */
  startDate: string;
  endDate?: string;
  location?: string;
  responsibilities: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  interface: 'dashboard' | 'website' | 'other';
  caption?: string;
  /** An explanatory visual rather than a screenshot of the real application. */
  isIllustration?: boolean;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  isPlaceholder?: boolean;
  slug: string;
  title: string;
  description: string;
  overview: string;
  type: 'Company Project';
  company?: string;
  featured: boolean;
  /** Whole system, including interfaces built by other developers. */
  technologies: string[];
  /** Technologies used directly by the portfolio owner. */
  personalTechnologies: string[];
  role: string;
  responsibilities: string[];
  /** Explicitly credit work owned by other contributors. */
  contributionNotes?: string;
  features: string[];
  challenges: ProjectChallenge[];
  technicalHighlights?: string[];
  thumbnail?: ProjectImage;
  screenshots: ProjectImage[];
  projectUrl?: string;
  repositoryUrl?: string;
}
