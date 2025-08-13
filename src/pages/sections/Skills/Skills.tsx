import { skillsList } from "../../../data/skillsList";
import spanishText from "../../../data/languages/spanishLanguage.json";
import englishText from "../../../data/languages/englishLanguage.json";
import UseLanguage from "../../../components/hooks/UseLanguage";

const Skills = () => {
  const { lang } = UseLanguage();

  return (
    <section
      className="w-11/12 xl:w-full flex flex-col my-12 xl:my-10 justify-around text-white"
      id="skills"
    >
      <h3 className="w-full text-4xl text-center mb-8">
        {lang === "es" ? spanishText.skills.title : englishText.skills.title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 w-full h-1/2">
        {skillsList.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex h-14 items-center bg-white text-black p-2 rounded-md shadow-md border-[1px] border-primary/30"
            >
              <img
                className="w-auto h-full"
                src={skill.icon}
                alt={skill.name}
              />
              <span className="px-2">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
