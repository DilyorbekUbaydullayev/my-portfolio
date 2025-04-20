import { ISkillCard } from "@/types"


function SkillCard(skill:ISkillCard) {
  
  return (
    <div className="bg-white/5 border border-white/10  rounded-xl p-6 hover:bg-white/10 transition-colors">
      <div className="flex flex-col items-center text-center">
      <div >
            <skill.icon  className={skill.style}/>
          </div>
        <h3 className="mt-4 font-medium text-lg">{skill.title}</h3>
        <p className="mt-2 text-sm text-white/70">{skill.descr}</p>
      </div>
    </div>
  )
}  export default SkillCard