import { Project } from "../../../../types/Project";
import DescriptionSide from "./DescriptionSide";
import ImageSide from "./ImageSide";

const ProjectCard: React.FC<Project> = ({
  id,
  name,
  description,
  technologies,
  img,
  pageLink,
  code,
}) => {
  return (
    <>
      {id % 2 === 0 ? (
        <article className="flex flex-col h-[900px] md:h-[850px] lg:h-[500px] lg:flex-row justify-around md:justify-between w-full bg-gray-200 lg:mb-32 lg:bg-white rounded-t-md lg:rounded-md shadow-md border-b-[1px] lg:border-[1px] border-primary/30 px-9 py-16">
          <ImageSide img={img} technologies={technologies} />
          <DescriptionSide
            name={name}
            description={description}
            pageLink={pageLink}
            code={code}
          />
        </article>
      ) : (
        <article className="flex flex-col h-[900px] md:h-[850px] lg:h-[500px] lg:flex-row justify-around md:justify-between w-full lg:mb-32 bg-white rounded-t-md lg:rounded-md shadow-md border-[1px] border-primary/30 px-9 py-16">
          <DescriptionSide
            name={name}
            description={description}
            pageLink={pageLink}
            code={code}
          />
          <ImageSide img={img} technologies={technologies} />
        </article>
      )}
    </>
  );
};

export default ProjectCard;
