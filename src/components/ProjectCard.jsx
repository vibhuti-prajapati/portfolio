function ProjectCard({ title, desc, tech }) {
  return (
    <div className="relative p-6 group cursor-pointer">

      {/* marker border wobble */}
      <div className="absolute inset-0 border-2 border-black rounded-xl rotate-[0.6deg]"></div>
      <div className="absolute inset-0 border-2 border-black rounded-xl -rotate-[0.6deg]"></div>

      <div className="relative rounded-xl p-6 h-full transition group-hover:-translate-y-2">

        <h3 className="text-xl font-bold">{title}</h3>

        <p className="mt-3 text-gray-700">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map(t => (
            <span
              key={t}
              className="px-3 py-1 text-sm border border-black rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 text-sm underline">
          <a href="#">GitHub</a>
          <a href="#">Live Demo</a>
        </div>

      </div>
    </div>
  );
}


export default ProjectCard;