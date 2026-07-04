// portfolioData.ts
// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site — no CMS, no API keys, no redeploy of anything else.
// ─────────────────────────────────────────────────────────────

import {
  ProfileBanner,
  WorkPermit,
  TimelineItem,
  Project,
  Certification,
  ContactMe,
  Skill,
} from '../types';

export const profileBanner: ProfileBanner = {
  headline: 'Ijlal Furqaan',
  profileSummary:
    'Full-stack developer and AI engineer with production experience in agentic AI systems, autonomous deployment pipelines, and real-time market data platforms across GCP and AWS. Currently building AI-driven deployment automation at Deutsche Börse while pursuing an M.S. in Computer Science in Germany.',
  resumeUrl: `${process.env.PUBLIC_URL}/resume.pdf`,
  linkedinUrl: 'https://www.linkedin.com/in/ijlal-furqaan-32b7251b6',
  githubUrl: 'https://github.com/IjlalFurqaan',
};

export const workPermit: WorkPermit = {
  visaStatus: 'German student residence permit',
  location: 'Germany 🇩🇪',
  summary:
    'I currently hold a German student residence permit, which allows me to work 140 full days (or 280 half days) per year — I use it as a Working Student Software Developer at Deutsche Börse in Frankfurt.',
  additionalInfo:
    'Graduating with an M.S. in Computer Science from Philipps-Universität Marburg in 2026. After graduation, German law grants an 18-month residence permit for job seeking, and I will be eligible for a full-time work permit / EU Blue Card sponsorship. Open to full-time opportunities across Germany and the EU.',
};

export const timeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Deutsche Börse',
    title: 'Working Student Software Developer',
    techStack: 'Python, Node.js, React, TypeScript, GraphQL, GCP, Terraform, Vertex AI',
    dateRange: 'Sep 2025 – Present · Frankfurt, Germany',
    summaryPoints: [
      'Designed and deployed an end-to-end autonomous AI deployment pipeline — full ticket-to-code generation, automated infrastructure provisioning via Terraform, and GCP execution with observable rollback points.',
      'Engineered a suite of specialized AI agents for codebase scanning, code generation, security vulnerability detection, and end-to-end test execution inside the CI/CD pipeline.',
      'Built the T7 Reference Data service exposing instrument metadata via GraphQL (Node.js, Express, Python) with sorting, filtering, and keyset pagination on Firestore.',
      'Built live Market Supervision dashboards with React, TypeScript, Zustand, and AG-Grid virtualization for high-volume datasets.',
      'Reduced middleware network calls by 30–40% via API batching, caching, and WebSocket-based real-time updates.',
    ],
  },
  {
    timelineType: 'education',
    name: 'Philipps-Universität Marburg',
    title: 'M.S. Computer Science',
    techStack: '',
    dateRange: '2024 – 2026 · Marburg, Germany',
    summaryPoints: [
      'Focus on artificial intelligence, distributed systems, and software engineering.',
    ],
  },
  {
    timelineType: 'work',
    name: 'Mphasis',
    title: 'Software Engineer',
    techStack: 'Java, Spring Boot, React, Angular, Python, MySQL',
    dateRange: 'Sep 2021 – Jan 2024 · Pune, India',
    summaryPoints: [
      'Built and modernized full-stack applications using Java (Spring Boot), React, and Angular — improving user engagement and retention by 30%.',
      'Developed highly responsive performance dashboards with custom React hooks and Angular components for high-throughput rendering.',
      'Automated repetitive data processing with Python and shell scripts, saving 15+ hours of manual effort weekly.',
      'Maintained 95%+ test coverage across critical applications using pytest, significantly reducing production bugs.',
    ],
  },
  {
    timelineType: 'education',
    name: 'Osmania University',
    title: 'B.E. Computer Science',
    techStack: '',
    dateRange: '2017 – 2021 · Hyderabad, India',
    summaryPoints: [
      'Graduated with a Bachelor of Engineering in Computer Science.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Autonomous AI Deployment Pipeline',
    description:
      'End-to-end agentic CI/CD pipeline: a ticket goes in, AI agents generate the code, provision infrastructure with Terraform, deploy to GCP, run tests, and open the PR — with observable rollback points at every stage.',
    techUsed: 'GCP, Terraform, GitHub Actions, Node.js, Python',
    imageUrl: 'https://picsum.photos/seed/aipipeline/400/250',
  },
  {
    title: 'LLM-Powered Document Q&A',
    description:
      'End-to-end RAG pipeline using Vertex AI, LangChain, and semantic search to answer natural-language questions over enterprise documents.',
    techUsed: 'Python, LangChain, GCP, RAG',
    imageUrl: 'https://picsum.photos/seed/documents/400/250',
  },
  {
    title: 'T7 Reference Data GraphQL API',
    description:
      'GraphQL service exposing financial instrument metadata, with sorting, filtering, and keyset pagination built on Firestore — including an in-memory fallback for Firestore inequality-filter constraints.',
    techUsed: 'GraphQL, Node.js, Express.js, Firestore',
    imageUrl: 'https://picsum.photos/seed/graphqlapi/400/250',
  },
  {
    title: 'Market Supervision Dashboards',
    description:
      'Real-time market monitoring dashboards for a trading platform — React, TypeScript, and Zustand with AG-Grid virtualization to keep high-volume live data smooth.',
    techUsed: 'React, TypeScript, WebSocket, AG-Grid',
    imageUrl: 'https://picsum.photos/seed/marketdata/400/250',
  },
  {
    title: 'Bat Tracking System',
    description:
      'Real-time bat flight detection and tracking using YOLO and OpenCV, served through a Flask backend built for high-throughput video streaming.',
    techUsed: 'Python, Flask, OpenCV, YOLO',
    imageUrl: 'https://picsum.photos/seed/battracking/400/250',
  },
  {
    title: 'Netflix-Style Portfolio',
    description:
      'This site — a Netflix-inspired portfolio built with React and TypeScript, customized with local typed data (no CMS), a live GitHub repos page, and per-audience profiles.',
    techUsed: 'React, TypeScript, CSS3',
    imageUrl: 'https://picsum.photos/seed/portfolio/400/250',
  },
];

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', icon: 'FaPython', description: 'Primary language for AI/ML pipelines, automation, and backend services.' },
  { name: 'TypeScript', category: 'Languages', icon: 'SiTypescript', description: 'Type-safe frontends and Node.js services in production.' },
  { name: 'JavaScript', category: 'Languages', icon: 'SiJavascript', description: 'Full-stack development across React and Node.js.' },
  { name: 'Java', category: 'Languages', icon: 'FaJava', description: 'Enterprise backends with Spring Boot.' },
  { name: 'SQL', category: 'Languages', icon: 'FaDatabase', description: 'Query design and optimization across relational databases.' },

  // AI & ML
  { name: 'Agentic AI', category: 'AI & ML', icon: 'FaRobot', description: 'Autonomous multi-agent systems with tool calling and MCP servers.' },
  { name: 'LLMs & RAG', category: 'AI & ML', icon: 'FaBrain', description: 'Retrieval-augmented generation and prompt engineering in production.' },
  { name: 'LangChain', category: 'AI & ML', icon: 'FaRobot', description: 'Orchestration for LLM pipelines and semantic search.' },
  { name: 'Vertex AI', category: 'AI & ML', icon: 'SiGooglecloud', description: 'Model deployment and generative AI on Google Cloud.' },
  { name: 'TensorFlow', category: 'AI & ML', icon: 'SiTensorflow', description: 'Deep learning model building and training.' },
  { name: 'PyTorch', category: 'AI & ML', icon: 'SiPytorch', description: 'Research-grade model prototyping and computer vision.' },

  // Frontend
  { name: 'React', category: 'Frontend', icon: 'FaReact', description: 'Production dashboards with hooks, Zustand, and AG-Grid virtualization.' },
  { name: 'Angular', category: 'Frontend', icon: 'FaAngular', description: 'Enterprise component development and dynamic rendering.' },
  { name: 'Redux / Zustand', category: 'Frontend', icon: 'SiRedux', description: 'Predictable state management for real-time data UIs.' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'FaNodeJs', description: 'High-throughput APIs and WebSocket real-time services.' },
  { name: 'Express.js', category: 'Backend', icon: 'SiExpress', description: 'REST and GraphQL middleware layers in production.' },
  { name: 'GraphQL', category: 'Backend', icon: 'SiGraphql', description: 'Schema design, pagination, and Firestore-backed resolvers.' },
  { name: 'Spring Boot', category: 'Backend', icon: 'SiSpringboot', description: 'Java microservices and secure API integrations.' },
  { name: 'Flask', category: 'Backend', icon: 'SiFlask', description: 'Lightweight Python backends for ML-serving workloads.' },

  // Cloud & DevOps
  { name: 'Google Cloud', category: 'Cloud & DevOps', icon: 'SiGooglecloud', description: 'Cloud Functions, Firestore, IAM, Compute Engine — certified.' },
  { name: 'AWS', category: 'Cloud & DevOps', icon: 'FaAws', description: 'Cloud services for hosting and data workloads.' },
  { name: 'Terraform', category: 'Cloud & DevOps', icon: 'SiTerraform', description: 'Infrastructure as code with automated plan/apply pipelines.' },
  { name: 'Docker', category: 'Cloud & DevOps', icon: 'FaDocker', description: 'Containerized builds and deployments.' },
  { name: 'GitHub Actions', category: 'Cloud & DevOps', icon: 'FaGithub', description: 'CI/CD pipelines including self-hosted runner setups.' },
  { name: 'Linux', category: 'Cloud & DevOps', icon: 'SiLinux', description: 'Server administration, Bash scripting, and deployments over SSH.' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', icon: 'SiPostgresql', description: 'Relational modeling and performance tuning.' },
  { name: 'MongoDB', category: 'Databases', icon: 'SiMongodb', description: 'Document stores for flexible schemas.' },
  { name: 'MySQL', category: 'Databases', icon: 'SiMysql', description: 'Legacy and cloud relational workloads.' },
  { name: 'Firestore', category: 'Databases', icon: 'SiFirebase', description: 'Serverless NoSQL backing production GraphQL APIs.' },
];

export const certifications: Certification[] = [
  { title: 'Professional Data Engineer', issuer: 'Google Cloud', issuedDate: '', link: 'https://www.credential.net/', iconName: 'google' },
  { title: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI · Coursera', issuedDate: '', link: 'https://www.coursera.org/', iconName: 'coursera' },
  { title: 'Full-Stack Developer', issuer: 'Meta · Coursera', issuedDate: '', link: 'https://www.coursera.org/', iconName: 'coursera' },
  { title: 'Python for Data Science', issuer: 'Microsoft', issuedDate: '', link: 'https://learn.microsoft.com/', iconName: 'microsoft' },
  { title: 'GitHub Actions', issuer: 'GitHub', issuedDate: '', link: 'https://github.com/IjlalFurqaan', iconName: 'github' },
  { title: 'Linux Essentials', issuer: 'Linux Professional Institute', issuedDate: '', link: 'https://www.lpi.org/', iconName: 'linux' },
  { title: 'Artificial Intelligence Lab', issuer: 'Deutsche Börse', issuedDate: '', link: 'https://www.deutsche-boerse.com/', iconName: 'university' },
  { title: 'Agentic AI & CLI Courses', issuer: 'Udemy', issuedDate: '', link: 'https://www.udemy.com/', iconName: 'udemy' },
];

export const contactMe: ContactMe = {
  name: 'Ijlal Furqaan',
  title: 'Full-Stack Developer & AI Engineer',
  summary:
    'Building agentic AI systems and real-time market data platforms. Always happy to talk about AI engineering, cloud infrastructure, or full-stack development.',
  companyUniversity: 'Deutsche Börse · Philipps-Universität Marburg',
  linkedinLink: 'https://www.linkedin.com/in/ijlal-furqaan-32b7251b6',
  email: 'ijlalfurqaan5@gmail.com',
  phoneNumber: '+49 152 15155020',
};

export const githubUsername = 'IjlalFurqaan';
