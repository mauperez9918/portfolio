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
        <article className="flex  justify-between w-full mb-32 bg-white rounded-md border-[1px] border-gray-300 shadow-xl p-9">
          <ImageSide img={img} technologies={technologies} />
          <DescriptionSide
            name={name}
            description={description}
            pageLink={pageLink}
            code={code}
          />
        </article>
      ) : (
        <article className="flex  justify-between w-full mb-32 bg-white rounded-md border-[1px] border-gray-300 shadow-xl p-9">
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
