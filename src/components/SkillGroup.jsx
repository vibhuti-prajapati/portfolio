function SkillGroup({ title, skills }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-2 border-2 border-black rounded-full bg-white/40"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;