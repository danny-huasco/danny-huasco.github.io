function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
        <p className="text-sm text-slate-300">&copy; 2025 Danny Huasco | Software Engineer. All rights reserved.</p>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <a href="#/privacy" className="rounded-full border border-slate-600 px-3 py-1.5 text-slate-200 transition hover:border-sky-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#/contact" className="rounded-full border border-slate-600 px-3 py-1.5 text-slate-200 transition hover:border-sky-400 hover:text-white">
            Contact Me
          </a>
          <a href="#/project-gallery" className="rounded-full border border-slate-600 px-3 py-1.5 text-slate-200 transition hover:border-sky-400 hover:text-white">
            Project Gallery
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
