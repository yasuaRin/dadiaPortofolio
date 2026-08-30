import { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'data',
    name: 'DATA',
    tagline: 'Finding patterns, uncovering truth, and turning raw numbers into strategic decisions.',
    appliedSummary: 'I leverage analytical tools and structured query languages to extract clarity from messy datasets, engineer reliable pipelines, and present intuitive visual summaries for decision makers.',
    skills: [
      {
        name: 'Python',
        description: 'Data manipulation, statistical analysis, and algorithmic scripting with Pandas, NumPy, and Scikit-Learn.',
        tags: ['Pandas', 'NumPy', 'Scikit-Learn']
      },
      {
        name: 'SQL',
        description: 'Relational database querying, multi-table joins, aggregations, schema design, and analytical window functions.',
        tags: ['PostgreSQL', 'MySQL', 'Schema Design']
      },
      {
        name: 'Excel',
        description: 'Advanced modeling, pivot tables, lookup formulas, data validation, and rapid financial/operational mockups.',
        tags: ['Advanced Modeling', 'Pivot Analysis', 'Power Query']
      },
      {
        name: 'Power BI',
        description: 'Interactive dashboard authoring, DAX measure creation, data modeling, and executive KPI reporting.',
        tags: ['DAX', 'Dashboard Design', 'Data Modeling']
      },
      {
        name: 'Data Analysis',
        description: 'Exploratory data analysis (EDA), anomaly detection, trend evaluation, and hypothesis testing.',
        tags: ['EDA', 'Trend Analysis', 'Statistical Inference']
      },
      {
        name: 'Machine Learning',
        description: 'Supervised and unsupervised models for classification, regression, clustering, and predictive forecasting.',
        tags: ['Predictive Modeling', 'Feature Engineering', 'Evaluation']
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI',
    tagline: 'Building practical, grounded applications around intelligent systems.',
    appliedSummary: 'Focusing on actionable AI applications that solve concrete workflow challenges rather than abstract hype — from LLM orchestration to contextual intelligent interfaces.',
    skills: [
      {
        name: 'Machine Learning',
        description: 'End-to-end model framing, dataset preparation, hyperparameter tuning, and cross-validation.',
        tags: ['Scikit-Learn', 'Classification', 'Regression']
      },
      {
        name: 'AI Applications',
        description: 'Architecting intelligent digital interfaces that integrate machine intelligence directly into user workflows.',
        tags: ['Intelligent UI', 'Real-time Inference', 'Smart Automation']
      },
      {
        name: 'LLM Integration',
        description: 'Structured prompt design, API integration, Retrieval-Augmented Generation (RAG) concepts, and system guardrails.',
        tags: ['Prompt Engineering', 'API Pipelines', 'Context Injection']
      },
      {
        name: 'AI Agents',
        description: 'Exploring multi-step reasoning systems, tool-calling functions, and automated task execution workflows.',
        tags: ['Tool Calling', 'Task Execution', 'Reasoning Flows']
      }
    ]
  },
  {
    id: 'development',
    name: 'DEVELOPMENT',
    tagline: 'Creating fast, responsive, and maintainable digital experiences.',
    appliedSummary: 'Writing clean, component-driven frontend interfaces connected to reliable backend services, maintaining strict attention to responsiveness, usability, and speed.',
    skills: [
      {
        name: 'React',
        description: 'Component architecture, custom hooks, state management, and modern declarative UI development.',
        tags: ['React 18/19', 'Hooks', 'Component Architecture']
      },
      {
        name: 'JavaScript & TypeScript',
        description: 'Type-safe functional programming, asynchronous event loops, DOM interactions, and ES6+ standards.',
        tags: ['TypeScript', 'ES6+', 'Async/Await']
      },
      {
        name: 'Node.js',
        description: 'Server runtime execution, script automation, backend API services, and package management.',
        tags: ['Express', 'REST Services', 'NPM']
      },
      {
        name: 'REST APIs',
        description: 'API endpoint design, HTTP request handling, authentication headers, error handling, and payload parsing.',
        tags: ['CRUD', 'HTTP Protocols', 'JSON']
      },
      {
        name: 'Supabase',
        description: 'Cloud PostgreSQL persistence, row-level security policies, real-time subscriptions, and auth integration.',
        tags: ['PostgreSQL', 'Auth', 'Real-time DB']
      }
    ]
  },
  {
    id: 'automation',
    name: 'AUTOMATION',
    tagline: 'Eliminating manual friction and optimizing operational flow.',
    appliedSummary: 'Bridging internal business operations and technology to automate repetitive data collection, multi-stakeholder approvals, and multi-app communication.',
    skills: [
      {
        name: 'Power Automate',
        description: 'Multi-stage automated cloud flows, scheduled triggers, conditional routing, and enterprise integration.',
        tags: ['Cloud Flows', 'Approval Routing', 'Error Handling']
      },
      {
        name: 'Microsoft Forms',
        description: 'Structured data capture, branched survey logic, input validation, and real-time backend synchronization.',
        tags: ['Data Intake', 'Form Logic', 'Integration']
      },
      {
        name: 'Workflow Automation',
        description: 'End-to-end business process reengineering, notification triggers, and continuous task orchestration.',
        tags: ['Process Mapping', 'Notification Loops', 'Trigger Systems']
      }
    ]
  },
  {
    id: 'business',
    name: 'BUSINESS',
    tagline: 'Understanding how technology translates into real value.',
    appliedSummary: 'Grounding every line of code and every dataset in practical business reality, user desirability, and sustainable process efficiency.',
    skills: [
      {
        name: 'Market Analysis',
        description: 'Evaluating competitive landscapes, market trends, user demographic needs, and growth opportunities.',
        tags: ['Competitive Research', 'Trend Mapping', 'Benchmarking']
      },
      {
        name: 'Business Analysis',
        description: 'Requirements elicitation, stakeholder communication, workflow mapping, and gap analysis.',
        tags: ['Requirements', 'Stakeholder Alignment', 'Gap Analysis']
      },
      {
        name: 'Process Improvement',
        description: 'Identifying operational bottlenecks, eliminating redundancies, and streamlining organizational throughput.',
        tags: ['Efficiency', 'Bottleneck Removal', 'Standardization']
      },
      {
        name: 'Product Thinking',
        description: 'Balancing user needs, technical feasibility, and business viability to build software people actually use.',
        tags: ['User Centricity', 'UX Architecture', 'Value Framing']
      }
    ]
  }
];

export interface LanguageItem {
  name: string;
  level: string;
  detail: string;
  tag: string;
}

export const languagesData: LanguageItem[] = [
  {
    name: 'Indonesian',
    level: 'Native',
    detail: 'Native fluency in written and spoken communication.',
    tag: 'Native'
  },
  {
    name: 'English',
    level: 'Advanced',
    detail: 'Professional proficiency; 3rd Winner of National English Speech Competition.',
    tag: 'Advanced · Oratory Awardee'
  },
  {
    name: 'Mandarin',
    level: 'Intermediate',
    detail: 'Working proficiency in spoken and written Mandarin; Scholarship Awardee.',
    tag: 'Intermediate · Scholarship Recipient'
  }
];
