import { ImageSideProps } from "../../../../types/imageSideProps";
import IconTemplate from "../../../../components/common/IconTemplate";

const ImageSide: React.FC<ImageSideProps> = ({ img, technologies }) => {
  return (
    <div className="w-full mx-auto lg:w-[45%] flex flex-col justify-center items-center rounded-sm">
      {/* Image */}
      <img className="w-full h-auto rounded-sm" src={img} alt="Project Image" />

      {/* Technologies Map */}
      <ul className="min-h-8 mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-4 gap-3 w-full text-white">
        {technologies.map((item, index) => {
          return (
            <IconTemplate key={index} name={item.name} iconImg={item.iconImg} />
          );
        })}
      </ul>
    </div>
  );
};

export default ImageSide;
