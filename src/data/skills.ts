import { SkillCategory, SkillItem } from '../types';

export interface HardSkillGroup {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  skills: {
    number: string;
    name: string;
    description: string;
    tools: string[];
    projects?: string[];
  }[];
}

export interface SoftSkillItem {
  number: string;
  name: string;
  description: string;
  applications: string[];
}

export const hardSkillGroups: HardSkillGroup[] = [
  {
    id: 'data-science-ai',
    category: 'Technical Skills',
    title: 'Data Science & AI',
    subtitle: 'Machine learning workflows, statistical algorithms, NLP, and analytical visualization.',
    skills: [
      {
        number: '01',
        name: 'Python (Pandas, NumPy, Scikit-learn)',
        description: 'Building end-to-end data pipelines, exploratory analytics, statistical modeling, and data manipulation.',
        tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
        projects: ['VIDHELP', 'Sales Analysis Automation', 'Payroll System']
      },
      {
        number: '02',
        name: 'Machine Learning & Deep Learning',
        description: 'Training predictive regression and classification models, evaluating loss metrics, and deploying analytical engines.',
        tools: ['Predictive Modeling', 'Supervised Learning', 'Feature Engineering'],
        projects: ['VIDHELP', 'Student GPA Tracker']
      },
      {
        number: '03',
        name: 'PyTorch, NLP, Text Processing',
        description: 'Neural network modeling, text tokenization, natural language processing, and automated information extraction.',
        tools: ['PyTorch', 'NLP', 'Text Processing', 'Embeddings'],
        projects: ['VIDHELP']
      },
      {
        number: '04',
        name: 'Data Visualization (Matplotlib, Seaborn)',
        description: 'Generating clear, publication-grade statistical charts, distribution plots, and correlation matrices.',
        tools: ['Matplotlib', 'Seaborn', 'Power BI', 'Interactive Charts'],
        projects: ['Sales Analysis Automation', 'VIDHELP']
      }
    ]
  },
  {
    id: 'web-development',
    category: 'Technical Skills',
    title: 'Web Development',
    subtitle: 'Responsive frontend architecture, typed full-stack interfaces, and modern web frameworks.',
    skills: [
      {
        number: '01',
        name: 'React.js, TypeScript, JavaScript',
        description: 'Developing high-performance Single Page Applications with strict typing, component architecture, and reactive state.',
        tools: ['React.js', 'TypeScript', 'JavaScript ES6+', 'State Management'],
        projects: ['VIDHELP', 'Web Portofolio', 'Teravince']
      },
      {
        number: '02',
        name: 'HTML, CSS, Tailwind CSS, Bootstrap',
        description: 'Crafting responsive, accessible (WCAG AA) user interfaces with bespoke styling, fluid layouts, and ergonomic design.',
        tools: ['Tailwind CSS', 'CSS3 / Modern CSS', 'HTML5 Semantic', 'Bootstrap'],
        projects: ['Web Portofolio', 'Teravince', 'VIDHELP']
      },
      {
        number: '03',
        name: 'Vite, Django',
        description: 'Configuring modern frontend build tooling with Vite and building robust Python-powered backend services in Django.',
        tools: ['Vite', 'Django', 'REST APIs', 'Build Optimization'],
        projects: ['VIDHELP', 'Web Portofolio']
      }
    ]
  },
  {
    id: 'databases-cloud',
    category: 'Technical Skills',
    title: 'Databases & Cloud',
    subtitle: 'Relational & non-relational database design, cloud infrastructure, and network modeling.',
    skills: [
      {
        number: '01',
        name: 'PostgreSQL, MySQL, MongoDB',
        description: 'Designing normalized schemas, writing optimized SQL queries, and managing document-based data persistence.',
        tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
        projects: ['VIDHELP', 'Sales Analysis Automation']
      },
      {
        number: '02',
        name: 'Database Design & Administration',
        description: 'Architecting multi-tenant relational schemas, entity relationships, index optimization, and data integrity constraints.',
        tools: ['Schema Normalization', 'Query Optimization', 'ER Modeling'],
        projects: ['VIDHELP', 'Payroll System']
      },
      {
        number: '03',
        name: 'AWS (ML, Data Analytics, Database)',
        description: 'Deploying cloud storage, analytics workflows, and database services on Amazon Web Services infrastructure.',
        tools: ['AWS S3', 'AWS RDS', 'Analytics & ML Tools'],
        projects: ['VIDHELP']
      },
      {
        number: '04',
        name: 'XAMPP, Cisco Packet Tracer',
        description: 'Configuring local server environments and simulating enterprise network topologies and routing configurations.',
        tools: ['XAMPP', 'Cisco Packet Tracer', 'Network Topologies', 'Local Web Servers'],
        projects: ['Academic Labs & Network Simulation']
      }
    ]
  }
];

export const softSkillsList: SoftSkillItem[] = [
  {
    number: '01',
    name: 'Problem Solving',
    description: 'Deconstructing complex operational challenges into structured, measurable technical solutions.',
    applications: ['Root Cause Analysis', 'Bottleneck Resolution', 'Algorithm Design']
  },
  {
    number: '02',
    name: 'Communication',
    description: 'Articulating technical concepts clearly to cross-functional stakeholders, teams, and non-technical clients.',
    applications: ['Stakeholder Presentations', 'Technical Documentation', 'National English Speech Award']
  },
  {
    number: '03',
    name: 'Teamwork',
    description: 'Leading and collaborating with cross-functional engineers, researchers, and designers toward unified delivery goals.',
    applications: ['Capstone Team Leadership', 'Cross-Functional Collaboration', 'Agile Delivery']
  },
  {
    number: '04',
    name: 'Learning Agility',
    description: 'Rapidly assimilating new frameworks, programming languages, and domain methodologies with proactive adaptability.',
    applications: ['Continuous Upskilling', 'Emerging AI Frameworks', 'Fast Onboarding']
  },
  {
    number: '05',
    name: 'Time Management',
    description: 'Prioritizing critical sprint deliverables, managing milestones, and maintaining strict execution punctuality.',
    applications: ['Milestone Delivery', 'Sprint Prioritization', 'Independent Project Execution']
  }
];

// Backward-compatible export for types & other imports if needed
export const skillCategoriesData: SkillCategory[] = hardSkillGroups.map((g) => ({
  id: g.id,
  name: g.title,
  tagline: g.subtitle,
  appliedSummary: g.subtitle,
  skills: g.skills.map((s) => ({
    name: s.name,
    description: s.description,
    level: 'Expert',
    category: g.title,
    tags: s.tools,
    projects: s.projects
  }))
}));

export interface LanguageItem {
  name: string;
  nativeScript?: string;
  level: string;
  proficiencyScore: number;
  detail: string;
  tag: string;
  badge: string;
}

export const languagesData: LanguageItem[] = [
  {
    name: 'Indonesian',
    nativeScript: 'Bahasa Indonesia',
    level: 'Native Speaker',
    proficiencyScore: 100,
    detail: 'Native language with full command of technical documentation, public presentation, and professional business discourse.',
    tag: 'Native Speaker',
    badge: 'Native Fluent'
  },
  {
    name: 'English',
    nativeScript: 'English',
    level: 'Fluent / Professional',
    proficiencyScore: 92,
    detail: 'Professional fluency across international team collaboration, technical documentation, and academic presentation. Awarded 3rd Place in the National English Speech Competition.',
    tag: '3rd Place National Speech Award',
    badge: '3rd Place National Speech'
  },
  {
    name: 'Mandarin',
    nativeScript: '中文 (Mandarin)',
    level: 'Intermediate',
    proficiencyScore: 48,
    detail: 'Intermediate conversational and reading capability built from a trilingual academic foundation at Jembatan Budaya School. Recipient of the Mandarin Scholarship Award.',
    tag: 'Mandarin Scholarship Awardee',
    badge: 'Intermediate · Scholarship'
  }
];
