type SectionHeaderProps = {
  eyebrow: string;
  title?: string;
};

function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">{eyebrow}</p>
      {title ? <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h2> : null}
    </div>
  );
}

export default SectionHeader;
