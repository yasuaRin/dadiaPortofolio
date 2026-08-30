import { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'data',
    name: 'Data & Analytics',
    tagline: 'Turning raw numbers and messy tables into clear, actionable insights for your team.',
    appliedSummary: 'I clean, analyze, and visualize data so you can make informed business decisions with confidence.',
    skills: [
      {
        name: 'Python',
        description: 'Writing scripts to clean messy spreadsheets, analyze patterns, build predictive models, and automate data tasks.',
        level: 'Expert',
        category: 'Data & Analytics',
        tags: ['Pandas', 'NumPy', 'Data Cleaning', 'Statistics'],
        projects: ['VIDHELP', 'Sales Analysis Automation']
      },
      {
        name: 'SQL & Databases',
        description: 'Extracting answers from company databases, combining multiple tables, and keeping data organized and fast.',
        level: 'Expert',
        category: 'Data & Analytics',
        tags: ['PostgreSQL', 'MySQL', 'Database Design', 'Fast Queries'],
        projects: ['VIDHELP', 'Payroll System', 'Sales Analysis Automation']
      },
      {
        name: 'Power BI',
        description: 'Creating clear, interactive dashboards and visual reports that stakeholders and executives love using.',
        level: 'Advanced',
        category: 'Data & Analytics',
        tags: ['Interactive Dashboards', 'Visual Charts', 'Executive Reports'],
        projects: ['Sales Analysis Automation']
      },
      {
        name: 'Excel & Spreadsheets',
        description: 'Building financial sheets, formulas (XLOOKUP, formulas), PivotTables, and automated data cleanups with Power Query.',
        level: 'Expert',
        category: 'Data & Analytics',
        tags: ['Formulas & Lookups', 'PivotTables', 'Financial Sheets', 'Power Query'],
        projects: ['Sales Analysis Automation', 'Payroll System']
      },
      {
        name: 'Exploratory Data Analysis',
        description: 'Deep diving into new datasets to find hidden trends, anomalies, customer behavior patterns, and opportunities.',
        level: 'Advanced',
        category: 'Data & Analytics',
        tags: ['Finding Trends', 'Pattern Recognition', 'Visualizing Insights'],
        projects: ['VIDHELP', 'Sales Analysis Automation']
      },
      {
        name: 'Machine Learning',
        description: 'Training smart algorithms that can predict outcomes, categorize information, and spot anomalies automatically.',
        level: 'Proficient',
        category: 'Data & Analytics',
        tags: ['Predictive Models', 'Smart Categorization', 'Pattern Forecasting'],
        projects: ['VIDHELP']
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Smart Tools',
    tagline: 'Using practical AI and smart automation to solve real everyday problems.',
    appliedSummary: 'I build user-friendly software powered by smart AI assistants, automatic categorization, and language models.',
    skills: [
      {
        name: 'Predictive Forecasting',
        description: 'Teaching models to estimate future trends, customer demands, and risk scores from past historical data.',
        level: 'Proficient',
        category: 'AI & Smart Tools',
        tags: ['Trend Prediction', 'Risk Estimation', 'Smart Scoring'],
        projects: ['VIDHELP']
      },
      {
        name: 'Smart Apps & Assistant UI',
        description: 'Designing friendly web experiences that let everyday users interact seamlessly with AI features.',
        level: 'Advanced',
        category: 'AI & Smart Tools',
        tags: ['Simple UI', 'Interactive Assistants', 'Smart Features'],
        projects: ['VIDHELP']
      },
      {
        name: 'AI & Prompt Crafting',
        description: 'Guiding large language models (like Gemini & GPT) to reliably format answers, summarize notes, and extract key facts.',
        level: 'Advanced',
        category: 'AI & Smart Tools',
        tags: ['Helpful Prompts', 'Document Summaries', 'Structured Answers'],
        projects: ['VIDHELP', 'Teravince']
      },
      {
        name: 'Autonomous AI Workflows',
        description: 'Connecting AI to real tools so it can research, summarize, and complete multi-step tasks independently.',
        level: 'Hands-on',
        category: 'AI & Smart Tools',
        tags: ['Multi-step Tasks', 'Connected Tools', 'Automated Research'],
        projects: ['VIDHELP']
      }
    ]
  },
  {
    id: 'development',
    name: 'Web & App Development',
    tagline: 'Crafting responsive, easy-to-use websites and reliable web applications.',
    appliedSummary: 'Building clean user interfaces backed by secure, dependable databases and fast page loads.',
    skills: [
      {
        name: 'React',
        description: 'Building interactive, modern, and snappy web pages where everything updates smoothly without full reloads.',
        level: 'Expert',
        category: 'Web & App Development',
        tags: ['Interactive Pages', 'Clean Components', 'Fast Navigation'],
        projects: ['Web Portfolio', 'VIDHELP']
      },
      {
        name: 'TypeScript & JavaScript',
        description: 'Writing solid, error-free web code that runs smoothly on desktop, tablets, and phones alike.',
        level: 'Expert',
        category: 'Web & App Development',
        tags: ['Reliable Logic', 'Mobile & Desktop', 'Smooth Animations'],
        projects: ['Web Portfolio', 'VIDHELP', 'Student GPA Tracker']
      },
      {
        name: 'Tailwind CSS & Design',
        description: 'Crafting clean layouts, pleasant color palettes, dark/light themes, and mobile-friendly responsive designs.',
        level: 'Expert',
        category: 'Web & App Development',
        tags: ['Mobile Friendly', 'Light & Dark Modes', 'Clean Layouts'],
        projects: ['Web Portfolio', 'VIDHELP']
      },
      {
        name: 'Node.js & Web APIs',
        description: 'Connecting frontend web pages to secure server services to save data, send emails, and process user requests.',
        level: 'Advanced',
        category: 'Web & App Development',
        tags: ['Server Logic', 'Connecting Apps', 'Secure Data Flow'],
        projects: ['VIDHELP', 'Payroll System']
      },
      {
        name: 'Supabase & Cloud Storage',
        description: 'Setting up cloud databases where user information and media are stored safely with real-time updates.',
        level: 'Advanced',
        category: 'Web & App Development',
        tags: ['Cloud Database', 'User Logins', 'Real-time Sync'],
        projects: ['VIDHELP']
      },
      {
        name: 'PHP & MySQL',
        description: 'Developing traditional web portals, business admin panels, and database-backed management tools.',
        level: 'Advanced',
        category: 'Web & App Development',
        tags: ['Admin Dashboards', 'User Accounts', 'Database Records'],
        projects: ['Payroll System']
      }
    ]
  },
  {
    id: 'automation',
    name: 'Automation & Productivity',
    tagline: 'Automating repetitive busywork so your team can focus on what matters.',
    appliedSummary: 'Connecting forms, spreadsheets, and messaging apps to handle approvals, notifications, and reports automatically.',
    skills: [
      {
        name: 'Power Automate',
        description: 'Creating automated workflows that trigger emails, route manager approvals, and move files across tools hands-free.',
        level: 'Expert',
        category: 'Automation & Productivity',
        tags: ['Automatic Emails', 'Approval Flows', 'Hands-free Tasks'],
        projects: ['Payment Request Automation', 'Sales Analysis Automation']
      },
      {
        name: 'Online Forms & Surveys',
        description: 'Creating simple intake forms that collect responses accurately and route data directly into organized spreadsheets.',
        level: 'Expert',
        category: 'Automation & Productivity',
        tags: ['Easy Surveys', 'Clean Data Intake', 'Automated Routing'],
        projects: ['Payment Request Automation']
      },
      {
        name: 'Workflow Optimization',
        description: 'Spotting steps that waste people\'s time and replacing manual data re-entry with one-click automated systems.',
        level: 'Advanced',
        category: 'Automation & Productivity',
        tags: ['Time Savers', 'Removing Bottlenecks', 'Smooth Team Handoffs'],
        projects: ['Payment Request Automation', 'Sales Analysis Automation']
      }
    ]
  },
  {
    id: 'business',
    name: 'Product & Planning',
    tagline: 'Making sure what we build actually solves the real problem and feels great to use.',
    appliedSummary: 'Bridging the gap between everyday business goals and technical features with thoughtful design.',
    skills: [
      {
        name: 'Listening & Requirements',
        description: 'Talking with team members and users to understand exactly what they need before any code is written.',
        level: 'Expert',
        category: 'Product & Planning',
        tags: ['User Interviews', 'Clear Action Plans', 'Team Alignment'],
        projects: ['VIDHELP', 'Payment Request Automation', 'Payroll System']
      },
      {
        name: 'UI/UX & Interactive Prototypes',
        description: 'Sketching and designing clickable prototypes in Figma so everyone can preview the app before building it.',
        level: 'Advanced',
        category: 'Product & Planning',
        tags: ['Figma Designs', 'Clickable Mockups', 'Simple & Friendly'],
        projects: ['Teravince', 'Web Portfolio', 'VIDHELP']
      },
      {
        name: 'User & Market Research',
        description: 'Understanding what users want, looking at existing solutions, and finding ways to make the product stand out.',
        level: 'Proficient',
        category: 'Product & Planning',
        tags: ['User Needs', 'Benchmarking', 'Practical Value'],
        projects: ['Teravince', 'VIDHELP']
      },
      {
        name: 'Process Improvement',
        description: 'Helping teams work faster with clearer steps, fewer misunderstandings, and standardized guides.',
        level: 'Expert',
        category: 'Product & Planning',
        tags: ['Faster Turnaround', 'Clear Guidelines', 'Less Confusion'],
        projects: ['Payment Request Automation', 'Sales Analysis Automation']
      }
    ]
  }
];

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
    detail: 'First language — comfortable with everyday conversations, public speaking, and professional business writing.',
    tag: 'Native Speaker',
    badge: 'Native Fluent'
  },
  {
    name: 'English',
    nativeScript: 'English',
    level: 'Fluent / Professional',
    proficiencyScore: 90,
    detail: 'Fluent in daily work, presentations, and team discussions. 3rd place winner in the National English Speech Competition.',
    tag: 'National Speech Award Winner',
    badge: 'National Speech Awardee'
  },
  {
    name: 'Mandarin',
    nativeScript: '中文 (Mandarin)',
    level: 'Conversational Working',
    proficiencyScore: 65,
    detail: 'Conversational working proficiency in speaking and reading. Recipient of an International Language Scholarship.',
    tag: 'Scholarship Recipient',
    badge: 'Scholarship Awardee'
  }
];
