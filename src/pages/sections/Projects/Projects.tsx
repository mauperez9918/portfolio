import { projectList } from "../../../data/projectsList";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <section
      className="w-full flex flex-col mt-20 justify-center items-center"
      id="projects"
    >
      {/* Section Title */}
      <h2 className="w-full font-mainFont text-4xl text-center mb-28">
        Proyectos destacados
      </h2>

      {/* Project Card Container */}
      <div className="w-full flex flex-col justify-center items-center">
        {/* Project Card Map */}
        {projectList.map((project) => {
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
        })}
      </div>
    </section>
  );
};

export default Projects;
