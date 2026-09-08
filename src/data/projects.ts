import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'vidhelp',
    title: 'VIDHELP',
    subtitle: 'All-in-One Creative Agency Workspace',
    category: 'Business · Web App · Smart Tool',
    categories: ['Business', 'AI', 'Web'],
    featured: true,
    year: '2025',
    duration: '4 Months',
    team: '4-person University Capstone Team (Team Leader)',
    role: 'Team Leader · Full-Stack Web Developer · Smart Feature Lead',
    liveUrl: 'https://vidhelp-frontend.vercel.app/',
    clientOrContext: 'University Capstone Project for VIDHELP Creative Agency',
    description: 'An all-in-one web app built for a fast-growing creative agency to replace messy Google Sheets, automate invoices, and forecast monthly revenue.',
    technologies: ['React', 'Supabase', 'Python', 'TypeScript', 'Tailwind CSS'],
    overview: 'As our university graduation capstone project, my team of four partnered with VIDHELP, a video production and creative agency. I led the team, built the front and back of the website, and created a smart tool that helps them plan upcoming monthly earnings based on past work.',
    problem: 'Before this, the agency was drowning in messy Google Sheets. Team members lost track of which creator was working on which video, invoices were calculated by hand and sent late, managers had no clue who was overworked, and nobody could reliably guess how much money the agency would make next month.',
    approach: 'We listened to what the agency team struggled with every day and built a clean, central dashboard. Everything they need is now in one place: creators, clients, video progress, invoices, and a friendly smart tool that estimates future revenue.',
    technologyDetails: 'Built using React and TypeScript for a fast, clean website; Supabase to securely save client and project info in real time; and a Python helper to estimate upcoming monthly earnings.',
    outcome: 'We solved all 4 of the agency’s biggest daily headaches: no more lost spreadsheets, invoices get sent on time with a single click, the team workload is clear at a glance, and leadership can plan ahead with confidence.',
    approachSteps: [
      {
        phase: '01. Listening',
        title: 'Talking to the Team About Their Daily Headaches',
        description: 'Sat down with agency managers and creators to understand where time was being wasted and why invoices were always late.'
      },
      {
        phase: '02. Organizing',
        title: 'Creating One Safe Place for All Information',
        description: 'Organized all scattered spreadsheets into a single, secure database so client contacts, creator profiles, and payments are never lost.'
      },
      {
        phase: '03. Building',
        title: 'Designing an Easy Dashboard & Smart Forecasts',
        description: 'Built clean screens for tracking video projects, generating bills with one click, and estimating future earnings automatically.'
      },
      {
        phase: '04. Testing',
        title: 'Putting it in the Hands of the Agency',
        description: 'Tested the app with real agency workflows, made sure everyone found it easy to use, and launched it live on the web.'
      }
    ],
    techStackGrouped: [
      {
        category: 'What You See (Frontend)',
        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Interactive Charts']
      },
      {
        category: 'Behind the Scenes (Backend)',
        items: ['Supabase', 'Secure Database', 'Instant Sync', 'User Logins']
      },
      {
        category: 'Smart Helpers & Logic',
        items: ['Python', 'Revenue Estimator', 'Automatic Trend Calculation']
      },
      {
        category: 'Hosting & Tools',
        items: ['Vercel Cloud Hosting', 'GitHub for Team Code', 'Live Web Access']
      }
    ],
    features: [
      {
        number: '01',
        title: 'All Creators & Clients in One Place',
        description: 'Replaces endless spreadsheets with an easy directory where you can see who is available, their past videos, and contact info.',
        tag: 'Everyday Work'
      },
      {
        number: '02',
        title: 'Team Workload & Progress Tracker',
        description: 'A visual board showing what video each creator is working on so nobody gets overwhelmed and deadlines aren’t missed.',
        tag: 'Team Flow'
      },
      {
        number: '03',
        title: 'One-Click Invoices & Billing',
        description: 'Whenever a client approves a video, the system automatically creates a clean invoice, saving hours of manual calculator work.',
        tag: 'Save Time'
      },
      {
        number: '04',
        title: 'Smart Monthly Revenue Estimator',
        description: 'Looks at past video jobs and seasonal trends to give managers a helpful prediction of how much the agency will earn next month.',
        tag: 'Smart Tools'
      }
    ],
    keyHighlights: [
      'Led a 4-person capstone team from initial idea to live production',
      'Fixed the agency’s 4 biggest daily bottlenecks in one simple app',
      'Turned hours of manual weekly spreadsheet math into instant reports',
      'Live and accessible online today at https://vidhelp-frontend.vercel.app/'
    ],
    metrics: [
      { label: 'My Role', value: 'Team Lead' },
      { label: 'Big Headaches', value: '4 Solved' },
      { label: 'Current State', value: 'Live & Working' }
    ]
  },
  {
    id: 'sales-analysis-automation',
    title: 'Sales Report Automator',
    subtitle: 'Turning Messy Sales Files Into Clean Reports',
    category: 'Data · Automation',
    categories: ['Data', 'Automation'],
    year: '2024',
    duration: '2 Months',
    team: 'Commercial Analytics Project',
    role: 'Data Engineer & Automation Specialist',
    clientOrContext: 'Multi-Shop Retail and E-commerce Business',
    description: 'An automated tool that grabs sales numbers from different online shops and spreadsheets, cleans them up, and builds clear dashboards in seconds.',
    technologies: ['Python', 'Pandas', 'Power BI', 'SQL', 'Automated Scripts'],
    overview: 'The team was wasting hours every Monday manually downloading sales files from online stores and physical shops, copying and pasting rows into Excel, and fixing formula errors. I built a Python script that does all of that automatically at the push of a button.',
    problem: 'Sales data was trapped in different formats across multiple websites and retail registers. Someone had to manually copy, paste, and check numbers every week. It was exhausting, took almost a full working day, and often had accidental copy-paste mistakes.',
    approach: 'I wrote a simple automation script in Python that automatically collects all the weekly sales files, cleans up misspelled names and currencies, and plugs the clean totals directly into an interactive dashboard.',
    technologyDetails: 'Used Python and Pandas to automatically read, clean, and organize files; and Power BI to create visual charts that anyone on the team can understand in seconds.',
    outcome: 'Cut weekly reporting time from an entire day down to just 2 minutes, completely eliminated human math mistakes, and gave business owners clear insights into their best-selling products.',
    approachSteps: [
      {
        phase: '01. Gathering',
        title: 'Finding Where the Files Live',
        description: 'Mapped out all the different websites and registers where sales receipts and CSV spreadsheets were being saved.'
      },
      {
        phase: '02. Cleaning',
        title: 'Teaching the Computer to Fix Typos',
        description: 'Wrote scripts that fix mismatched product codes, currency conversions, and duplicate receipts automatically.'
      },
      {
        phase: '03. Calculating',
        title: 'Figuring Out Profit & Weekly Growth',
        description: 'Programmed the math to automatically calculate profit margins, best-seller rankings, and week-by-week sales growth.'
      },
      {
        phase: '04. Sharing',
        title: 'Making Beautiful, Easy-to-Read Charts',
        description: 'Connected the clean numbers into a visual Power BI dashboard so managers can filter by product, city, or date with one click.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Automation & Code',
        items: ['Python', 'Pandas', 'File Readers', 'Data Cleaning']
      },
      {
        category: 'Visual Reports',
        items: ['Power BI', 'Interactive Charts', 'Clickable Filters']
      },
      {
        category: 'Data Storage',
        items: ['SQL', 'Excel / CSV Handlers', 'Automated Scheduled Tasks']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Automatic File Collection',
        description: 'Pulls transaction reports from multiple stores and websites into one single folder with zero manual downloading.',
        tag: 'Automation'
      },
      {
        number: '02',
        title: 'Self-Cleaning Data',
        description: 'Instantly spots missing dates, incorrect prices, and duplicate orders, fixing them before the report is made.',
        tag: 'Accuracy'
      },
      {
        number: '03',
        title: 'Weekly & Monthly Trends',
        description: 'Automatically compares this month’s sales to last month so the team instantly sees which products are gaining popularity.',
        tag: 'Insights'
      },
      {
        number: '04',
        title: 'Visual Click-and-Explore Dashboard',
        description: 'A friendly visual dashboard where anyone can filter by branch, product category, or discount with a single tap.',
        tag: 'Easy Visuals'
      }
    ],
    keyHighlights: [
      'Turned an 8-hour weekly manual chore into a 2-minute automated task',
      '100% accurate calculations with zero human copy-paste errors',
      'Created simple visual dashboards that non-technical managers love using'
    ],
    metrics: [
      { label: 'Time Saved', value: '~85%' },
      { label: 'Report Time', value: '2 Minutes' },
      { label: 'Output', value: 'Power BI Charts' }
    ]
  },
  {
    id: 'payroll-system',
    title: 'Easy Payroll & Payslip Generator',
    subtitle: 'Fast, Accurate Salary & Tax Calculations',
    category: 'Automation · Data',
    categories: ['Automation', 'Data', 'Web'],
    year: '2024',
    duration: '1.5 Months',
    team: 'Independent Project',
    role: 'Solo Developer (Built 100% from Scratch)',
    clientOrContext: 'Independent Business Solution',
    description: 'An automated payroll tool that figures out employee pay, taxes, bonuses, and overtime in seconds, then prints ready-to-send payslips.',
    technologies: ['Python', 'Pandas', 'Automated PDF/Excel', 'Data Validation'],
    overview: 'Calculating employee salaries by hand every month was stressful and risky. One small formula mistake in Excel could mean paying someone the wrong amount or miscalculating taxes. I built a lightweight Python tool that handles the entire payroll process automatically and prints out clean individual payslips.',
    problem: 'The company was spending days checking spreadsheets, calculating tax brackets by hand, and typing out individual pay slips. Human errors were common, and employees often had questions because the calculations weren’t clear.',
    approach: 'I built a simple, reliable Python engine where the user just enters work hours and base rates. The program instantly applies regional tax rules, adds overtime, deducts insurance, and generates clean, professional payslip files ready to print or email.',
    technologyDetails: 'Written completely in Python with clean, modular code that checks its own math to guarantee 100% accuracy before generating files.',
    outcome: 'Reduced monthly payroll processing from several stressful days to just a few seconds, with zero math errors and happy employees who receive clear, itemized payslips on time.',
    approachSteps: [
      {
        phase: '01. Rules',
        title: 'Setting Up Tax & Overtime Guidelines',
        description: 'Gathered official local tax rules, health insurance rates, and company overtime policies so the computer knows the exact rules.'
      },
      {
        phase: '02. Coding',
        title: 'Building the Calculation Engine',
        description: 'Wrote step-by-step Python code that takes hours worked, multiplies by hourly pay, and accurately subtracts taxes and deductions.'
      },
      {
        phase: '03. Double-Checking',
        title: 'Automated Math Checks',
        description: 'Built in automatic checks that compare the company total against all employee slips to ensure every single cent balances out.'
      },
      {
        phase: '04. Printing',
        title: 'One-Click Payslip Creation',
        description: 'Created an export button that generates individual, clean payslip files ready to hand out to employees.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Programming Language',
        items: ['Python 3', 'Clean Functions', 'Reliable Math Logic']
      },
      {
        category: 'File Handling',
        items: ['Excel / CSV Reader', 'Spreadsheet Exporter', 'File Organizer']
      },
      {
        category: 'Quality Checks',
        items: ['Automatic Balance Verification', 'Audit Trail', 'Clear Receipts']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Accurate Tax & Deduction Math',
        description: 'Takes the guesswork out of income tax brackets and health insurance deductions with 100% exact math.',
        tag: 'Zero Mistakes'
      },
      {
        number: '02',
        title: 'Overtime & Bonus Calculator',
        description: 'Easily adds holiday rates, weekend overtime, and special bonuses without breaking existing calculations.',
        tag: 'Flexible'
      },
      {
        number: '03',
        title: 'Ready-to-Print Individual Payslips',
        description: 'Generates neat, professional payslips showing employees exactly where every dollar went in plain terms.',
        tag: 'Clean Output'
      },
      {
        number: '04',
        title: 'Total Balance Summary for Bosses',
        description: 'Gives the finance manager a one-page summary sheet showing total payout, taxes withheld, and bank totals.',
        tag: 'Quick Review'
      }
    ],
    keyHighlights: [
      'Built 100% independently from concept to working tool',
      'Eliminated hours of stressful monthly calculator math',
      '100% mathematical accuracy with built-in safety checks'
    ],
    metrics: [
      { label: 'Built By', value: 'Solo Project' },
      { label: 'Built With', value: '100% Python' },
      { label: 'Math Errors', value: '0% (Exact)' }
    ]
  },
  {
    id: 'student-gpa-tracker',
    title: 'Student Grade & Graduation Forecaster',
    subtitle: 'Helping Students Plan Their Academic Journey',
    category: 'Smart Tool · Web App',
    categories: ['AI', 'Data', 'Web'],
    year: '2023',
    duration: '3 Months',
    team: 'University Student Initiative (Team Leader)',
    role: 'Team Leader · Smart Feature Lead · Web Developer',
    clientOrContext: 'Student Academic Planning Tool',
    description: 'A friendly web app that helps university students track current grades, simulate future semesters, and see exactly what scores they need to graduate with honors.',
    technologies: ['Python', 'JavaScript', 'Smart Forecasting', 'Web App', 'HTML/CSS'],
    overview: 'As students, my classmates and I always wondered: "What grades do I need next semester to graduate with honors?" or "Will getting a B in this 4-credit class pull my GPA down?" I led a team to build an easy simulator that answers those exact questions in seconds.',
    problem: 'University grade calculations are confusing. Different courses have different credit weights, retake rules vary, and students often have to guess or use messy notes to figure out their graduation standing.',
    approach: 'We built a friendly web calculator that lets students input their past courses, see their weighted GPA immediately, and run "what-if" simulations to see what grades they need in future classes.',
    technologyDetails: 'Built with a clean web interface in JavaScript and HTML/CSS, backed by smart Python math models that calculate grade trajectories and target score boundaries.',
    outcome: 'Created an empowering, easy-to-use academic companion that helped fellow students plan their study schedules, reduce exam anxiety, and hit their graduation goals.',
    approachSteps: [
      {
        phase: '01. Discovery',
        title: 'Understanding Student Confusion',
        description: 'Surveyed university peers to see what confused them most about credit weights, honors cutoffs, and GPA targets.'
      },
      {
        phase: '02. Formula Design',
        title: 'Coding the University Grade Rules',
        description: 'Programmed the exact credit-weight formulas so 4-credit courses carry more weight than 2-credit electives.'
      },
      {
        phase: '03. Target Simulator',
        title: 'Building the "What Do I Need?" Feature',
        description: 'Built reverse-calculation logic: the student picks their dream GPA (e.g. 3.75) and the tool calculates the minimum grades needed.'
      },
      {
        phase: '04. Clean Interface',
        title: 'Making it Fun and Simple to Use',
        description: 'Designed a clean, colorful dashboard with visual progress bars so students can easily see how close they are to their goal.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Smart Math & Logic',
        items: ['Python', 'Trend Models', 'Reverse Goal Calculator']
      },
      {
        category: 'Student Website (Frontend)',
        items: ['JavaScript', 'HTML5', 'Modern CSS', 'Visual Progress Charts']
      },
      {
        category: 'User Experience',
        items: ['Instant Results', 'Saves to Browser', 'Zero Confusing Math']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Instant Weighted GPA Calculator',
        description: 'Automatically balances credits and course grades so students never have to calculate weighted averages by hand.',
        tag: 'Fast Math'
      },
      {
        number: '02',
        title: 'Target Grade Goal-Seeker',
        description: 'Enter the GPA you want to graduate with, and the app instantly tells you what grades you need in your remaining classes.',
        tag: 'Goal Planner'
      },
      {
        number: '03',
        title: 'Course History & Retake Support',
        description: 'Easily organize past semesters, including retaken classes and lab credits, without messing up the total count.',
        tag: 'Organized'
      },
      {
        number: '04',
        title: 'Visual Progress & Momentum Bars',
        description: 'See your academic journey as a visual story, showing your semester-by-semester improvements.',
        tag: 'Visuals'
      }
    ],
    keyHighlights: [
      'Led the student project team as Team Leader and Lead Developer',
      'Built a reverse goal-seeker that tells students what grades to aim for',
      'Designed to be approachable, friendly, and stress-free for everyday students'
    ],
    metrics: [
      { label: 'My Role', value: 'Team Leader' },
      { label: 'Core Goal', value: 'Graduation Help' },
      { label: 'Simulations', value: 'Instant & Live' }
    ]
  },
  {
    id: 'teravince',
    title: 'Teravince Non-Profit Website',
    subtitle: 'Connecting Volunteers & Donors to Community Programs',
    category: 'Web · Community',
    categories: ['Web', 'Product'],
    year: '2024',
    duration: '2 Months',
    team: 'Non-Profit Web Initiative',
    role: 'Frontend Web Developer',
    clientOrContext: 'Teravince Community Non-Governmental Organization (NGO)',
    description: 'A clean, welcoming, and accessible website designed for the non-profit organization Teravince to help volunteers find programs and get involved.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible Design', 'Mobile-Friendly'],
    overview: 'Teravince is a community non-profit organization dedicated to youth education and local community support. As the Frontend Developer, I built their public website to make their story clear, explain their programs, and make it super easy for anyone to sign up as a volunteer.',
    problem: 'The organization had great community programs, but their old website was outdated, hard to read on mobile phones, and didn’t explain clearly how interested volunteers could join in.',
    approach: 'I designed and built a warm, modern web experience with large readable text, simple navigation, inspiring photos, and an easy-to-use signup form that works smoothly on any smartphone even with slow internet.',
    technologyDetails: 'Built with React and Tailwind CSS, paying special attention to high contrast, large buttons, fast loading speeds, and accessibility for all visitors.',
    outcome: 'Gave the organization a credible, inspiring digital front door that helped them attract new volunteers, showcase past events, and receive positive feedback from community partners.',
    approachSteps: [
      {
        phase: '01. Listening',
        title: 'Understanding the NGO’s Mission',
        description: 'Talked with community leaders to find out what questions volunteers and donors ask most often.'
      },
      {
        phase: '02. Layout',
        title: 'Designing for Real People on Mobile Phones',
        description: 'Created a simple layout with large buttons, high-contrast colors, and friendly wording that anyone can read.'
      },
      {
        phase: '03. Coding',
        title: 'Building Fast, Reusable Pages',
        description: 'Built the website using modern React and Tailwind CSS so pages load quickly even on slow mobile networks.'
      },
      {
        phase: '04. Review',
        title: 'Testing with Real Community Volunteers',
        description: 'Asked everyday volunteers to test the sign-up form and verified that the site is easy to navigate on both iPhones and Androids.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Website Technology',
        items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite']
      },
      {
        category: 'Design & Accessibility',
        items: ['High Contrast Colors', 'Easy-to-Read Fonts', 'Large Tap Targets', 'Screen-Reader Friendly']
      },
      {
        category: 'Mobile Experience',
        items: ['Fast Loading on Mobile', 'Low-Data Usage', 'Responsive Layouts']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Clear Community Storytelling',
        description: 'Presents the NGO’s mission and community achievements with inspiring photos and plain, heartfelt language.',
        tag: 'Story'
      },
      {
        number: '02',
        title: 'Simple Volunteer Sign-Up',
        description: 'A friendly 3-step form that makes it effortless for students and community members to volunteer for upcoming events.',
        tag: 'Get Involved'
      },
      {
        number: '03',
        title: 'Easy Reading for Everyone',
        description: 'Designed following accessibility guidelines with high-contrast text and comfortable font sizes for all ages.',
        tag: 'Accessible'
      },
      {
        number: '04',
        title: 'Super Fast on Any Smartphone',
        description: 'Optimized so pages load instantly even on basic smartphones and weak cellular connections.',
        tag: 'Mobile First'
      }
    ],
    keyHighlights: [
      'Built as the frontend developer for a real non-profit community organization',
      'Created an accessible, mobile-first website that works on all screen sizes',
      'Made it effortless for everyday volunteers to sign up and get involved'
    ],
    metrics: [
      { label: 'Organization', value: 'Community NGO' },
      { label: 'My Role', value: 'Frontend Developer' },
      { label: 'Design Standard', value: 'Accessible & Mobile' }
    ]
  },
  {
    id: 'web-portfolio',
    title: 'Personal Portfolio & Showcase',
    subtitle: 'The Site You Are Browsing Right Now',
    category: 'Web · Portfolio',
    categories: ['Web', 'React'],
    year: '2026',
    duration: 'Ongoing',
    team: 'Personal Project',
    role: 'Solo Designer & Frontend Engineer',
    liveUrl: 'https://ais-pre-xw6nikmld7ojjq2xg7a2tg-465376357302.asia-southeast1.run.app',
    clientOrContext: 'Personal Digital Portfolio & Project Showcase',
    description: 'A custom-built, interactive website designed to share my projects, journey, and skills in a clean, human, and engaging way.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Interactive Canvas'],
    overview: 'I wanted a personal website that felt thoughtful and fun to explore—not just a boring static resume. I designed and coded this entire site from scratch to tell the real stories behind what I build, complete with smooth animations and interactive previews.',
    problem: 'Traditional PDF resumes and cookie-cutter portfolio templates don’t show how you actually think, solve problems, or care about user experience.',
    approach: 'I built a modern web experience with clean typography, pleasant colors, smooth transitions, and deep project stories that anyone can read and understand without getting lost in technical buzzwords.',
    technologyDetails: 'Built using modern React, TypeScript, and Tailwind CSS, featuring dark and light modes, smooth page transitions, and an interactive particle background.',
    outcome: 'A polished, fast-loading personal website that gives visitors, recruiters, and clients an authentic look into my work, skills, and design philosophy.',
    approachSteps: [
      {
        phase: '01. Goal',
        title: 'Focusing on Human Stories',
        description: 'Decided to write about my projects like real stories—explaining the actual headache, what I did, and how it helped people.'
      },
      {
        phase: '02. Design',
        title: 'Clean Typography & Warm Palette',
        description: 'Selected friendly, readable fonts and balanced colors with dedicated light and dark modes that are comfortable on the eyes.'
      },
      {
        phase: '03. Craft',
        title: 'Adding Interactive Touches',
        description: 'Added an interactive floating particle canvas and smooth case study popups so exploring my work feels engaging.'
      },
      {
        phase: '04. Polish',
        title: 'Testing on All Screens',
        description: 'Polished every screen from small smartphones to large laptop monitors to make sure everything looks crisp and responsive.'
      }
    ],
    techStackGrouped: [
      {
        category: 'Website Building Blocks',
        items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS']
      },
      {
        category: 'Animations & Interactions',
        items: ['Motion Animations', 'Interactive Canvas', 'Smooth Theme Switcher']
      },
      {
        category: 'Design & Accessibility',
        items: ['Easy-to-Read Fonts', 'Mobile-First Layout', 'Dark & Light Modes']
      }
    ],
    features: [
      {
        number: '01',
        title: 'Human-Centered Project Stories',
        description: 'Detailed project walk-throughs written in plain language so anyone can understand what was built and why.',
        tag: 'Storytelling'
      },
      {
        number: '02',
        title: 'Seamless Light & Dark Modes',
        description: 'A comfortable theme switcher that smoothly transitions colors without flashing your eyes.',
        tag: 'Comfort'
      },
      {
        number: '03',
        title: 'Playful Interactive Canvas',
        description: 'Subtle floating background particles that gently react as you move your mouse or tap your screen.',
        tag: 'Interaction'
      },
      {
        number: '04',
        title: 'Built for Phones, Tablets & Desktops',
        description: 'Carefully sized so text, buttons, and preview windows fit comfortably on any screen you use.',
        tag: 'Responsive'
      }
    ],
    keyHighlights: [
      'Designed and coded 100% from scratch with modern web standards',
      'Written in friendly, everyday language to tell genuine project stories',
      'Smoothly adapts between dark and light themes with responsive layouts'
    ],
    metrics: [
      { label: 'Design', value: 'Custom Built' },
      { label: 'Language', value: 'Everyday English' },
      { label: 'Status', value: 'Live & Active' }
    ]
  }
];


