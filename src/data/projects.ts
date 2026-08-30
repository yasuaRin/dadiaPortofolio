import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'vidhelp',
    title: 'VIDHELP',
    subtitle: 'Operations & Analytics Platform',
    category: 'Business · Data · AI',
    categories: ['Business', 'Data', 'AI'],
    featured: true,
    year: '2025',
    clientOrContext: 'Operational Intelligence & Performance Suite',
    description: 'A digital platform designed to improve internal operations, brand performance tracking, and revenue visibility.',
    technologies: ['React', 'Supabase', 'Machine Learning', 'Data Analytics', 'TypeScript', 'Tailwind CSS'],
    overview: 'VIDHELP is an end-to-end operational intelligence and analytics dashboard built to streamline brand workflows, consolidate distributed data streams, and provide actionable insights into revenue visibility and team operational bottlenecks.',
    problem: 'Internal teams were struggling with scattered metrics across multiple tracking sheets, delayed revenue reporting, and lack of automated insights into operational efficiency and brand campaign performance.',
    approach: 'Designed a unified architecture integrating real-time database feeds, lightweight predictive ML algorithms for trend detection, and a human-centered analytics interface tailored for both technical operators and executive decision makers.',
    technologyDetails: 'Engineered with React and TypeScript on the frontend for high responsiveness; Supabase PostgreSQL for real-time relational persistence; and custom Python/ML data pipelines for anomaly detection and trend forecasting.',
    outcome: 'Delivered an integrated operational hub that eliminates manual spreadsheet aggregation, reduces reporting latency from days to real-time, and provides clear visibility into key revenue drivers.',
    keyHighlights: [
      'Centralized multi-channel operational telemetry into a single interactive view',
      'Automated revenue tracking and performance variance alerts',
      'Predictive trend signals assisting tactical resource planning'
    ],
    metrics: [
      { label: 'Data Latency', value: 'Real-time' },
      { label: 'Reporting Speed', value: 'Instant' },
      { label: 'Platform Focus', value: 'Ops & AI' }
    ]
  },
  {
    id: 'sales-analysis-automation',
    title: 'Sales Analysis Automation',
    subtitle: 'Multi-Platform Reporting Pipeline',
    category: 'Data · Automation',
    categories: ['Data', 'Automation'],
    year: '2024',
    clientOrContext: 'Commercial Analytics & Workflow Pipeline',
    description: 'Automated sales analysis across multiple platforms to make reporting faster and easier to understand.',
    technologies: ['Python', 'Pandas', 'Power BI', 'SQL', 'Data Pipelines'],
    overview: 'An automated data ingestion and aggregation pipeline that pulls multi-channel commercial transactions into standardized analytical reports.',
    problem: 'Sales data was siloed across separate e-commerce and retail channels, requiring repetitive manual exports, data cleaning, and formula maintenance each reporting cycle.',
    approach: 'Constructed an automated ETL script that harmonizes disparate schema formats, cleanses outliers, calculates rolling performance metrics, and exports clean summaries into dynamic dashboards.',
    technologyDetails: 'Built using Python (Pandas/NumPy) for automated data transformations and validation; scheduled workflows; and Power BI for interactive stakeholder visuals.',
    outcome: 'Eliminated hours of repetitive data wrangling while improving data consistency and enabling faster strategic pricing and inventory decisions.',
    keyHighlights: [
      'Automated multi-source schema normalization',
      'Instant generation of period-over-period sales summaries',
      'Clean interactive dashboards for stakeholders'
    ],
    metrics: [
      { label: 'Time Saved', value: '~85%' },
      { label: 'Pipeline Speed', value: 'Scheduled' },
      { label: 'Output', value: 'Power BI' }
    ]
  },
  {
    id: 'payment-request-automation',
    title: 'Payment Request Automation',
    subtitle: 'Enterprise Approval & Verification Workflow',
    category: 'Automation · Power Platform',
    categories: ['Automation', 'Power Platform'],
    year: '2024',
    clientOrContext: 'Finance Operations & Process Optimization',
    description: 'A workflow designed to streamline payment requests, approvals, verification, and payment processing.',
    technologies: ['Power Automate', 'Microsoft Forms', 'SharePoint', 'Process Engineering'],
    overview: 'A standardized digital workflow that guides payment requests through tiered approvals, finance verification, and audit logging with zero manual paper handling.',
    problem: 'Disorganized email threads and paper forms caused delays in invoice verification, missing receipt documentation, and lack of visibility into request status.',
    approach: 'Mapped the organizational approval matrix and implemented structured intake forms coupled with conditional notification triggers and centralized audit records.',
    technologyDetails: 'Leveraged Microsoft Power Automate for rule-based routing and status triggers, Microsoft Forms for validated intake, and SharePoint lists as a secure audit database.',
    outcome: 'Reduced approval turnaround time, established transparent end-to-end tracking for requestors, and ensured compliance with verification policies.',
    keyHighlights: [
      'Structured conditional approval hierarchy based on expenditure tiers',
      'Automated email & Teams notification triggers at each milestone',
      'Centralized audit trail for accounting compliance'
    ],
    metrics: [
      { label: 'Approval Latency', value: '-70%' },
      { label: 'Paperless', value: '100%' },
      { label: 'Audit Trail', value: 'Automated' }
    ]
  },
  {
    id: 'web-portfolio',
    title: 'Web Portfolio',
    subtitle: 'Personal Digital Experience & Showcase',
    category: 'Web · React',
    categories: ['Web', 'React'],
    year: '2026',
    clientOrContext: 'Personal Brand & Creative Space',
    description: 'A personal web experience designed to present projects, skills, and professional interests.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    overview: 'A modern, editorial web presence created to articulate technical skills, creative curiosity, and personal identity with clarity and restraint.',
    problem: 'Traditional static resumes fail to convey interactive thinking, product sensibilities, and the nuanced intersections between data, business, and technology.',
    approach: 'Adopted an editorial layout with generous whitespace, subtle micro-interactions, purpose-driven skill categorizations, and deep case-study exploration.',
    technologyDetails: 'Crafted with React, TypeScript, Tailwind CSS, and Motion layout animations, ensuring high performance, responsive ergonomics, and strict accessibility.',
    outcome: 'A seamless, expressive digital portfolio that presents work effectively to recruiters, hiring managers, and collaborators across all devices.',
    keyHighlights: [
      'Minimalist visual aesthetic prioritizing typography and hierarchy',
      'Modular architecture with zero bloated dependencies',
      'Fluid responsiveness across mobile, tablet, and ultra-wide displays'
    ],
    metrics: [
      { label: 'Performance', value: '100 Lighthouse' },
      { label: 'Physics', value: '60 FPS Canvas' },
      { label: 'Themes', value: 'Dual Mode' }
    ]
  },
  {
    id: 'payroll-system',
    title: 'Payroll System',
    subtitle: 'Employee Compensation & Records Portal',
    category: 'Web · Information Systems',
    categories: ['Web', 'Information Systems'],
    year: '2024',
    clientOrContext: 'Internal Systems & Business Logic',
    description: 'A system designed to manage payroll-related information and processes.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Relational DB Design'],
    overview: 'A database-driven web application designed to compute compensations, tax deductions, bonuses, and generate employee payment records accurately.',
    problem: 'Manual payroll calculation spreadsheets were susceptible to calculation errors, lack of role-based security, and tedious slip generation.',
    approach: 'Designed normalized relational database schemas with automated salary calculation engines, secure authentication, and exportable payslip generation.',
    technologyDetails: 'Developed with relational MySQL database models, structured backend logic handling Indonesian payroll and tax rules, and an intuitive administrative interface.',
    outcome: 'Streamlined periodic payroll runs with reliable accuracy, secure employee credential management, and quick summary reports for HR.',
    keyHighlights: [
      'Automated gross-to-net salary and deduction calculations',
      'Role-based access controls for HR admins and staff',
      'Detailed monthly expenditure summaries'
    ],
    metrics: [
      { label: 'Accuracy', value: '100% Exact' },
      { label: 'Slip Generation', value: 'Instant' },
      { label: 'Role Access', value: 'RBAC' }
    ]
  },
  {
    id: 'student-gpa-tracker',
    title: 'Student GPA Tracker',
    subtitle: 'Academic Performance & Projection Tool',
    category: 'Data · Web',
    categories: ['Data', 'Web'],
    year: '2023',
    clientOrContext: 'Academic Utility & Data Management',
    description: 'A tool for managing and monitoring academic performance.',
    technologies: ['JavaScript', 'HTML5/CSS3', 'Local Storage', 'Data Visualization'],
    overview: 'A lightweight analytical utility helping university students organize course credits, track semester-by-semester GPA trends, and simulate target graduation outcomes.',
    problem: 'Students often lack quick tools to forecast how upcoming semester grades impact their cumulative GPA, leading to guesswork in academic planning.',
    approach: 'Built an interactive semester management matrix with dynamic credit weighting, immediate recalculation, and visual progression charts.',
    technologyDetails: 'Engineered using vanilla JavaScript and modern browser storage APIs for instant local privacy without requiring server signups.',
    outcome: 'Provided a clean, accessible utility that gives students clear visibility into their academic trajectory and target study goals.',
    keyHighlights: [
      'Dynamic weighted GPA calculation by credit hour',
      'Interactive goal-seeking calculator for target honors',
      'Zero latency client-side data persistence'
    ],
    metrics: [
      { label: 'Calculation', value: 'Real-time' },
      { label: 'Privacy', value: '100% Local' },
      { label: 'Forecasting', value: 'Target Seeking' }
    ]
  },
  {
    id: 'teravince',
    title: 'Teravince',
    subtitle: 'Digital Innovation & Experience Exploration',
    category: 'Product · Technology',
    categories: ['Product', 'Technology'],
    year: '2024',
    clientOrContext: 'Digital Venture & Product Prototyping',
    description: 'A digital project exploring technology-driven solutions and user experience.',
    technologies: ['UI/UX Design', 'Web Technologies', 'Product Discovery', 'User Research'],
    overview: 'A digital venture exploration focusing on human-centered digital experiences, clean product architecture, and tech-enabled utility.',
    problem: 'Users frequently face friction in adopting complex digital tools when user experience and practical utility are out of balance.',
    approach: 'Conducted user research, wireframed user journeys, and prototyped functional interactive interfaces tested for usability and clarity.',
    technologyDetails: 'Synthesized design thinking frameworks, Figma prototyping, and modern frontend foundations to translate conceptual models into tangible prototypes.',
    outcome: 'Established a validated product prototype highlighting how refined UX design transforms complex functional flows into intuitive interactions.',
    keyHighlights: [
      'User journey mapping and high-fidelity prototype validation',
      'Design system focusing on accessibility and visual hierarchy',
      'Scalable product architecture ready for iterative development'
    ],
    metrics: [
      { label: 'Prototyping', value: 'High Fidelity' },
      { label: 'UX Validation', value: 'Conducted' },
      { label: 'Design System', value: 'Componentized' }
    ]
  }
];
