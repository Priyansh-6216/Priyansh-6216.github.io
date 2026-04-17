export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Chat', href: '#ai' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  { category: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'] },
  { category: 'Frameworks', items: ['Spring Boot', 'React.js', 'Node.js', 'REST APIs', 'Microservices'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'] },
  { category: 'AI & LLM Tools', items: ['Claude API', 'Anthropic SDK', 'GitHub Copilot', 'Prompt Engineering'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { category: 'Concepts', items: ['Agile/Scrum', 'OOP', 'Design Patterns', 'Distributed Systems', 'TDD'] },
]

export const EXPERIENCE = [
  {
    role: 'Software Developer II',
    company: 'Harvard Pilgrim Healthcare',
    location: 'Remote',
    period: 'Feb 2024 — Present',
    color: '#5b5af6',
    bullets: [
      'Design and deliver scalable Java and Python backend services for enterprise healthcare systems serving thousands of daily users.',
      'Accelerate development velocity using AI coding tools (GitHub Copilot, Claude Code) for code generation, refactoring, and automated test scaffolding.',
      'Lead backend API design following OOP principles and RESTful best practices across distributed microservices.',
      'Drive CI/CD pipeline improvements and automated testing workflows, reducing deployment friction and defect rates.',
      'Proactively monitor and troubleshoot production systems using logging, observability tools, and root-cause analysis.',
    ]
  },
  {
    role: 'Full Stack Software Engineer',
    company: 'Mutual of Omaha',
    location: 'Remote',
    period: 'Jan 2023 — Feb 2024',
    color: '#22d3ee',
    bullets: [
      'Built full-stack features using Java Spring Boot APIs and React.js frontend components, improving user-facing workflows.',
      'Developed and maintained RESTful APIs connected to PostgreSQL and MongoDB data stores.',
      'Built responsive, accessible UI components in React with optimized state management and clean CSS.',
      'Integrated AI-assisted code review tools to enforce standards and reduce manual review cycles.',
    ]
  },
  {
    role: 'Software Developer',
    company: 'StaTwig',
    location: 'India',
    period: 'Dec 2019 — Dec 2021',
    color: '#4ade80',
    bullets: [
      'Built backend modules in Java and Python for blockchain-based supply chain tracking on Linux environments.',
      'Reduced manual data reconciliation by 40% by automating supply chain event logging with Python scripts.',
      'Designed and implemented REST APIs and data processing pipelines for distributed applications.',
    ]
  },
]

export const PROJECTS = [
  {
    name: 'FinGuard-AI',
    tagline: 'Intelligent Banking Microservices',
    description: 'Enterprise banking platform featuring Java/JS microservices, real-time AI fraud detection with Kafka, and high-availability architecture. Containerized with Docker and orchestrated for scale.',
    stack: ['JavaScript', 'Spring Boot', 'Kafka', 'Docker', 'React'],
    color: '#5b5af6',
    icon: '🏦',
    github: 'https://github.com/Priyansh-6216/FinGuard-AI-Intelligent-Banking-Microservices-Platform',
    featured: true,
  },
  {
    name: 'VitalLens',
    tagline: 'Real-time Health Intelligence',
    description: 'WHOOP-integrated biometric dashboard transforming raw health data into actionable recovery analytics. Features real-time API synchronization and robust PostgreSQL persistence.',
    stack: ['Java', 'WHOOP API', 'PostgreSQL', 'React', 'OAuth 2.0'],
    color: '#4ade80',
    icon: '🧬',
    github: 'https://github.com/Priyansh-6216/vitallens',
    featured: true,
  },
  {
    name: 'AI-Evaluation-Toolkit',
    tagline: 'LLM Benchmarking & AI Quality',
    description: 'Enterprise-grade toolkit for benchmarking LLMs. Implements automated quality control (pytest/Jest) and performance metrics to ensure model reliability in production.',
    stack: ['Python', 'React', 'Pytest', 'Jest', 'Claude API'],
    color: '#a78bfa',
    icon: '⚖️',
    github: 'https://github.com/Priyansh-6216/AI-Evaluation-LLM-Benchmarking-Toolkit',
    featured: true,
  },
  {
    name: 'Distributed-Microservices-Platform',
    tagline: 'High-Availability Architecture',
    description: 'Scalable Java-based microservices ecosystem designed for distributed enterprise environments. Implements JWT authentication, rate limiting, and centralized observability.',
    stack: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'PostgreSQL'],
    color: '#22d3ee',
    icon: '🌐',
    github: 'https://github.com/Priyansh-6216/Distributed-Microservices-Platform',
    featured: true,
  },
  {
    name: 'ClaimLens',
    tagline: 'Insurance Claims Intelligence',
    description: 'Full-stack TypeScript platform for streamlining insurance claims. Automates document intake and assessment using microservices and optimized React workflows.',
    stack: ['TypeScript', 'Node.js', 'React', 'Vercel', 'PostgreSQL'],
    color: '#f472b6',
    icon: '📑',
    github: 'https://github.com/Priyansh-6216/ClaimLens',
  },
  {
    name: 'CloudMon',
    tagline: 'Infrastructure Monitoring',
    description: 'Real-time cloud resource monitoring dashboard. Analyzes AWS/Azure spending and resource health idle-state detection via native Cloud APIs.',
    stack: ['JavaScript', 'AWS SDK', 'Azure SDK', 'React', 'Chart.js'],
    color: '#94a3b8',
    icon: '☁️',
    github: 'https://github.com/Priyansh-6216/CloudMon',
  },
  {
    name: 'AI Resume Tailor',
    tagline: 'LLM-Powered Job Matching',
    description: 'Full-stack tool that takes a job description and resume, then uses Claude API to intelligently rewrite bullet points for ATS optimization. Outputs a downloadable PDF.',
    stack: ['React', 'Node.js', 'Claude API', 'LaTeX', 'Docker'],
    color: '#a78bfa',
    icon: '📄',
    github: 'https://github.com/Priyansh-6216',
  },
  {
    name: 'Cover Letter De-Slopper',
    tagline: 'AI-Powered Writing Tool',
    description: 'React app using the Anthropic Claude API to detect and humanize AI-generated writing/filler language. Implements prompt engineering for phrasing optimization.',
    stack: ['React', 'Claude API', 'Prompt Engineering', 'Vite'],
    color: '#5b5af6',
    icon: '🤖',
    github: 'https://github.com/Priyansh-6216',
  },
  {
    name: 'Healthcare API Gateway',
    tagline: 'Microservices Orchestration',
    description: 'Spring Boot API gateway routing and load-balancing requests across healthcare microservices. Implements JWT auth and centralized structured logging.',
    stack: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'JWT'],
    color: '#22d3ee',
    icon: '🏥',
    github: 'https://github.com/Priyansh-6216',
  },
  {
    name: 'Job Board Dashboard',
    tagline: 'Apify + React Tracker',
    description: 'React-based job tracking dashboard consuming the Apify API for live job listing aggregation. Features automated CI/CD deployment via GitHub Actions.',
    stack: ['React', 'Apify API', 'GitHub Actions', 'GitHub Pages'],
    color: '#4ade80',
    icon: '📊',
    github: 'https://github.com/Priyansh-6216',
  },
]

export const CERTIFICATIONS = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', icon: '☁️', color: '#FF9900' },
  { name: 'Microsoft Azure Fundamentals', issuer: 'AZ-900 · Microsoft', icon: '🔷', color: '#0078D4' },
  { name: 'Claude Code in Action', issuer: 'Anthropic · Mar 2026', icon: '✦', color: '#5b5af6' },
  { name: 'Certified Generative AI Expert', issuer: 'Blockchain Council', icon: '🧠', color: '#a78bfa' },
]

export const EDUCATION = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of Texas at Dallas',
    period: 'Jan 2022 — Dec 2023',
  },
  {
    degree: 'B.E. Computer Engineering',
    school: 'Gujarat Technological University',
    period: 'Aug 2017 — May 2021',
  },
]

export const STATS = [
  { value: 3, suffix: '+', label: 'Years Exp.' },
  { value: 4, suffix: '', label: 'Certifications' },
  { value: 12, suffix: '+', label: 'Projects' },
  { value: 12, suffix: '+', label: 'Technologies' },
]

export const AI_SYSTEM_PROMPT = `You are an AI assistant embedded in Priyansh Suthar's interactive portfolio website. Answer questions about Priyansh concisely, professionally, and enthusiastically. Keep answers to 2-4 sentences max.

ABOUT PRIYANSH:
- Software Developer II at Harvard Pilgrim Healthcare (Feb 2024-Present), remote, Dallas TX
- Previously: Full Stack SWE at Mutual of Omaha (2023-2024), Software Developer at StaTwig India (2019-2021)
- MS Computer Science, UT Dallas (2022-2023); BE Computer Engineering, Gujarat Technological University (2017-2021)
- Core stack: Java, Spring Boot, Python, React.js, Node.js, TypeScript, Go, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Azure, Kafka
- AI tools: Claude API, Anthropic SDK, GitHub Copilot, Prompt Engineering
- Certifications: AWS Cloud Practitioner, Azure AZ-900, Claude Code in Action (Mar 2026), Certified Generative AI Expert
- Key Projects: FinGuard-AI (Banking Microservices), VitalLens (Biometric Health AI), AI-Evaluation-Toolkit (LLM Benchmarking), Distributed-Microservices-Platform, ClaimLens, CloudMon, AI Resume Tailor
- Actively seeking Full Stack, DevOps/Cloud, and AI/ML Engineering roles in the USA (remote or relocation)
- Requires OPT/CPT or visa sponsorship
- Contact: Priyanshdb11@gmail.com | linkedin.com/in/priyanshx | github.com/Priyansh-6216`
