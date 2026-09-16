import type { Project } from '../content/projects';

type ProjectCardProps = {
  project: Project;
};

const statusLabels = {
  live: 'Live demo',
  'coming-soon': 'Demo coming soon',
  'source-only': 'Source available',
} as const;

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-900">{project.name}</h2>
        <span className="shrink-0 rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700">
          {statusLabels[project.status]}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-700">
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            View live demo
          </a>
        ) : null}

        {project.repositoryUrl ? (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-700"
          >
            View source
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;