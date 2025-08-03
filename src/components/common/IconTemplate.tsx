import { IconTemplateProps } from "../../types/iconTemplateProps";

const IconTemplate: React.FC<IconTemplateProps> = ({
  name,
  iconImg,
  extraClass,
  link,
}) => {
  return (
    <li
      className={`flex w-auto items-center rounded-3xl py-[6px] shadow-md border-[1px] border-primary/30 ${
        extraClass || "bg-primary"
      }`}
      key={name}
    >
      <a
        href={`${link ? link : "#"}`}
        onClick={(e) => !link && e.preventDefault()}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center px-4 mx-auto ${
          link ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <img
          className="w-4 md:min-w-5 h-full max-h-8"
          src={iconImg}
          alt={name}
        />
        <span className="ml-1 text-sm">{name}</span>
      </a>
    </li>
  );
};

export default IconTemplate;
