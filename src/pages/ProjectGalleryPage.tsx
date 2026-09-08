function ProjectGalleryPage() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-lg-10">
        <div className="card mb-3 mt-3">
          <div className="card-body">
            <h1 className="h3 mb-3">Project Gallery</h1>
            <p className="text-muted">
              A showcase of selected work, experiments, and learning projects.
            </p>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="border rounded p-3 h-100">
                  <h2 className="h5">Portfolio Site</h2>
                  <p className="mb-2">A personal portfolio built with React and Vite.</p>
                  <span className="badge bg-primary">React</span>
                  <span className="badge bg-secondary ms-2">Vite</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border rounded p-3 h-100">
                  <h2 className="h5">More Projects</h2>
                  <p className="mb-2">This section will be expanded with case studies and featured work.</p>
                  <span className="badge bg-success">Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGalleryPage;
