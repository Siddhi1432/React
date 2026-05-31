function SkillList(){
    const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];  

return(
    <div>
        <h2>My Skills</h2>

      {skills.map((skill, index) => (
        <p key={index}>
          ⭐ {skill}
        </p>
      ))}
    </div>
)
}

export default SkillList