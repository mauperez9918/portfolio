import { ImageSideProps } from "../../../../types/imageSideProps";

const ImageSide: React.FC<ImageSideProps> = ({ img, technologies }) => {
  return (
    <div className="w-[45%] flex flex-col justify-center items-center">
      {/* Image */}
      <img className="w-full h-auto" src={img} alt="Project Image" />

      {/* Technologies Map */}
      <ul className="grid grid-cols-4 gr- gap-3 w-full mt-4 text-white">
        {technologies.map((item) => {
          const Icon = item.icon;
          return (
            <li
              className="flex items-center rounded-3xl bg-primary pl-2 py-[6px] max-h-12"
              key={item.name}
            >
              <span className="mr-2">
                <Icon />
              </span>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageSide;
