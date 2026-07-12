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
    'I currently hold a German student residence permit, which allows me to work 140 full days (or 280 half days) per year. I use it as a Working Student Software Developer at Deutsche Börse in Frankfurt.',
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
      'Designed and deployed an end-to-end autonomous AI deployment pipeline: full ticket-to-code generation, automated infrastructure provisioning via Terraform, and GCP execution with observable rollback points.',
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
      'Built and modernized full-stack applications using Java (Spring Boot), React, and Angular, improving user engagement and retention by 30%.',
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
  {
    timelineType: 'education',
    name: 'Government Boys Higher Secondary School, Sopore',
    title: 'Higher Secondary Education (Abitur Equivalent)',
    techStack: '',
    dateRange: '2014 – 2016 · Sopore, Kashmir, India',
    summaryPoints: [
      'Completed the Indian Higher Secondary Certificate (Grades 11 and 12), the university entrance qualification comparable to the German Abitur.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Attention Painter',
    description:
      'Paint-to-steer for vision-language models. Brush directly on an image to boost or suppress the regions the model attends to, using PASTA-style attention reweighting on Qwen2.5-VL, with steered and baseline outputs side by side.',
    techUsed: 'Python, PyTorch, Qwen2.5-VL, Hugging Face, FastAPI, React',
    imageUrl: 'https://picsum.photos/seed/attentionpainter/400/250',
  },
  {
    title: 'Belief Editor',
    description:
      'Edit an LLM\'s factual beliefs with a blast-radius preview. ROME rank-one weight edits on a local Qwen2.5 model, with before/after probes of related facts so collateral damage is visible before you commit or discard the edit.',
    techUsed: 'Python, PyTorch, Qwen2.5, ROME, FastAPI, React',
    imageUrl: 'https://picsum.photos/seed/beliefeditor/400/250',
  },
  {
    title: 'Attention Emphasis',
    description:
      'Highlight-to-emphasize prompt editor: select spans of a prompt and dial their influence up or down via PASTA attention steering on Qwen2, comparing steered and unsteered generations side by side.',
    techUsed: 'Python, PyTorch, Qwen2, PASTA, FastAPI, React',
    imageUrl: 'https://picsum.photos/seed/attentionemphasis/400/250',
  },
  {
    title: 'PackageResolver',
    description:
      'Dependency-free C++17 package dependency resolver featuring manifest parsing with a custom-built JSON parser, dependency-graph construction, topological install ordering, cycle detection, and semantic-version constraint solving.',
    techUsed: 'C++, CMake',
    imageUrl: 'https://picsum.photos/seed/packageresolver/400/250',
  },
  {
    title: 'Claim Workspace',
    description:
      'Turns RAG answers into atomic, individually NLI-verified claims you can pin, dispute, or edit, making LLM output repairable claim-by-claim instead of regenerating the whole answer. Runs fully locally on Qwen2.5 via Ollama.',
    techUsed: 'Python, Ollama, Qwen2.5, ChromaDB, NLI, React',
    imageUrl: 'https://picsum.photos/seed/claimworkspace/400/250',
  },
  {
    title: 'Semantic Sliders',
    description:
      'GUI sliders that steer a local LLM\'s activations in real time via repeng control vectors, adjusting traits like tone without touching the prompt. Runs Qwen2.5-3B locally; built for a user study against prompt engineering.',
    techUsed: 'Python, PyTorch, Qwen2.5, repeng, React, TypeScript',
    imageUrl: 'https://picsum.photos/seed/semanticsliders/400/250',
  },
  {
    title: 'RAG Canvas',
    description:
      'Direct manipulation of retrieval context in RAG: retrieved chunks appear as draggable cards you can pin, exclude, or reweight before generation, with provenance edges linking the streamed answer back to its sources. Powered by Qwen3 running locally on Ollama.',
    techUsed: 'React, TypeScript, FastAPI, ChromaDB, Ollama, Qwen3',
    imageUrl: 'https://picsum.photos/seed/ragcanvas/400/250',
  },
  {
    title: 'LifeOS',
    description:
      'One system for your whole life: tasks, habits, finance, health, learning, and focus with a gamified XP layer on top. Full-stack TypeScript monorepo with a local-first React SPA, JWT REST API, Prisma on Postgres, and CI-gated tests.',
    techUsed: 'React, TypeScript, Express.js, Prisma, PostgreSQL',
    imageUrl: 'https://picsum.photos/seed/lifeos/400/250',
  },
  {
    title: 'AI Job Copilot',
    description:
      'AI-powered browser extension with a local-first memory layer for the job search. Every posting viewed is fingerprinted and stored on-device, powering autofill, cover letters, match scoring, and chat over your own application history. Runs on local Qwen3 via Ollama, with Claude and OpenAI as optional providers.',
    techUsed: 'TypeScript, React, Ollama, Qwen3, Claude API, IndexedDB',
    imageUrl: 'https://picsum.photos/seed/aijobcopilot/400/250',
  },
  {
    title: 'MarketPulse',
    description:
      'Real-time economic intelligence dashboard powered by a high-performance C++ engine. Aggregates FRED macro indicators, financial news feeds, and VADER sentiment scoring into one platform, with Python ingestion services.',
    techUsed: 'C++, Python, PostgreSQL, VADER NLP, Docker',
    imageUrl: 'https://picsum.photos/seed/marketpulse/400/250',
  },
  {
    title: 'Quant.AI',
    description:
      'Institutional-grade trading terminal with a custom low-latency market simulation engine: live ticks, order-book dynamics, and full portfolio management in a Bloomberg-style UI built on React 19.',
    techUsed: 'React, TypeScript, Zustand, TanStack Query, Highcharts, MUI',
    imageUrl: 'https://picsum.photos/seed/quantai/400/250',
  },
  {
    title: 'PDF Tools',
    description:
      'Privacy-focused PDF manipulation toolkit that runs entirely in the browser. Merge, split, convert, and edit with no server uploads and no data collection; your files never leave your device.',
    techUsed: 'React, TypeScript, Vite, MUI',
    imageUrl: 'https://picsum.photos/seed/pdftools/400/250',
  },
  {
    title: 'FlowPrompt',
    description:
      'Visual flow-based programming for LLM interactions. Compose prompts, model parameters, and data transformations as nodes in a directed graph to build, debug, and trace complex multi-step AI pipelines.',
    techUsed: 'React, TypeScript, React Flow',
    imageUrl: 'https://picsum.photos/seed/flowprompt/400/250',
  },
  {
    title: 'VoltDB',
    description:
      'High-performance, Redis-compatible in-memory key-value store written from scratch in modern C++17. RESP protocol support, O(1) operations with LRU eviction and per-key TTL, a multi-threaded worker pool, and append-only-file persistence with crash recovery.',
    techUsed: 'C++, CMake, Redis, Docker',
    imageUrl: 'https://picsum.photos/seed/voltdb/400/250',
  },
  {
    title: 'DocQ: Document Q&A',
    description:
      'Enterprise-grade RAG pipeline with hybrid retrieval: semantic vector search fused with BM25 keyword search via Reciprocal Rank Fusion, Gemini re-ranking, conversation memory, and source-cited answers with confidence scores.',
    techUsed: 'Python, LangChain, Gemini, ChromaDB, BM25, Streamlit',
    imageUrl: 'https://picsum.photos/seed/docq/400/250',
  },
  {
    title: 'KOTO Chat',
    description:
      'Neuro-inclusive real-time messaging platform designed for focus and emotional clarity. MERN stack with Socket.io real-time delivery, Zustand state management, and an accessibility-first Tailwind + DaisyUI interface.',
    techUsed: 'React, Node.js, MongoDB, Socket.io, Tailwind',
    imageUrl: 'https://picsum.photos/seed/kotochat/400/250',
  },
];

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', icon: 'FaPython', description: 'Primary language for AI/ML pipelines, automation, and backend services.' },
  { name: 'TypeScript', category: 'Languages', icon: 'SiTypescript', description: 'Type-safe frontends and Node.js services in production.' },
  { name: 'JavaScript', category: 'Languages', icon: 'SiJavascript', description: 'Full-stack development across React and Node.js.' },
  { name: 'Java', category: 'Languages', icon: 'FaJava', description: 'Enterprise backends with Spring Boot.' },
  { name: 'C++', category: 'Languages', icon: 'SiCplusplus', description: 'Systems programming: dependency resolvers, in-memory data stores, and performance-critical engines.' },
  { name: 'C', category: 'Languages', icon: 'SiC', description: 'Low-level programming for performance-critical and embedded-style components.' },
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
  { name: 'Google Cloud', category: 'Cloud & DevOps', icon: 'SiGooglecloud', description: 'Cloud Functions, Firestore, IAM, and Compute Engine. Certified.' },
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
  { title: 'Professional Data Engineer', issuer: 'Google Cloud', issuedDate: '', iconName: 'google' },
  { title: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI · Coursera', issuedDate: '', iconName: 'coursera' },
  { title: 'Full-Stack Developer', issuer: 'Meta · Coursera', issuedDate: '', iconName: 'coursera' },
  { title: 'Python for Data Science', issuer: 'Microsoft', issuedDate: '', iconName: 'microsoft' },
  { title: 'GitHub Actions', issuer: 'GitHub', issuedDate: '', iconName: 'github' },
  { title: 'Linux Essentials', issuer: 'Linux Professional Institute', issuedDate: '', iconName: 'linux' },
  { title: 'Artificial Intelligence Lab', issuer: 'Deutsche Börse', issuedDate: '', iconName: 'university' },
  { title: 'Agentic AI & CLI Courses', issuer: 'Udemy', issuedDate: '', iconName: 'udemy' },
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
