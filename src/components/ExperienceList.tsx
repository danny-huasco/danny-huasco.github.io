import type { ExperienceItem } from '../content/homeContent';

type ExperienceListProps = {
  items: ExperienceItem[];
};

function ExperienceList({ items }: ExperienceListProps) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">{item.company}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
            </div>
            <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-700">{item.period}</span>
          </div>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default ExperienceList;
