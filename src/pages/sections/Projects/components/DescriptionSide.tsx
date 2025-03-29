import { DescriptionSideProps } from "../../../../types/descriptionSideProps";

const DescriptionSide: React.FC<DescriptionSideProps> = ({
  name,
  description,
  pageLink,
  code,
}) => {
  return (
    <div className="w-[45%] flex flex-col justify-around items-center">
      {/* Project Description */}
      <h3>{name}</h3> <p>{description}</p>
      {/* Buttons Container */}
      <div className="flex w-full justify-end">
        <button className="m-2 hover:scale-105 transition-all ease-in-out">
          <a href={code ? code : "#"} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </button>
        <button className="m-2 hover:scale-105 transition-all ease-in-out">
          <a href={pageLink} target="_blank" rel="noopener noreferrer">
            Ver más
          </a>
        </button>
      </div>
    </div>
  );
};

export default DescriptionSide;
