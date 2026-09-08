import resumePdf from '../../assets/resume.pdf';

function ResumeSection() {
  return (
    <div className="accordion mb-3 mt-2" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <strong>RESUME</strong>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <a href={resumePdf} className="btn btn-primary mb-3" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <embed src={resumePdf} type="application/pdf" width="100%" height="800px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;
