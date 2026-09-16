import ProjectCard from '../components/ProjectCard';
import { projects } from '../content/projects';

function ProjectGalleryPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Project Gallery</h1>
        <p className="mt-2 text-slate-600">
          Explore selected work, experiments, and production demos. Each live demo opens in its own tab so it has the
          space to work as intended.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectGalleryPage;
