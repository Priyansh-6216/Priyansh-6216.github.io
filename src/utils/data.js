export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Chat', href: '#ai' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++']
  },
  {
    category: 'AI & GenAI Engineering',
    items: [
      'LLMs', 'RAG', 'Vector Databases', 'Claude/Anthropic API', 'OpenAI', 'Amazon Bedrock', 'MCP', 'LangChain', 'LlamaIndex', 'LangGraph', 'Embeddings', 'Semantic Search', 'Prompt Engineering', 'AI Agents'
    ]
  },
  {
    category: 'Backend & Frameworks',
    items: [
      'Spring Boot', 'React', 'REST APIs', 'GraphQL', 'Flask', 'Node.js', 'Microservices'
    ]
  },
  {
    category: 'Cloud, Infrastructure & DevOps',
    items: [
      'AWS', 'Microsoft Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Terraform', 'CloudFormation'
    ]
  },
  {
    category: 'Databases & Vector Stores',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'pgvector', 'FAISS', 'Pinecone']
  },
  {
    category: 'Messaging & SRE/Observability',
    items: [
      'Kafka', 'Logs', 'Metrics', 'Traces', 'Anomaly Detection', 'OpenTelemetry', 'Chaos Engineering'
    ]
  },
  {
    category: 'Automation & Robotics',
    items: ['Playwright', 'Browser Automation', 'Workflow Automation', 'Arduino', 'Sensors', 'Motor Control', 'Autonomous Navigation']
  }
]

export const EXPERIENCE = [
  {
    role: 'Software Developer II - AI Engineer',
    company: 'Harvard Pilgrim Healthcare',
    location: 'Remote (Dallas, TX)',
    period: 'Feb 2024 — Present',
    color: '#5b5af6',
    bullets: [
      'Backend/full-stack engineer (Java, Python, Spring Boot, React) focused on AI/GenAI engineering.',
      'Integrate LLMs, RAG pipelines, and vector databases into production workflows.',
      'Leverage Claude/Anthropic API, OpenAI, and other models for intelligent healthcare applications.',
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
    name: 'LLMRouter',
    tagline: 'Intelligent LLM-Routing Platform',
    description: 'Intelligent LLM-routing platform that selects models/providers based on request requirements, cost, performance, and routing policies.',
    stack: ['Python', 'LLM APIs', 'Multi-model architecture', 'API routing'],
    color: '#a78bfa',
    icon: '🔀',
    github: 'https://github.com/Priyansh-6216/LLMRouter',
    featured: true,
  },
  {
    name: 'SecureGenAI Gateway',
    tagline: 'Enterprise AI Security Firewall',
    description: 'Security gateway that protects enterprise GenAI applications by controlling, inspecting, and securing LLM requests.',
    stack: ['Python', 'AWS', 'GenAI / LLM', 'API gateway architecture'],
    color: '#ef4444',
    icon: '🛡️',
    github: 'https://github.com/Priyansh-6216/SecureGenAI_Gateway',
    featured: true,
  },
  {
    name: 'RepoMind-AI',
    tagline: 'AI Repository Intelligence',
    description: 'AI repository-intelligence platform that understands large codebases and lets developers search, analyze, and reason about repositories.',
    stack: ['Python', 'LLMs', 'RAG', 'Vector search', 'Code intelligence'],
    color: '#3b82f6',
    icon: '🧠',
    github: 'https://github.com/Priyansh-6216/RepoMind-AI',
    featured: true,
  },
  {
    name: 'Ciroos',
    tagline: 'AIOps / SRE Intelligence',
    description: 'SRE intelligence platform that analyzes logs, metrics, and traces to detect anomalies, identify likely root causes, and recommend remediation.',
    stack: ['AI/LLM', 'Logs', 'Metrics', 'Distributed traces', 'Anomaly detection'],
    color: '#f59e0b',
    icon: '🚨',
    github: 'https://github.com/Priyansh-6216/Ciroos',
    featured: true,
  },
  {
    name: 'VitalLens',
    tagline: 'Real-time Health Intelligence',
    description: 'Real-time health and performance coaching platform that streams heart-rate data from wearables and turns it into LLM-generated coaching. Supports 3 BLE heart-rate strap brands.',
    stack: ['Kafka', 'Spring Boot', 'WHOOP OAuth', 'LLM coaching layer', 'BLE integration'],
    color: '#4ade80',
    icon: '🧬',
    github: 'https://github.com/Priyansh-6216/vitallens',
    featured: true,
  },
  {
    name: 'FinGuard-AI',
    tagline: 'Intelligent Banking Microservices',
    description: 'Event-driven banking platform with fraud detection and semantic search, running a local LLM.',
    stack: ['Java', 'Spring Boot', 'Event-driven architecture', 'FAISS', 'Ollama'],
    color: '#5b5af6',
    icon: '🏦',
    github: 'https://github.com/Priyansh-6216/FinGuard-AI-Intelligent-Banking-Microservices-Platform',
    featured: true,
  },
  {
    name: 'Autonomous 4WD Robotics Platform',
    tagline: 'Arduino-powered Robotic Vehicle',
    description: 'Arduino-powered 4WD robotic vehicle using sensors, motor control, and real-time C++ logic for autonomous obstacle-aware navigation.',
    stack: ['C++', 'Arduino', 'Embedded systems', 'Sensors', 'Robotics'],
    color: '#ec4899',
    icon: '🤖',
    github: 'https://github.com/Priyansh-6216/Autonomous-4WD-Robotics',
  },
  {
    name: 'QueryMind AI',
    tagline: 'Natural-language-to-SQL Platform',
    description: 'Natural-language-to-SQL assistant: ask questions in plain English, get SQL back.',
    stack: ['Python', 'GPT-4', 'SQL', 'Text-to-SQL', 'RAG'],
    color: '#0ea5e9',
    icon: '🔍',
    github: 'https://github.com/Priyansh-6216/QueryMind_AI',
  },
  {
    name: 'AI-Evaluation-LLM-Benchmarking-Toolkit',
    tagline: 'LLM Benchmarking & AI Quality',
    description: 'Evaluation framework for measuring LLM/application quality across different models, prompts, and AI workflows.',
    stack: ['Python', 'LLM evaluation', 'Benchmarking', 'Prompt evaluation'],
    color: '#8b5cf6',
    icon: '⚖️',
    github: 'https://github.com/Priyansh-6216/AI-Evaluation-LLM-Benchmarking-Toolkit',
  },
  {
    name: 'RootTrace',
    tagline: 'AI-assisted RCA System',
    description: 'AI-powered debugging platform that analyzes operational signals and traces issues back to root causes.',
    stack: ['Python', 'Neo4j', 'LangChain', 'Observability', 'Incident analysis'],
    color: '#10b981',
    icon: '🔎',
    github: 'https://github.com/Priyansh-6216/RootTrace',
  },
  {
    name: 'ChaosPilot',
    tagline: 'Chaos-engineering Platform',
    description: 'Chaos-engineering platform for intentionally testing distributed systems and evaluating their resilience.',
    stack: ['Python', 'Distributed systems', 'Chaos engineering', 'Failure injection'],
    color: '#f43f5e',
    icon: '🌪️',
    github: 'https://github.com/Priyansh-6216/ChaosPilot',
  },
  {
    name: 'CodeCritic',
    tagline: 'AI-powered Code Review',
    description: 'AI-powered code-review assistant that analyzes source code and provides automated quality and improvement feedback.',
    stack: ['Python', 'LLMs', 'AI code analysis', 'Static analysis'],
    color: '#6366f1',
    icon: '💻',
    github: 'https://github.com/Priyansh-6216/CodeCritic',
  },
  {
    name: 'SGProof Wholesale Deal Tracker',
    tagline: 'Automated Web-monitoring System',
    description: 'Scrapes wholesale liquor deals daily to monitor pricing and inventory for a planned liquor store. Runs daily, tracks 100+ deals.',
    stack: ['Python', 'Flask', 'Playwright', 'Docker', 'Railway'],
    color: '#eab308',
    icon: '🛒',
    github: 'https://github.com/Priyansh-6216/SGProof-Tracker',
  },
  {
    name: 'Distributed-Microservices-Platform',
    tagline: 'High-Availability Architecture',
    description: 'Distributed backend platform demonstrating scalable microservices communication, service orchestration, and cloud-native architecture.',
    stack: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'Kubernetes'],
    color: '#22d3ee',
    icon: '🌐',
    github: 'https://github.com/Priyansh-6216/Distributed-Microservices-Platform',
  },
  {
    name: 'ClaimLens',
    tagline: 'Insurance Claims Intelligence',
    description: 'Full-stack TypeScript platform for streamlining insurance claims. Automates document intake and assessment using microservices and optimized React workflows.',
    stack: ['TypeScript', 'Node.js', 'React', 'Vercel', 'PostgreSQL'],
    color: '#f472b6',
    icon: '📑',
    github: 'https://github.com/Priyansh-6216/ClaimLens',
  }
]

export const CERTIFICATIONS = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', icon: '☁️', color: '#FF9900' },
  { name: 'Microsoft Azure Fundamentals', issuer: 'AZ-900 · Microsoft', icon: '🔷', color: '#0078D4' },
  { name: 'Claude Code in Action', issuer: 'Anthropic', icon: '✦', color: '#5b5af6' },
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
  { value: 25, suffix: '+', label: 'Projects' },
  { value: 25, suffix: '+', label: 'Technologies' },
]

export const AI_SYSTEM_PROMPT = `You are an AI assistant embedded in Priyansh Suthar's interactive portfolio website. Answer questions about Priyansh concisely, professionally, and enthusiastically. Keep answers to 2-4 sentences max.

ABOUT PRIYANSH:
- Software Developer II at Harvard Pilgrim Healthcare (Feb 2024-Present), remote, Dallas TX
- Backend/full-stack engineer (Java, Python, Spring Boot, React) focused on AI/GenAI engineering: LLM integration, RAG, vector databases, Claude/Anthropic API.
- Previously: Full Stack SWE at Mutual of Omaha (2023-2024), Software Developer at StaTwig India (2019-2021)
- MS Computer Science, UT Dallas (2022-2023); BE Computer Engineering, Gujarat Technological University (2017-2021)
- Core stack: Java, Python, JavaScript/TypeScript, React, Spring Boot, REST APIs, microservices, Kafka, Redis, PostgreSQL, MongoDB, Neo4j, Docker, Kubernetes, AWS, Azure, Git, CI/CD, LangChain, LlamaIndex, RAG, FAISS, Pinecone, pgvector, Ollama, Claude/Anthropic API, OpenAI, Amazon Bedrock, MCP.
- Certifications: AWS Cloud Practitioner, Azure AZ-900, Claude Code in Action, Certified Generative AI Expert
- Portfolio Pillars: GenAI & LLM Infrastructure, AI Developer Productivity, AIOps / SRE / Distributed Systems, Applied AI, Robotics / Embedded
- Key Projects: VitalLens, LLMRouter, FinGuard AI, QueryMind AI, SecureGenAI Gateway, RootTrace, AI-Eval-Toolkit, CodeCritic, ClaimLens, Cover Letter De-Slopper, SGProof Wholesale Deal Tracker, CartPilot, SecureSchoolForms, NexusAI, ChaosPilot, GhostTrace, OPTGuard-AI, FlowRescue, RepoMind-AI, Distributed-Microservices-Platform, CloudMon, Keytosafety, Headroom, ResumeOps AI, Ciroos, Autonomous 4WD Robotics Platform.
- Actively seeking Full Stack, DevOps/Cloud, and AI/ML Engineering roles in the USA (remote or relocation)
- Contact: linkedin.com/in/priyanshx | github.com/Priyansh-6216 | priyansh-6216.github.io`
