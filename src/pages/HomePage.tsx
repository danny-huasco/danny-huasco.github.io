import { useState } from 'react';
import profilePic from '../../assets/prof-pic.png';
import EducationList from '../components/EducationList';
import ExperienceList from '../components/ExperienceList';
import ResumePreviewModal from '../components/ResumePreviewModal';
import SectionHeader from '../components/SectionHeader';
import SkillsList from '../components/SkillsList';
import {
  aboutParagraphs,
  education,
  experience,
  resumeDocument,
  resumePdfDocument,
  skills,
} from '../content/homeContent';

function HomePage() {
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);

  return (
    <div className="space-y-10 pb-10">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Jacksonville, FL • Software Developer
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Daniel Huasco Miranda
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Detail-oriented Software Developer with hands-on enterprise experience building scalable web applications,
              designing REST APIs, and resolving production defects in Agile SDLC environments.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#/contact"
                className="inline-flex items-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Contact me
              </a>
              <button
                type="button"
                onClick={() => setIsResumePreviewOpen(true)}
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-700"
              >
                Preview Resume
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-500 via-indigo-500 to-slate-900 p-2 shadow-xl shadow-slate-300/60">
              <img src={profilePic} alt="Danny Huasco" className="h-[360px] w-full rounded-[1.1rem] object-cover sm:h-[420px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <SectionHeader eyebrow="About" title="About" />

        <div className="grid gap-6 lg:grid-cols-2">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <SectionHeader eyebrow="Experience" title="Experience" />
        <ExperienceList items={experience} />
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <SectionHeader eyebrow="Skills" title="Skills" />
        <SkillsList items={skills} />
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <SectionHeader eyebrow="Education" title="Education & Training" />
        <EducationList items={education} />
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-sky-50 to-indigo-50 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Resume</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Download Resume</h2>
          </div>

          <button
            type="button"
            onClick={() => setIsResumePreviewOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Open Resume
          </button>
        </div>
      </section>

      <ResumePreviewModal
        isOpen={isResumePreviewOpen}
        onClose={() => setIsResumePreviewOpen(false)}
        pdfUrl={resumePdfDocument}
        docxUrl={resumeDocument}
      />
    </div>
  );
}

export default HomePage;