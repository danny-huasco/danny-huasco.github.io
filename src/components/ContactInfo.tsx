function ContactInfo() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Contact Information</h3>

      <div className="mt-4 space-y-3 text-sm text-slate-600">
        <div>
          <p className="font-medium text-slate-500">Location</p>
          <p>Jacksonville, Florida</p>
        </div>

        <div>
          <p className="font-medium text-slate-500">Email</p>
          <a href="mailto:d.huascomiranda@gmail.com" className="text-sky-700 transition hover:text-sky-800">
            d.huascomiranda@gmail.com
          </a>
        </div>

        <div>
          <p className="font-medium text-slate-500">Phone</p>
          <p>(904) 707-1627</p>
        </div>
      </div>

      <div className="mt-5">
        <p className="font-medium text-slate-500">Social media</p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
            href="https://www.linkedin.com/in/danielhuascomiranda/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            href="https://www.github.com/danny-huasco"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
