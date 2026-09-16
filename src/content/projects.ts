export type ProjectStatus = 'live' | 'coming-soon' | 'source-only';

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    name: 'Portfolio Site',
    description: 'A responsive portfolio built with React and Vite to present my experience, skills, and selected work.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repositoryUrl: 'https://github.com/danny-huasco/danny-huasco.github.io',
    demoUrl: 'https://danny-huasco.github.io/',
    status: 'live',
  },
  {
    name: 'Project Demo',
    description: 'A selected GitHub project will be connected here with a production demo and implementation details.',
    technologies: ['Coming soon'],
    status: 'coming-soon',
  },
];