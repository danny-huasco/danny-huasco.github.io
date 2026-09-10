type SkillsListProps = {
  items: string[];
};

function SkillsList({ items }: SkillsListProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default SkillsList;
