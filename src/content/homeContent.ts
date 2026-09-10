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
  '../../assets/Software Developer Resume - Daniel Huasco Miranda.docx',
  import.meta.url
).href;

export const resumePdfDocument = '/assets/Software Developer Resume - Daniel Huasco Miranda.pdf';

export const aboutParagraphs = [
  'I am a detail-oriented software developer with hands-on enterprise experience building scalable web applications, designing REST APIs, and resolving production defects in Agile SDLC environments. My work is grounded in practical engineering, strong collaboration, and delivering reliable software that supports real business needs.',
  'I am proficient across full-stack JavaScript, including Node.js and Express, and relational databases, while remaining adaptable to other technology stacks as needs evolve. I enjoy solving complex problems, improving platform stability, and helping teams ship clean, maintainable code.',
];

export const experience: ExperienceItem[] = [
  {
    company: 'RF-SMART',
    title: 'Software Developer Intern – Product Engineering (NetSuite)',
    period: 'Jan 2026 – Jul 2026',
    highlights: [
      'Engineered and optimized features for enterprise supply chain software using JavaScript within multi-tenant cloud environments.',
      'Collaborated with an Agile/Scrum team to resolve API defects, optimize NetSuite interactions, and clear high-priority backlog tickets.',
      'Conducted regular code reviews and managed Git workflows to support deployment stability across global enterprise client operations.',
    ],
  },
  {
    company: 'Persown Connect',
    title: 'Web Developer',
    period: 'Sep 2024 – Present',
    highlights: [
      'Built custom web tools and internal platform utilities to streamline content management workflows and track user engagement metrics.',
      'Performed regular debugging and cross-browser testing to improve website stability and user experience.',
    ],
  },
  {
    company: 'E-CAMP & INFOCLUB COMPANIES',
    title: 'Bootcamp Assistant & Technical Instructor – Full Stack JavaScript',
    period: 'Jul 2021 – Jun 2022',
    highlights: [
      'Mentored 30+ developers on full stack web development using Node.js, Express, and PostgreSQL.',
      'Evaluated code quality, provided actionable feedback on pull requests, and reinforced clean code standards.',
    ],
  },
];

export const skills = [
  'JavaScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'REST APIs',
  'Git',
  'GitHub',
  'Agile/Scrum',
  'NetSuite',
  'Cross-browser testing',
  'Code review',
  'Technical mentoring',
];

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Science in Information Science',
    institution: 'University of North Florida (UNF)',
    detail: 'Graduated on July 2026 • Magna Cum Laude • Upsilon Pi Epsilon',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    institution: 'AWS Academy',
    detail: 'Cloud fundamentals and AWS concepts',
  },
];
