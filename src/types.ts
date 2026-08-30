export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categories: string[];
  description: string;
  technologies: string[];
  featured?: boolean;
  year?: string;
  clientOrContext?: string;
  overview: string;
  problem: string;
  approach: string;
  technologyDetails: string;
  outcome: string;
  keyHighlights?: string[];
  metrics?: { label: string; value: string }[];
  accentGradient?: string;
}

export interface Certificate {
  id: string;
  title: string;
  date: string;
  issuer: string;
  type: 'certification' | 'competition' | 'award' | 'course';
  description: string;
  skillsLearned: string[];
  credentialId?: string;
  highlight?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  tagline: string;
  skills: {
    name: string;
    description: string;
    level?: string;
    tags?: string[];
  }[];
  appliedSummary: string;
}

export interface PersonalityArea {
  id: string;
  title: string;
  tagline: string;
  detail: string;
  focusTopics: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  notes?: string[];
}
