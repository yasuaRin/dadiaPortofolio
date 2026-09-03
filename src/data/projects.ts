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
    role: 'Team Leader · ML Engineer · Full-Stack Developer (FE & BE)',
    liveUrl: 'https://vidhelp-frontend.vercel.app/',
    clientOrContext: 'Capstone Project · VIDHELP Agency Operations Suite',
    description: 'An enterprise operational intelligence and analytics platform engineered to solve the 4 core business bottlenecks of VIDHELP agency.',
    technologies: ['React', 'Supabase', 'Python / ML', 'Data Analytics', 'TypeScript', 'Tailwind CSS'],
    overview: 'VIDHELP was engineered as our university capstone project to resolve critical operational bottlenecks for VIDHELP agency. Acting as Team Leader, ML Engineer, and Full-Stack Developer, I spearheaded the architectural design and implementation to eliminate scattered spreadsheets, streamline creator operations, and deliver real-time predictive financial telemetry.',
    problem: 'VIDHELP agency faced 4 critical core business challenges: 1) Disjointed client and creator tracking across unstandardized spreadsheets; 2) Delayed revenue recognition and slow invoicing turnaround; 3) Lack of unified operational metrics to diagnose team bandwidth and workflow bottlenecks; 4) Absence of predictive ML trend signals to forecast campaign yields and allocate agency resources efficiently.',
    approach: 'Architected a modular full-stack web ecosystem with real-time relational persistence, dynamic operational dashboards, and predictive Machine Learning algorithms that classify performance anomalies and forecast campaign revenues automatically.',
    technologyDetails: 'Developed with React and TypeScript on the frontend with custom analytics visualizers; Supabase PostgreSQL for secure real-time multi-tenant database persistence; and Python ML pipelines powering predictive trend forecasts and operational variance detection.',
    outcome: 'Successfully resolved all 4 core business bottlenecks: unified agency tracking into one single pane of glass, automated revenue visibility, provided real-time team workflow telemetry, and deployed ML forecasting for strategic client management.',
    keyHighlights: [
      'Capstone Project: Led full lifecycle as Team Leader, ML Engineer, and Full-Stack Developer',
      'Targeted resolution of the 4 fundamental business bottlenecks of VIDHELP agency',
      'Deployed real-time operational dashboard with live ML analytics pipelines',
      'Live deployment active at https://vidhelp-frontend.vercel.app/'
    ],
    metrics: [
      { label: 'Role', value: 'Team Lead & ML' },
      { label: 'Core Problems', value: '4 Solved' },
      { label: 'Platform Status', value: 'Live' }
    ]
  },
  {
    id: 'sales-analysis-automation',
    title: 'Sales Analysis Automation',
    subtitle: 'Multi-Platform Reporting Pipeline',
    category: 'Data · Automation',
    categories: ['Data', 'Automation'],
    year: '2024',
    role: 'Data Engineer & Automation Specialist',
    clientOrContext: 'Commercial Analytics & Workflow Pipeline',
    description: 'Automated sales analysis across multiple platforms to make reporting faster, error-free, and easier to understand.',
    technologies: ['Python', 'Pandas', 'Power BI', 'SQL', 'Data Pipelines'],
    overview: 'An automated data ingestion and aggregation pipeline that pulls multi-channel commercial transactions into standardized analytical reports with zero manual overhead.',
    problem: 'Sales data was siloed across separate e-commerce and retail channels, requiring repetitive manual exports, tedious data cleaning, and high risk of formula discrepancy each reporting cycle.',
    approach: 'Constructed an automated ETL script that harmonizes disparate schema formats, cleanses outliers, calculates rolling performance metrics, and exports clean summaries into dynamic dashboards.',
    technologyDetails: 'Built using Python (Pandas/NumPy) for automated data transformations and validation; scheduled workflows; and Power BI for interactive stakeholder visuals.',
    outcome: 'Eliminated hours of repetitive data wrangling while improving data consistency and enabling faster strategic pricing and inventory decisions.',
    keyHighlights: [
      'Automated multi-source schema normalization and cleansing',
      'Instant generation of period-over-period sales summaries',
      'Interactive executive dashboards for real-time commercial visibility'
    ],
    metrics: [
      { label: 'Time Saved', value: '~85%' },
      { label: 'Pipeline Speed', value: 'Automated' },
      { label: 'Output', value: 'Power BI' }
    ]
  },
  {
    id: 'payroll-system',
    title: 'Payroll Generation System',
    subtitle: 'Automated Compensation & Payslip Engine',
    category: 'Automation · Data',
    categories: ['Automation', 'Data', 'Web'],
    year: '2024',
    role: 'Solo Developer (100% Python Engine)',
    clientOrContext: 'Independent Enterprise Solution',
    description: 'An automated payroll generation system developed entirely using Python to compute compensations, tax brackets, and generate structured payment records.',
    technologies: ['Python', 'Pandas', 'Automated Reporting', 'Data Processing', 'File I/O'],
    overview: 'Developed entirely as a solo engineer, this system leverages pure Python engines to compute complex employee payrolls, calculate custom statutory tax deductions and allowances, and generate formatted payslip reports instantly.',
    problem: 'Manual payroll processing across spreadsheets was prone to human calculation errors, slow turnaround times during pay cycles, and lack of systematic payslip export generation.',
    approach: 'Designed a standalone Python-driven data calculation pipeline that validates employee hours, applies multi-tiered tax calculations and bonuses, and exports verified payroll summaries and individual employee slips.',
    technologyDetails: 'Engineered completely with Python, utilizing modular functions, robust data validation, structured file handling, and automated report generation routines.',
    outcome: 'Reduced periodic payroll calculation from hours to seconds with 100% mathematical accuracy, generating ready-to-distribute payment documentation with zero manual data entry errors.',
    keyHighlights: [
      'Developed independently as the sole software engineer',
      'Pure Python architecture for calculation, tax breakdown, and slip generation',
      '100% calculation accuracy with automated validation checks'
    ],
    metrics: [
      { label: 'Development', value: 'Solo Project' },
      { label: 'Core Engine', value: '100% Python' },
      { label: 'Accuracy', value: '100% Exact' }
    ]
  },
  {
    id: 'student-gpa-tracker',
    title: 'Student GPA & Academic Tracker',
    subtitle: 'ML Academic Trajectory & Performance Forecaster',
    category: 'AI · Data · Web',
    categories: ['AI', 'Data', 'Web'],
    year: '2023',
    role: 'Team Leader · ML Engineer · Full-Stack Developer (FE & BE)',
    clientOrContext: 'Academic Analytics & Machine Learning Initiative',
    description: 'An AI-powered academic analytics platform utilizing Machine Learning to forecast student graduation GPA trajectories and optimize study planning.',
    technologies: ['Machine Learning', 'Python', 'JavaScript', 'Data Science', 'Full-Stack Architecture'],
    overview: 'Serving as Team Leader, ML Engineer, and Full-Stack Developer, I guided the development of this intelligent academic management system that combines predictive modeling with an interactive course management interface.',
    problem: 'University students frequently struggle to anticipate how individual course grades affect their cumulative GPA and degree honors, lacking data-driven simulation tools to model their academic trajectory.',
    approach: 'Engineered predictive ML regression models that evaluate historical credit weighting and coursework trends, paired with a dynamic frontend interface allowing students to perform goal-seeking simulations.',
    technologyDetails: 'Built predictive ML algorithms in Python to evaluate GPA trajectories, integrated with an intuitive full-stack web application supporting credit-weighted scoring and instant local persistence.',
    outcome: 'Delivered an empowering academic companion that enables students to forecast outcomes, prioritize high-impact subjects, and maintain clear sight of honors goals.',
    keyHighlights: [
      'Led the initiative as Team Leader, ML Engineer, and Full-Stack Developer (FE & BE)',
      'Integrated Machine Learning algorithms for performance trend forecasting',
      'Dynamic weighted GPA calculation with goal-seeking targets'
    ],
    metrics: [
      { label: 'Role', value: 'Lead & ML Eng' },
      { label: 'Model', value: 'ML Forecast' },
      { label: 'Interface', value: 'Full-Stack' }
    ]
  },
  {
    id: 'teravince',
    title: 'Teravince NGO Digital Platform',
    subtitle: 'Non-Profit Web Experience & Impact Portal',
    category: 'Web · Product',
    categories: ['Web', 'Product'],
    year: '2024',
    role: 'Frontend Developer',
    clientOrContext: 'Teravince (NGO) · Non-Profit Digital Initiative',
    description: 'A responsive digital platform designed and developed for the non-governmental organization (NGO) Teravince to expand community reach and program visibility.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Accessibility'],
    overview: 'Teravince is a non-governmental organization (NGO) committed to positive community and educational impact. As a Frontend Developer, I built the modern, accessible web interface to articulate their mission, programs, and outreach initiatives.',
    problem: 'The NGO needed an engaging, modern digital presence to communicate its community programs clearly, engage volunteers, and ensure effortless navigation across diverse devices and low-bandwidth connections.',
    approach: 'Developed a high-performance, accessible frontend interface featuring responsive layouts, clear visual storytelling, intuitive program discovery, and seamless interaction flows.',
    technologyDetails: 'Constructed using modern React and TypeScript with Tailwind CSS for utility-driven styling, responsive ergonomics, and strict web accessibility (WCAG AA) standards.',
    outcome: 'Delivered a clean, highly accessible digital platform that significantly enhanced Teravince NGO’s community engagement, volunteer onboarding, and public storytelling.',
    keyHighlights: [
      'Frontend Developer for Teravince NGO digital initiative',
      'Engineered accessible, high-performance responsive web experience',
      'Designed clear narrative hierarchy to spotlight non-profit programs'
    ],
    metrics: [
      { label: 'Organization', value: 'NGO' },
      { label: 'Role', value: 'FE Developer' },
      { label: 'Accessibility', value: 'WCAG AA' }
    ]
  },
  {
    id: 'web-portfolio',
    title: 'Digital Portfolio Experience',
    subtitle: 'Interactive Engineering & Showcase Platform',
    category: 'Web · Engineering',
    categories: ['Web', 'React'],
    year: '2026',
    role: 'Solo Designer & Frontend Engineer',
    liveUrl: 'https://ais-pre-xw6nikmld7ojjq2xg7a2tg-465376357302.asia-southeast1.run.app',
    clientOrContext: 'Personal Digital Engineering Showcase',
    description: 'A bespoke, editorial digital portfolio showcasing data science, machine learning, and full-stack engineering work.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Canvas Physics'],
    overview: 'A bespoke web application designed and coded to articulate technical engineering rigor, machine learning capabilities, and editorial visual craftsmanship with speed and restraint.',
    problem: 'Conventional static portfolios lack the interactivity needed to demonstrate deep technical architecture, live telemetry, and nuanced design engineering.',
    approach: 'Crafted an unboxed, editorial visual language with rich motion choreography, interactive data matrices, live project inspection, and zero bloated third-party dependencies.',
    technologyDetails: 'Engineered with React 18, TypeScript, Tailwind CSS, and Motion layout transitions with multi-view presentation modes (Bento, Cascade, Matrix).',
    outcome: 'A production-grade digital experience that seamlessly presents technical projects, academic milestones, and multilingual competencies across all device formats.',
    keyHighlights: [
      'Bespoke design system with dual light/dark themes and interactive canvas physics',
      'Multi-mode project inspection (Bento 3D Tilt, Cascade Inspector, and Data Matrix)',
      '100% responsive architecture optimized for all viewport dimensions'
    ],
    metrics: [
      { label: 'Performance', value: '100 Score' },
      { label: 'Design System', value: 'Bespoke' },
      { label: 'Architecture', value: 'React + TS' }
    ]
  }
];
