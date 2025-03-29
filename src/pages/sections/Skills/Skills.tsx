import { skillsList } from "../../../data/skillsList";

const Skills = () => {
  return (
    <section
      className="w-full h-48 flex flex-col mb-20 justify-around"
      id="skills"
    >
      <h2 className="w-full text-center text-4xl">Habilidades</h2>

      <div className="flex justify-around w-full h-1/2">
        {skillsList.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="flex items-center">
              <Icon className="w-12 h-12 mb-2" />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
