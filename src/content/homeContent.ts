export type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  highlights: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  detail: string;
};

export const resumeDocument = new URL(
  '../../assets/Software Engineer - Daniel Huasco Miranda.docx',
  import.meta.url
).href;

export const resumePdfDocument = new URL(
  '../../assets/Software Engineer - Daniel Huasco Miranda.pdf',
  import.meta.url
).href;

export const aboutParagraphs = [
  'Detail-oriented Software Developer and UNF Magna Cum Laude graduate with enterprise experience building scalable web applications, REST APIs, and cloud services. Skilled in JavaScript, TypeScript, Node.js, React, C#/.NET, relational databases, and modern AI productivity workflows. Strong track record delivering clean, maintainable code within Agile SDLC environments.',
  'I build products with practical engineering discipline, strong collaboration, and a focus on maintainability, data integrity, and business value. I enjoy working across full-stack systems, improving reliability, and adapting to new tools and workflows as the technology landscape evolves.',
];

export const experience: ExperienceItem[] = [
  {
    company: 'RF-SMART',
    title: 'Software Developer Intern – Product Engineering (NetSuite)',
    period: 'Jan 2026 – Jul 2026',
    highlights: [
      'Engineered and optimized core features for enterprise supply chain management software within multi-tenant cloud environments.',
      'Diagnosed and resolved complex asynchronous API deletion defects to enhance data integrity and system stability across production workflows.',
      'Actively participated in sprint planning, backlog refinement, and peer code reviews, consistently delivering approved pull requests.',
      'Managed version control workflows via Git to ensure smooth deployment pipelines across global enterprise client operations.',
    ],
  },
  {
    company: 'PERSOWN CONNECT',
    title: 'Web Developer',
    period: 'Sept 2024 – Present',
    highlights: [
      'Build custom web applications and internal platform utilities using modern web technologies to streamline content management workflows.',
      'Implement user engagement tracking metrics to deliver actionable analytics for platform optimization.',
      'Perform automated and cross-browser debugging to enhance user interface responsiveness, application performance, and site reliability.',
    ],
  },
  {
    company: 'E-CAMP & INFOCLUB COMPANIES',
    title: 'Bootcamp Assistant & Technical Instructor – Full Stack JavaScript',
    period: 'Jul 2021 – Jun 2022',
    highlights: [
      'Mentored over 30 aspiring developers per class in full-stack web engineering, focusing on Node.js, Express, RESTful APIs, and PostgreSQL.',
      'Conducted structured code reviews and evaluated pull requests to teach clean code principles, modular architecture, and testing standards.',
    ],
  },
];

export const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'C#',
  'SQL',
  'HTML5',
  'CSS3',
  'Node.js',
  'Express.js',
  'React',
  '.NET',
  'PostgreSQL',
  'MySQL',
  'RESTful APIs',
  'AWS (Cloud Practitioner)',
  'Azure AI Essentials',
  'AI Pair Programming',
  'AI Agents',
  'Git',
  'GitHub',
  'VS Code',
  'NetSuite',
  'Vercel',
  'Agile/Scrum',
];

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Science in Information Science | Minor in Leadership',
    institution: 'University of North Florida (UNF)',
    detail: 'Graduated Jul 2026 • Magna Cum Laude • Upsilon Pi Epsilon',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    institution: 'AWS Academy',
    detail: 'Cloud Foundations • AWS Academy Cloud Foundations',
  },
  {
    title: 'Microsoft Azure AI Essentials',
    institution: 'Microsoft',
    detail: 'AI fundamentals and productivity workflows',
  },
  {
    title: 'AI Pair Programming, AI Agents for Productivity, and Modern AI Workflows',
    institution: 'LinkedIn',
    detail: 'Applied AI engineering and productivity skills',
  },
];
