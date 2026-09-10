import type { EducationItem } from '../content/homeContent';

type EducationListProps = {
  items: EducationItem[];
};

function EducationList({ items }: EducationListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm font-medium text-sky-700">{item.institution}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}

export default EducationList;
