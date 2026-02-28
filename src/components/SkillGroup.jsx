function SkillGroup ({ title, skills }) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>{title}</h3>

      <div className='text-base-content/80 leading-7'>{skills.join(' · ')}</div>
    </div>
  )
}
export default SkillGroup
