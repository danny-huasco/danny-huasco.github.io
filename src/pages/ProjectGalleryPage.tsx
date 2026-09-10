function ProjectGalleryPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Project Gallery</h1>
        <p className="mt-2 text-slate-600">
          A showcase of selected work, experiments, and learning projects.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">Portfolio Site</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">A personal portfolio built with React and Vite.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-700">React</span>
              <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700">Vite</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">More Projects</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This section will be expanded with case studies and featured work.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">Portfolio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGalleryPage;
