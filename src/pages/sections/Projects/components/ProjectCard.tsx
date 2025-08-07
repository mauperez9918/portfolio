import UseIsMobile from "../../../../components/hooks/UseIsMobile";
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
  const isMobile = UseIsMobile();

  return isMobile ? (
    <article className="flex flex-col lg:flex-row justify-around md:justify-between w-full bg-white lg:mb-16 lg:bg-white rounded-t-md lg:rounded-md shadow-md border-b-[1px] lg:border-[1px] border-primary/30 px-9 pb-10 lg:py-9 ">
      <>
        <DescriptionSide
          name={name}
          description={description}
          pageLink={pageLink}
          code={code}
        />
        <ImageSide img={img} technologies={technologies} />
      </>
    </article>
  ) : (
    <article className="flex flex-col lg:flex-row justify-around md:justify-between w-full bg-gray-200 lg:mb-16 lg:bg-white rounded-t-md lg:rounded-md shadow-md border-b-[1px] lg:border-[1px] border-primary/30 px-9 pb-10 lg:py-9 ">
      {id % 2 !== 0 || isMobile ? (
        <>
          <DescriptionSide
            name={name}
            description={description}
            pageLink={pageLink}
            code={code}
          />
          <ImageSide img={img} technologies={technologies} />
        </>
      ) : (
        <>
          <ImageSide img={img} technologies={technologies} />
          <DescriptionSide
            name={name}
            description={description}
            pageLink={pageLink}
            code={code}
          />
        </>
      )}
    </article>
  );
};

export default ProjectCard;
