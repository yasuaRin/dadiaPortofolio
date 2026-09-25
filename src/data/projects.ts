import { Project } from '../types';
import payrollImg from '../assets/images/payroll.png';
import salesImg from '../assets/images/sales.png';
import sosproImg from '../assets/images/sospro.png';
import gpaTrackerImg from '../assets/images/gpaTracker.png';
import teravinceImg from '../assets/images/teravince.jpg';
import portfolioImg from '../assets/images/portfolio.png';

export const projectsData: Project[] = [
  {
    id: 'vidhelp',
    title: 'VIDHELP',
    subtitle: 'TikTok Live Agency Operations & Intelligence Platform',
    category: 'Full-Stack · Machine Learning · Agency Ops',
    categories: ['Business', 'AI', 'Web'],
    featured: true,
    year: '2025',
    duration: '4 Months',
    team: '4-person University Capstone Team (Team Leader)',
    role: 'Team Leader · Full-Stack Engineer · ML Feature Lead',
    liveUrl: 'https://vidhelp-frontend.vercel.app/',
    clientOrContext: 'University Capstone Project for VIDHELP (Official TikTok Live Agency Partner)',
    description: 'Centralized operations hub for an official TikTok Live Agency Partner—unifying multi-brand streaming rosters, operational CRUD, and ML revenue & churn forecasting.',
    technologies: ['React 18', 'Supabase', 'Python', 'TypeScript', 'Tailwind CSS', 'Scikit-Learn'],
    overview: 'As Team Leader of a 4-person capstone team, engineered an authenticated Admin Panel for VIDHELP to unify creator management and predict revenue.',
    problem: 'Managing creator rosters across scattered chat groups and disconnected tools caused operational delays, redundant data entry, and zero visibility into brand churn.',
    approach: 'Architected an authenticated Admin Panel with PostgreSQL RLS for centralized roster management, complemented by Python ML models for revenue and churn forecasting.',
    technologyDetails: 'React 18 & Tailwind CSS frontend, Supabase (PostgreSQL with RLS) for role-based authentication, and Python (Scikit-Learn) for predictive analytics.',
    outcome: 'Consolidated fragmented operations into a single authenticated dashboard, provided executive revenue telemetry, and delivered all milestones ahead of deadline.',
    problemItems: [
      {
        number: '01',
        title: 'Fragmented Operations',
        description: 'Creator rosters and livestream schedules were scattered across chat groups, causing coordination delays.',
        addressedInScope: true,
        resolutionTag: 'Solved in Scope'
      },
      {
        number: '02',
        title: 'Decentralized Tooling (No Unified CRUD)',
        description: 'Operations managers had to perform redundant data entry across multiple disconnected platforms.',
        addressedInScope: true,
        resolutionTag: 'Solved in Scope'
      },
      {
        number: '03',
        title: 'Brand Credibility & Web Presence',
        description: 'Lacked a modern digital portal to showcase official TikTok Live Agency credentials to tier-1 enterprise brands.',
        addressedInScope: false,
        resolutionTag: 'Agency Bottleneck'
      },
      {
        number: '04',
        title: 'Manual Partner Acquisition',
        description: 'Brand onboarding and partner outreach relied on offline conversations without pipeline tracking.',
        addressedInScope: false,
        resolutionTag: 'Agency Bottleneck'
      }
    ],
    approachSteps: [
      {
        phase: '01. Discovery',
        title: 'Diagnosing the 4 Operational Bottlenecks',
        description: 'Mapped the agency’s livestream operations to isolate their four friction points: fragmented ops, credibility, multi-app data sprawl, and manual partner intake.'
      },
      {
        phase: '02. Architecture',
        title: 'Centralized Admin & Unified CRUD',
        description: 'Engineered a secure, authenticated Admin Panel with PostgreSQL RLS where managers maintain brand partners and live crews in one interface.'
      },
      {
        phase: '03. Intelligence',
        title: 'ML Forecasting & Churn Early-Warning',
        description: 'Trained Python machine learning models on historical stream metrics to project future monthly earnings and flag early signs of brand dissatisfaction.'
      },
      {
        phase: '04. Leadership',
        title: 'Agile Sprint Management & Early Delivery',
        description: 'Led the 4-person engineering team using structured sprints, clearing technical blockers collaboratively to ship ahead of the university deadline.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Frontend Command Center',
        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Interactive Charts', 'Motion']
      },
      {
        category: 'Backend & Data Security',
        items: ['Supabase', 'PostgreSQL', 'Row-Level Security (RLS)', 'Role-Based Authentication']
      },
      {
        category: 'Machine Learning & Analytics',
        items: ['Python', 'ML Revenue Forecasting', 'Predictive Churn Detection', 'Scikit-Learn']
      },
      {
        category: 'Leadership & Production',
        items: ['Agile / Sprint Cycles', 'Team Velocity Tracking', 'Vercel Deployment', 'GitHub Collaboration']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Role-Based Authenticated Admin',
        description: 'Restricted access ensuring only verified agency operators can view proprietary brand rosters and financial figures.',
        tag: 'Security & Access'
      },
      {
        number: '02',
        title: 'Unified Operations & CRUD',
        description: 'Single interface to add, update, and organize brand partners, streaming crews, and timetables without app-switching.',
        tag: 'Centralized Ops'
      },
      {
        number: '03',
        title: 'Executive Telemetry & Drilldowns',
        description: 'Instant overview of active brand partners, assigned live crews, and period-by-period revenue with granular analytics.',
        tag: 'Telemetry'
      },
      {
        number: '04',
        title: 'Predictive ML: Forecasting & Churn Alert',
        description: 'Machine learning algorithms forecasting upcoming monthly revenue and flagging early warning indicators for at-risk brands.',
        tag: 'Machine Learning'
      }
    ],
    keyHighlights: [
      'Built for VIDHELP, an official TikTok Live Agency Partner scaling live-stream commerce',
      'Targeted the agency’s two largest friction points: fragmented operations and multi-tool CRUD sprawl',
      'Engineered an authenticated Admin Panel unifying brand rosters, period revenue, and executive telemetry',
      'Led 4-person engineering team using Agile sprint cycles, delivering production system ahead of deadline'
    ],
    metrics: [
      { label: 'Role', value: 'Team Leader' },
      { label: 'Delivery', value: 'Ahead of Deadline' },
      { label: 'Key Focus', value: 'Admin & ML Engine' },
      { label: 'Status', value: 'Live & Operational' }
    ]
  },
  {
    id: 'sales-analysis-automation',
    title: 'Sales Analysis Automation',
    subtitle: 'Python Sales ETL Pipeline & Trend Discovery Engine',
    category: 'Data Analytics · Python Pipeline · Visual Dashboards',
    categories: ['Data', 'Automation', 'Business'],
    year: '2025',
    duration: 'Personal Project',
    team: 'Independent Data Analysis Project',
    role: 'Data Analyst',
    imageUrl: salesImg,
    githubUrl: 'https://github.com/yasuaRin/project.git',
    clientOrContext: 'Kaggle Multi-Month Sales Dataset Analysis',
    description: 'Developed a personal data analysis project using a Kaggle sales dataset, creating a Python pipeline to clean, process, and analyze multi-month sales data.',
    technologies: ['Python', 'Matplotlib', 'Seaborn', 'Kaggle', 'GitHub', 'Pandas'],
    overview: 'Developed a personal data analysis project using a Kaggle sales dataset, creating a Python pipeline to clean, process, and analyze multi-month sales data. The project was designed to uncover key sales trends and provide insight-driven visual reports that support better business decision making.',
    responsibilities: [
      'Developed a Python pipeline to clean, merge, and analyze multi-month sales data.',
      'Identified top-performing months, cities, and product combinations.',
      'Created visual dashboards to present sales trends using Matplotlib.'
    ],
    impact: [
      'Uncovered key sales patterns across products, cities, and months.',
      'Automated data cleaning and analysis, reducing manual work.',
      'Improved my own skills in Python and business-focused data interpretation.'
    ],
    problem: 'Raw, distributed multi-month sales records contained missing fields, inconsistent formatting, and unaggregated transactions, making it challenging to extract clear business insights without automated processing.',
    approach: 'Engineered a unified Python data pipeline to clean, merge, and parse multi-month transactions from Kaggle, building visual exploratory dashboards with Matplotlib and Seaborn to uncover peak months, city demand, and product associations.',
    technologyDetails: 'Python for pipeline automation, Pandas for data cleaning and merging, Matplotlib and Seaborn for high-fidelity trend charts, and Kaggle for multi-month sales benchmark datasets.',
    outcome: 'Automated data cleaning and multi-month analysis while uncovering critical revenue drivers across products, cities, and seasons through actionable visual dashboards.',
    problemItems: [
      {
        number: '01',
        title: 'Multi-Month Data Fragmentation',
        description: 'Monthly sales datasets were divided into isolated files with varying headers and formatting discrepancies.',
        addressedInScope: true,
        resolutionTag: 'Solved via Python Merge'
      },
      {
        number: '02',
        title: 'Manual Data Cleaning Overhead',
        description: 'Manually sanitizing null values, string dates, and non-numeric order quantities required tedious, error-prone effort.',
        addressedInScope: true,
        resolutionTag: 'Solved via Automated Pipeline'
      },
      {
        number: '03',
        title: 'Hidden Cross-Product Patterns',
        description: 'Businesses struggled to pinpoint which items were frequently purchased together and which cities generated peak volume.',
        addressedInScope: true,
        resolutionTag: 'Solved via Basket Analysis'
      },
      {
        number: '04',
        title: 'Lack of Clear Visual Reporting',
        description: 'Raw numeric tables failed to communicate seasonal peaks and regional growth opportunities to non-technical stakeholders.',
        addressedInScope: true,
        resolutionTag: 'Solved via Matplotlib & Seaborn'
      }
    ],
    approachSteps: [
      {
        phase: '01. Pipeline',
        title: 'Data Ingestion & Merging',
        description: 'Developed an automated Python script to ingest and merge individual monthly sales CSV files into a unified dataset.'
      },
      {
        phase: '02. Sanitization',
        title: 'Automated Cleaning & Type Parsing',
        description: 'Filtered out incomplete records, standardized datetime columns, and generated clean numeric revenue fields.'
      },
      {
        phase: '03. Discovery',
        title: 'Trend & Cohort Analysis',
        description: 'Analyzed sales velocities across top-performing months, geographic cities, and multi-item checkout combinations.'
      },
      {
        phase: '04. Visualization',
        title: 'Matplotlib & Seaborn Dashboards',
        description: 'Constructed intuitive visual dashboards illustrating monthly trajectories, city comparisons, and peak ordering hours.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Programming & Pipeline',
        items: ['Python', 'Data Cleaning Pipeline', 'Multi-Month Merge', 'Automated Scripts']
      },
      {
        category: 'Data Visualization',
        items: ['Matplotlib', 'Seaborn', 'Trend Visualizations', 'Sales Dashboards']
      },
      {
        category: 'Data Source & Benchmark',
        items: ['Kaggle Sales Dataset', 'Multi-Month Transactions', 'E-Commerce Records']
      },
      {
        category: 'Version Control & Sharing',
        items: ['GitHub', 'Jupyter / Script Notebooks', 'Insight Reports']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Automated Ingestion & Merging',
        description: 'Combines multi-month sales transaction files into a consolidated, clean dataset with a single script execution.',
        tag: 'Python Pipeline'
      },
      {
        number: '02',
        title: 'Multi-Dimension Trend Analysis',
        description: 'Discovers peak revenue months, top-grossing cities, and optimal advertising hours based on checkout frequency.',
        tag: 'Data Discovery'
      },
      {
        number: '03',
        title: 'Product Association Mapping',
        description: 'Identifies frequently co-purchased items (such as phones and charging cables) to support cross-selling strategies.',
        tag: 'Basket Analysis'
      },
      {
        number: '04',
        title: 'Executive Matplotlib Visuals',
        description: 'Generates high-contrast visual charts and distribution plots ready for presentation to business leaders.',
        tag: 'Visual Dashboards'
      }
    ],
    keyHighlights: [
      'Developed a personal data analysis project using a Kaggle sales dataset with Python',
      'Engineered an automated pipeline to clean, merge, and process multi-month retail sales data',
      'Discovered top-performing months, cities, and frequently co-purchased product combinations',
      'Created visual dashboards to present actionable sales trends using Matplotlib and Seaborn'
    ],
    metrics: [
      { label: 'Role', value: 'Data Analyst' },
      { label: 'Pipeline', value: 'Python Automated' },
      { label: 'Visualization', value: 'Matplotlib & Seaborn' },
      { label: 'Dataset', value: 'Kaggle Multi-Month' }
    ]
  },
  {
    id: 'payroll-system',
    title: 'Easy Payroll & Payslip Generator',
    subtitle: 'Banana Byte Employee Payroll & Salary Portal',
    category: 'Web App · Security · Database',
    categories: ['Web', 'Security', 'Database', 'Automation'],
    year: '2024',
    duration: '1 Week (Exam Deadline)',
    team: 'Independent Engineering (Solo)',
    role: 'Solo Developer (Built 100% from Scratch)',
    imageUrl: payrollImg,
    clientOrContext: 'Final Exam Project for Banana Byte',
    description: 'Custom payroll management system for Banana Byte built under a one-week final exam deadline, enabling secure credential login and automated PDF salary invoices.',
    technologies: ['Python', 'PostgreSQL', 'Password Hashing (Werkzeug)', 'PDF Generation'],
    overview: 'Custom payroll management system for Banana Byte developed under a tight one-week final exam deadline.',
    problem: 'Banana Byte needed a secure internal portal where staff could log in with verified credentials, record payroll data, and access monthly salary invoices without spreadsheet errors or confidential data leaks.',
    approach: 'Engineered a Python web application backed by PostgreSQL, using Werkzeug password hashing for secure authentication and ReportLab for automated monthly PDF invoice generation.',
    technologyDetails: 'Python application logic, PostgreSQL relational schema, Werkzeug cryptographic hashing, and automated PDF invoice compilation.',
    outcome: 'Delivered a reliable, fully functional system within a strict 7-day academic deadline, demonstrating full-stack velocity, secure credential hashing, and automated PDF generation.',
    problemItems: [
      {
        number: '01',
        title: 'Unsecured Pay Access',
        description: 'Employees lacked a private, authenticated login to access salary details without risking wage disclosure.',
        addressedInScope: true,
        resolutionTag: 'Solved via Auth'
      },
      {
        number: '02',
        title: 'Manual Spreadsheets',
        description: 'Calculating earnings and tax brackets by hand in spreadsheets caused calculation errors and delayed payouts.',
        addressedInScope: true,
        resolutionTag: 'Solved via PostgreSQL'
      },
      {
        number: '03',
        title: 'Slow Invoice Delivery',
        description: 'Generating and distributing individual payslips manually each month was inefficient and tedious.',
        addressedInScope: true,
        resolutionTag: 'Solved via PDF Engine'
      },
      {
        number: '04',
        title: '1-Week Exam Limit',
        description: 'The final exam demanded building, testing, and shipping the entire application independently in just 7 days.',
        addressedInScope: true,
        resolutionTag: 'Delivered on Time'
      }
    ],
    approachSteps: [
      {
        phase: '01. Security',
        title: 'Authentication & Password Hashing',
        description: 'Built a secure login system for Banana Byte employees with ID and password verification powered by Werkzeug.'
      },
      {
        phase: '02. Database',
        title: 'PostgreSQL Payroll Architecture',
        description: 'Designed a clean dashboard and database schema to store and display individual payroll data accurately.'
      },
      {
        phase: '03. Generation',
        title: 'Automated Monthly PDF Invoices',
        description: 'Streamlined payroll processing by auto-generating personalized monthly PDF salary invoices ready for employee download.'
      },
      {
        phase: '04. Delivery',
        title: 'Rapid 1-Week Independent Sprint',
        description: 'Executed the entire development lifecycle solo within a strict one-week final exam deadline.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Core Language',
        items: ['Python', 'Web Framework', 'Application Logic']
      },
      {
        category: 'Database & Storage',
        items: ['PostgreSQL', 'Relational Schemas', 'Payroll Records']
      },
      {
        category: 'Security & Auth',
        items: ['Werkzeug Hashing', 'Credential Verification', 'Session Auth']
      },
      {
        category: 'Document Output',
        items: ['PDF Generation', 'Auto-Invoice Engine', 'Downloadable Slips']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Secure Credential Login',
        description: 'Staff securely log in with employee ID and Werkzeug-hashed passwords to protect salary confidentiality.',
        tag: 'Security & Auth'
      },
      {
        number: '02',
        title: 'PostgreSQL Payroll Records',
        description: 'Relational database tables store individual staff earnings, hours, deductions, and payment records.',
        tag: 'Database'
      },
      {
        number: '03',
        title: 'Auto-Generated PDF Invoices',
        description: 'Instantly compiles personalized, downloadable PDF monthly salary invoices with itemized calculations.',
        tag: 'PDF Generation'
      },
      {
        number: '04',
        title: '1-Week Exam Delivery',
        description: 'Architected, coded, and delivered the entire application independently within a strict 7-day academic deadline.',
        tag: 'Rapid Delivery'
      }
    ],
    keyHighlights: [
      'Secure login with Werkzeug cryptographic password hashing',
      'PostgreSQL relational database for employee payroll records',
      'Automated monthly PDF salary invoice generator',
      '100% independent development completed under a 1-week deadline'
    ],
    metrics: [
      { label: 'Timeline', value: '1 Week' },
      { label: 'Client / Exam', value: 'Banana Byte' },
      { label: 'Security', value: 'Werkzeug Auth' },
      { label: 'Database', value: 'PostgreSQL' }
    ]
  },
  {
    id: 'student-gpa-tracker',
    title: 'Student GPA Tracker',
    subtitle: 'Intelligent Academic Pattern Analysis & Early GPA Forecasting Platform',
    category: 'Data Science · Machine Learning · Fullstack Django',
    categories: ['AI', 'Data', 'Web'],
    year: '2024',
    duration: 'Semester Project',
    team: 'Project Team Leader',
    role: 'Data Scientist + Fullstack Developer + System Administrator',
    imageUrl: gpaTrackerImg,
    githubUrl: 'https://github.com/shynnyy/final_destination.git',
    clientOrContext: 'Intelligent Academic Forecasting & GPA Intervention Tool',
    description: 'An intelligent GPA forecasting platform designed to analyze students’ academic patterns and predict early GPA declines, helping them stay prepared from their first semester.',
    technologies: ['Python', 'Machine Learning', 'Django', 'PostgreSQL', 'pgAdmin', 'Admin Panel', 'Predictive Modeling'],
    overview: 'An intelligent GPA forecasting platform designed to analyze students’ academic patterns and predict early GPA declines, helping them stay prepared from their first semester. The system provides clear insights, trend visualizations, and AI-driven predictions to support smarter academic planning. I led the project team and built the platform’s core GPA forecasting feature, ensuring accuracy, usability, and seamless integration across the system.',
    responsibilities: [
      'Developed the GPA Tracker feature using machine learning to forecast GPA changes across future semesters.',
      'Created a Django Admin Panel with full CRUD capabilities and a model-retraining option to maintain prediction accuracy.',
      'Managed academic data using PostgreSQL and pgAdmin, ensuring secure, scalable, and reliable storage.'
    ],
    impact: [
      'Enabled students to identify potential GPA drops early through AI-driven predictions.',
      'Improved academic planning with clear trend visualizations and personalized insights.',
      'Delivered a fully functional system by managing both the backend logic and platform administration independently.'
    ],
    problem: 'Students frequently lack forward-looking visibility into academic trajectory, discovering potential GPA declines too late in later semesters to course-correct or maintain academic standing.',
    approach: 'Led development of an intelligent GPA forecasting system pairing Python machine learning models with a full CRUD Django Admin Panel, automated retraining pipeline, and robust PostgreSQL database.',
    technologyDetails: 'Python ML forecasting models, Django Admin Panel with model retraining triggers, and PostgreSQL with pgAdmin for reliable relational storage.',
    outcome: 'Delivered an end-to-end intelligent forecasting platform independently managing backend logic and system administration—enabling students to visualize performance trends and plan proactive academic interventions.',
    problemItems: [
      {
        number: '01',
        title: 'Unmonitored GPA Declines',
        description: 'Students struggled to spot subtle performance dips before they resulted in cumulative GPA drops.',
        addressedInScope: true,
        resolutionTag: 'Solved via ML Forecasting'
      },
      {
        number: '02',
        title: 'Model Stagnation',
        description: 'Static prediction algorithms lost accuracy without dynamic model-retraining mechanisms.',
        addressedInScope: true,
        resolutionTag: 'Solved via Retraining Trigger'
      },
      {
        number: '03',
        title: 'Data Administration Overhead',
        description: 'Managing complex student academic records required secure, structured relational storage with full CRUD controls.',
        addressedInScope: true,
        resolutionTag: 'Solved via Django Admin & PostgreSQL'
      },
      {
        number: '04',
        title: 'Academic Intervention Delays',
        description: 'Retroactive transcripts prevented early preparation from the first semester.',
        addressedInScope: true,
        resolutionTag: 'Solved via Early Warnings'
      }
    ],
    approachSteps: [
      {
        phase: '01. Modeling',
        title: 'Machine Learning GPA Forecast',
        description: 'Developed predictive models in Python analyzing past grade patterns to forecast future GPA trends.'
      },
      {
        phase: '02. Platform',
        title: 'Django Admin Panel & CRUD',
        description: 'Built a robust Django administration portal with complete CRUD functionality and dynamic model-retraining triggers.'
      },
      {
        phase: '03. Database',
        title: 'PostgreSQL & pgAdmin Storage',
        description: 'Structured relational database schemas with pgAdmin ensuring secure, scalable, and reliable academic data management.'
      },
      {
        phase: '04. Visualizer',
        title: 'Academic Insights & Trend Visuals',
        description: 'Created clear graphical visualizations and personalized student recommendations to support smarter academic planning.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Web Projects & Backend',
        items: ['Django Framework', 'Django Admin Panel', 'Full CRUD Controls', 'Model-Retraining Pipeline']
      },
      {
        category: 'Machine Learning & Analytics',
        items: ['Python', 'Machine Learning', 'GPA Trend Forecasting', 'Academic Pattern Analysis']
      },
      {
        category: 'Database & Infrastructure',
        items: ['PostgreSQL', 'pgAdmin', 'Relational Schemas', 'Secure Scalable Storage']
      },
      {
        category: 'Project Leadership',
        items: ['Data Scientist Lead', 'Fullstack Developer', 'System Administrator', 'Team Leadership']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Intelligent GPA Forecasting',
        description: 'Analyzes student academic patterns and forecasts GPA changes across future semesters using ML models.',
        tag: 'Machine Learning'
      },
      {
        number: '02',
        title: 'Django Admin Panel with Full CRUD',
        description: 'Administrative panel enabling staff to manage academic records and trigger model retraining on demand.',
        tag: 'Django & Python'
      },
      {
        number: '03',
        title: 'PostgreSQL Academic Data Management',
        description: 'Configured and managed secure relational storage using PostgreSQL and pgAdmin for seamless data integrity.',
        tag: 'PostgreSQL / pgAdmin'
      },
      {
        number: '04',
        title: 'Early Decline Warning & Planning',
        description: 'Visualizes historical and predicted GPA milestones to empower students with proactive academic intervention.',
        tag: 'Smart Planning'
      }
    ],
    keyHighlights: [
      'Built the platform’s core GPA forecasting feature using machine learning to predict semester trends',
      'Created a comprehensive Django Admin Panel with full CRUD operations and model-retraining trigger',
      'Architected and managed academic data persistence using PostgreSQL and pgAdmin',
      'Led the project team across Data Science, Fullstack Development, and System Administration'
    ],
    metrics: [
      { label: 'Role', value: 'Data Scientist & Lead' },
      { label: 'Engine', value: 'Python ML Forecast' },
      { label: 'Platform', value: 'Django + PostgreSQL' },
      { label: 'Admin', value: 'CRUD & Retraining' }
    ]
  },
  {
    id: 'teravince',
    title: 'Teravince',
    subtitle: 'AI-Powered Performance Evaluation & Unbiased Review Platform',
    category: 'AI Platform · Performance Analytics · Frontend Engineering',
    categories: ['AI', 'Web', 'Product'],
    year: '2025',
    duration: 'Completed Project',
    team: 'Product Engineering Team',
    role: 'Frontend Developer',
    imageUrl: teravinceImg,
    githubUrl: 'https://github.com/MBrillian354/teravince',
    clientOrContext: 'AI Performance Evaluation Platform for Startups & NGOs',
    description: 'Teravince is an AI-powered performance evaluation platform designed to eliminate biased and inconsistent reviews in startups and NGOs.',
    technologies: ['Figma', 'React', 'Tailwind CSS', 'Node JS', 'MongoDB', 'GitHub Integration', 'REST APIs'],
    overview: 'Teravince is an AI-powered performance evaluation platform designed to eliminate biased and inconsistent reviews in startups and NGOs. It delivers clear, role-specific KPIs, real-time performance dashboards, anonymous peer evaluations, and evidence-based feedback. Through integrations such as GitHub, the platform automates performance tracking and enables team members to highlight their genuine contributions. This completed project showcases a thoughtful application of technology to solve real organizational challenges and support fair, data-driven talent development.',
    responsibilities: [
      'Converted Figma designs into a responsive, modern UI.',
      'Built core frontend features like dashboards and evaluation flows.',
      'Worked with backend APIs to ensure smooth data display and interactions.'
    ],
    impact: [
      'Delivered a clear, intuitive interface that improved how teams view performance data.',
      'Helped reduce bias by making insights, KPIs, and peer evaluations easier to understand.',
      'Improved overall user workflow by simplifying complex evaluation processes into easy, guided steps.'
    ],
    problem: 'Startups and NGOs frequently struggle with biased, subjective, and inconsistent performance reviews that lack evidence-based benchmarks, transparent KPIs, and objective evaluation workflows.',
    approach: 'Converted Figma design systems into a responsive modern UI with React and Tailwind CSS, engineering interactive dashboards, anonymous evaluation flows, and seamless Node.js/MongoDB API integrations.',
    technologyDetails: 'Figma for design system conversion, React and Tailwind CSS for responsive frontend dashboards, Node.js and MongoDB for backend evaluation endpoints and GitHub integration.',
    outcome: 'Delivered a clear, intuitive interface that simplifies complex evaluation workflows into guided steps, enabling transparent, data-driven talent development without subjective bias.',
    problemItems: [
      {
        number: '01',
        title: 'Subjective & Biased Reviews',
        description: 'Traditional reviews relied on personal opinions rather than role-specific KPIs and measurable milestones.',
        addressedInScope: true,
        resolutionTag: 'Solved via Anonymous Peer Reviews'
      },
      {
        number: '02',
        title: 'Unclear Role-Specific KPIs',
        description: 'Team members in startups and NGOs lacked clear, transparent metrics aligned with their distinct responsibilities.',
        addressedInScope: true,
        resolutionTag: 'Solved via Performance Dashboards'
      },
      {
        number: '03',
        title: 'Fragmented Contribution Tracking',
        description: 'Actual work evidence was scattered across code commits, pull requests, and project tasks without automated logging.',
        addressedInScope: true,
        resolutionTag: 'Solved via GitHub Integration'
      },
      {
        number: '04',
        title: 'Evaluation Complexity & Fatigue',
        description: 'Dense evaluation forms caused frustration and low completion rates across participating teams.',
        addressedInScope: true,
        resolutionTag: 'Solved via Guided Evaluation Steps'
      }
    ],
    approachSteps: [
      {
        phase: '01. Design to Code',
        title: 'Figma Design Conversion',
        description: 'Converted Figma designs into a responsive, modern component-driven UI using React and Tailwind CSS.'
      },
      {
        phase: '02. Features',
        title: 'Dashboards & Evaluation Flows',
        description: 'Built core frontend features including real-time performance analytics dashboards and anonymous peer evaluation workflows.'
      },
      {
        phase: '03. Integration',
        title: 'Backend API Connectivity',
        description: 'Worked with Node.js backend APIs and MongoDB to ensure smooth data display, state handling, and reliable user interactions.'
      },
      {
        phase: '04. Contribution Sync',
        title: 'Automated GitHub Tracking',
        description: 'Connected developer activity and commit milestones to provide objective, evidence-based feedback.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Design & UI',
        items: ['Figma', 'Figma to React', 'Responsive UI Design', 'Design Systems']
      },
      {
        category: 'Frontend Engineering',
        items: ['React', 'Tailwind CSS', 'Performance Dashboards', 'Evaluation Flows']
      },
      {
        category: 'Backend & Database',
        items: ['Node JS', 'REST APIs', 'MongoDB', 'Data Synchronization']
      },
      {
        category: 'Integrations & Tooling',
        items: ['GitHub Integration', 'Automated Tracking', 'Evidence Logging', 'Anonymous Review Flows']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Figma to Responsive UI',
        description: 'Transformed Figma wireframes into pixel-perfect, highly responsive React and Tailwind CSS interfaces.',
        tag: 'Figma to React'
      },
      {
        number: '02',
        title: 'Real-Time Performance Dashboards',
        description: 'Visualizes role-specific KPIs, goal progression, and transparent metrics for teams and mentors.',
        tag: 'React Dashboards'
      },
      {
        number: '03',
        title: 'Guided Anonymous Evaluations',
        description: 'Simplifies complex review workflows into guided, step-by-step forms that eliminate evaluation bias.',
        tag: 'Peer Review'
      },
      {
        number: '04',
        title: 'Automated GitHub Evidence',
        description: 'Tracks genuine engineering contributions and activity milestones directly from GitHub repository events.',
        tag: 'GitHub Sync'
      }
    ],
    keyHighlights: [
      'Converted Figma designs into a responsive, modern UI using React and Tailwind CSS',
      'Built core frontend features like real-time dashboards and multi-step evaluation flows',
      'Worked with Node.js backend APIs and MongoDB to ensure smooth data display and interactions',
      'Helped eliminate review bias with role-specific KPIs and automated GitHub performance tracking'
    ],
    metrics: [
      { label: 'Role', value: 'Frontend Developer' },
      { label: 'UI Flow', value: 'Figma to React' },
      { label: 'Frontend', value: 'React + Tailwind CSS' },
      { label: 'Backend', value: 'Node JS + MongoDB' }
    ]
  },
  {
    id: 'web-portfolio',
    title: 'Personal Portfolio & Showcase',
    subtitle: 'Systems Engineering Portfolio & Interactive Case Studies',
    category: 'Web Engineering · Systems Design · Interactive UI',
    categories: ['Web', 'React'],
    year: '2026',
    duration: 'Active Project',
    team: 'Personal Project (Solo)',
    role: 'Solo Designer & Frontend Engineer',
    imageUrl: portfolioImg,
    liveUrl: 'https://yasuarin-portofolio.vercel.app/',
    githubUrl: 'https://github.com/yasuaRin/dadiaPortofolio.git',
    clientOrContext: 'Personal Digital Portfolio & Project Showcase',
    description: 'Interactive engineering portfolio highlighting systems design, interactive component previews, and measurable project outcomes.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite'],
    overview: 'Architected and developed a custom engineering portfolio featuring deep systems case studies, interactive UI previews, and high-contrast dual themes.',
    problem: 'Standard static portfolios and PDF resumes fail to demonstrate actual engineering decisions, interactive system behaviors, or problem-solving methodologies.',
    approach: 'Built a bespoke web experience using React, TypeScript, and Tailwind CSS, featuring modular case studies, interactive preview canvases, and fluid dark/light themes.',
    technologyDetails: 'React 18, TypeScript, and Tailwind CSS with Motion for layout animations and custom canvas particles for interactive background dynamics.',
    outcome: 'Created a fast, accessible showcase that communicates engineering depth, architectural trade-offs, and technical leadership to recruiters and peers.',
    problemItems: [
      {
        number: '01',
        title: 'Static Resume Limitations',
        description: 'Flat documents cannot demonstrate interactive frontend animations, responsive layouts, or live component behaviors.',
        addressedInScope: true,
        resolutionTag: 'Solved via Case Studies'
      },
      {
        number: '02',
        title: 'Lack of Interactive Demos',
        description: 'Case studies usually show static screenshots instead of interactive simulated interfaces demonstrating system workflows.',
        addressedInScope: true,
        resolutionTag: 'Solved via UI Previews'
      },
      {
        number: '03',
        title: 'Unoptimized Multi-Theming',
        description: 'Many portfolios flash or suffer poor color contrast when toggling between dark and light viewing environments.',
        addressedInScope: true,
        resolutionTag: 'Solved via Dual Contrast'
      },
      {
        number: '04',
        title: 'Heavy Framework Overhead',
        description: 'Bloated third-party UI templates degrade initial loading performance and responsiveness on mobile screens.',
        addressedInScope: true,
        resolutionTag: 'Solved via Vite Stack'
      }
    ],
    approachSteps: [
      {
        phase: '01. Architecture',
        title: 'Content & Information Architecture',
        description: 'Structured comprehensive case studies with standardized 4-module layouts covering problem, features, outcomes, and stack.'
      },
      {
        phase: '02. Design System',
        title: 'Mathematical Tokens & Theming',
        description: 'Selected refined typography, WCAG AA contrast pairings, and smooth dual-theme transitions with zero screen flash.'
      },
      {
        phase: '03. Interaction',
        title: 'Interactive UI Simulation',
        description: 'Built bespoke embedded previews for every project allowing visitors to interact directly with simulated system workflows.'
      },
      {
        phase: '04. Performance',
        title: 'Bundle Tuning & Responsive Polish',
        description: 'Optimized tree-shaking and component modularity to achieve instant loading across desktop and mobile screens.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Core Frontend',
        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite']
      },
      {
        category: 'Interactivity & Motion',
        items: ['Motion (motion/react)', 'Interactive Canvas', 'Lucide React Icons', 'State Hooks']
      },
      {
        category: 'Design System',
        items: ['Dual Dark/Light Themes', 'Mathematical Spacing', 'WCAG AA Contrast', 'Responsive Layouts']
      },
      {
        category: 'Build & Deploy',
        items: ['Cloud Run Container', 'Zero Cold-Start Assets', 'ESLint / TypeScript Strict', 'CI/CD']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Deep Systems Case Studies',
        description: 'Standardized architectural breakdowns highlighting the exact problem statement, solutions, metrics, and technologies.',
        tag: 'Technical Depth'
      },
      {
        number: '02',
        title: 'Interactive UI Previews',
        description: 'Embedded interactive previews simulating real operational workflows for each project directly in the portfolio.',
        tag: 'Interactive Demo'
      },
      {
        number: '03',
        title: 'High-Contrast Dual Themes',
        description: 'Engineered dark and light modes with seamless palette switching, high readability, and zero flash on navigation.',
        tag: 'Theme Engine'
      },
      {
        number: '04',
        title: 'Lightweight Responsive Motion',
        description: 'Micro-interactions and modal transitions powered by Motion with optimal 60fps frame rates on mobile and desktop.',
        tag: 'Motion / React'
      }
    ],
    keyHighlights: [
      'Architected and coded 100% from scratch with TypeScript, React, and Tailwind CSS',
      'Built comprehensive engineering case studies featuring interactive component previews',
      'Implemented accessible dark and light themes with smooth fluid transitions',
      'Optimized bundle size and asset loading for instantaneous page responsiveness'
    ],
    metrics: [
      { label: 'Architecture', value: 'Modular React' },
      { label: 'Themes', value: 'Dual Dark / Light' },
      { label: 'Performance', value: 'Optimized Bundle' },
      { label: 'Status', value: 'Live & Maintained' }
    ]
  },
  {
    id: 'dengue-awareness-project',
    title: 'Dengue Awareness Social Project',
    subtitle: 'Community Health Education & Environmental Hygiene Initiative',
    category: 'Community Initiative · Public Health · Event Organization',
    categories: ['Community', 'Leadership', 'Social Impact', 'Public Health'],
    year: '2024',
    duration: 'Outreach Initiative',
    team: 'Community Volunteer Initiative',
    role: 'Event Organizer & Timekeeper',
    imageUrl: sosproImg,
    clientOrContext: 'Community initiative in Cikarang, Bekasi, West Java',
    description: 'The Dengue Awareness Social Project was a community initiative in Cikarang, Bekasi, West Java focused on preventing Dengue Fever (DBD) through education and interactive activities.',
    technologies: ['Event Organization', 'Public Health Education', 'Community Outreach', 'Timekeeping', 'DBD Prevention'],
    overview: 'The Dengue Awareness Social Project was a community initiative in Cikarang, Bekasi, West Java focused on preventing Dengue Fever (DBD) through education and interactive activities. Targeting children and adults, it promoted environmental hygiene and hands-on learning to raise health awareness. The project encouraged collaboration and personal responsibility, empowering residents to reduce mosquito breeding sites and foster a healthier community.',
    responsibilities: [
      'Led planning, coordination, and execution of community outreach activities, ensuring smooth implementation.',
      'Designed and facilitated interactive educational sessions while managing event schedules as Timekeeper.',
      'Collaborated with residents to promote hygiene practices and foster community engagement for public health awareness.'
    ],
    impact: [
      'Successfully raised community awareness of Dengue Fever prevention, especially among young learners.',
      'Encouraged long-term hygienic habits, resulting in cleaner surroundings and reduced potential mosquito breeding areas.',
      'Provided accessible health education that empowered residents to take preventive action and protect their families.'
    ],
    problem: 'High local prevalence of Dengue Fever (DBD) in Cikarang, Bekasi driven by unmonitored stagnant water reservoirs and low community-wide awareness of proactive mosquito prevention and hygiene protocols.',
    approach: 'Organized and executed multi-generational community outreach combining interactive educational sessions, precise timekeeping logistics, and hands-on environmental hygiene workshops.',
    technologyDetails: 'Community outreach methodology, interactive public health education curriculum, event schedule management and timekeeping, and 3M Plus environmental sanitation guidelines.',
    outcome: 'Successfully raised community awareness of Dengue Fever prevention across Cikarang, Bekasi—encouraging long-term hygienic habits that eliminated mosquito breeding grounds and empowered local families with accessible preventive health education.',
    problemItems: [
      {
        number: '01',
        title: 'Unmonitored Mosquito Habitats',
        description: 'Open water containers and domestic drainage reservoirs in the neighborhood formed active breeding sites for Aedes aegypti mosquitoes.',
        addressedInScope: true,
        resolutionTag: 'Resolved via 3M Plus'
      },
      {
        number: '02',
        title: 'Youth Health Literacy Gap',
        description: 'Children and students lacked structured, interactive educational opportunities to understand dengue symptoms and mosquito lifecycles.',
        addressedInScope: true,
        resolutionTag: 'Solved via Workshops'
      },
      {
        number: '03',
        title: 'Schedule & Execution Bottlenecks',
        description: 'Multi-station outreach events faced coordination delays without dedicated logistics leadership and strict event timekeeping.',
        addressedInScope: true,
        resolutionTag: 'Solved via Timekeeping'
      },
      {
        number: '04',
        title: 'Reactive Instead of Preventive',
        description: 'Households typically responded only after seasonal dengue fever spikes rather than maintaining regular preventive hygiene routines.',
        addressedInScope: true,
        resolutionTag: 'Solved via Empowerment'
      }
    ],
    approachSteps: [
      {
        phase: '01. Planning',
        title: 'Community Outreach Logistics',
        description: 'Led planning, coordination, and execution of community outreach activities in Cikarang, ensuring smooth implementation and volunteer readiness.'
      },
      {
        phase: '02. Facilitation',
        title: 'Interactive Educational Sessions',
        description: 'Designed and facilitated engaging, interactive learning modules tailored for both children and adults to demystify dengue transmission.'
      },
      {
        phase: '03. Management',
        title: 'Timekeeping & Station Flow',
        description: 'Served as designated Timekeeper, coordinating multi-station session schedules and ensuring timely execution across all community activities.'
      },
      {
        phase: '04. Mobilization',
        title: 'Resident Hygiene Collaboration',
        description: 'Collaborated directly with local residents on practical environmental sanitation to inspect water sources and eradicate mosquito breeding sites.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Event Operations',
        items: ['Outreach Planning', 'Activity Execution', 'Master Timekeeper', 'Volunteer Logistics']
      },
      {
        category: 'Educational Design',
        items: ['Interactive Learning', 'Youth Workshops', 'Visual Health Demonstrations', 'Q&A Facilitation']
      },
      {
        category: 'Public Health',
        items: ['Dengue (DBD) Prevention', 'Mosquito Habitat Eradication', '3M Plus Standards', 'Surrounding Sanitation']
      },
      {
        category: 'Community Leadership',
        items: ['Resident Collaboration', 'Public Health Awareness', 'Family Empowerment', 'Civic Engagement']
      }
    ],
    features: [
      {
        number: '01',
        title: 'End-to-End Outreach Planning',
        description: 'Led planning, coordination, and execution of community outreach activities, ensuring smooth implementation.',
        tag: 'Event Operations'
      },
      {
        number: '02',
        title: 'Interactive Educational Sessions',
        description: 'Designed and facilitated interactive educational sessions while managing event schedules as Timekeeper.',
        tag: 'Public Education'
      },
      {
        number: '03',
        title: 'Resident Hygiene Collaboration',
        description: 'Collaborated with residents to promote hygiene practices and foster community engagement for public health awareness.',
        tag: 'Community Engagement'
      },
      {
        number: '04',
        title: 'Mosquito Breeding Elimination',
        description: 'Empowered residents with actionable 3M Plus techniques to proactively eliminate stagnant water habitats and safeguard families.',
        tag: 'Environmental Health'
      }
    ],
    keyHighlights: [
      'Led planning, coordination, and execution of community outreach activities, ensuring smooth implementation',
      'Designed and facilitated interactive educational sessions while managing event schedules as Timekeeper',
      'Collaborated with residents to promote hygiene practices and foster community engagement for public health awareness',
      'Successfully raised community awareness and instilled long-term habits to reduce mosquito breeding grounds'
    ],
    metrics: [
      { label: 'Role', value: 'Event Organizer' },
      { label: 'Duty', value: 'Timekeeper' },
      { label: 'Location', value: 'Cikarang, Bekasi' },
      { label: 'Focus', value: 'DBD Prevention' }
    ]
  }
];



