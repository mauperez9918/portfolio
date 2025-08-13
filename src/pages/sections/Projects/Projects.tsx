import UseLanguage from "../../../components/hooks/UseLanguage";
import { spanishProjectList } from "../../../data/spanishProjectsList.ts";
import { englishProjectList } from "../../../data/englishProjectsList.ts";
import spanishText from "../../../data/languages/spanishLanguage.json";
import englishText from "../../../data/languages/englishLanguage.json";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  const { lang } = UseLanguage();

  return (
    <section
      className="w-full flex flex-col md:mb-10 justify-center items-center"
      id="projects"
    >
      {/* Section Title */}
      <h3 className="w-full font-mainFont text-4xl text-center mb-8">
        {lang === "es"
          ? spanishText.projects.title
          : englishText.projects.title}
      </h3>

      {/* Project Card Container */}
      <div className="w-full flex flex-col justify-center items-center">
        {/* Project Card Map */}
        {(lang === "es" ? spanishProjectList : englishProjectList).map(
          (project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                img={project.img}
                pageLink={project.pageLink}
                code={project.code}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
