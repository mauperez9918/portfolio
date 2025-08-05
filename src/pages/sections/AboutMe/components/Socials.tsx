import { IconTemplateProps } from "../../../../types/iconTemplateProps";

const Socials: React.FC<IconTemplateProps> = ({
  name,
  iconImg,
  extraClass,
  link,
}) => {
  return (
    <a
      href={`${link ? link : "#"}`}
      onClick={(e) => !link && e.preventDefault()}
      target={"_blank"}
      rel="noopener noreferrer"
      className={`flex items-center mx-auto w-2/3 xl:w-1/2 lg:mx-auto rounded-3xl bg-red-500 ${
        link ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <li
        className={`flex w-full justify-center items-center p-3 full rounded-3xl shadow-md border-[1px] border-primary/30 ${
          extraClass || "bg-primary"
        }`}
        key={name}
      >
        <img
          className="w-4 md:min-w-5 h-full max-h-8"
          src={iconImg}
          alt={name}
        />
        <span className="ml-1 text-sm lg:text-base">{name}</span>
      </li>
    </a>
  );
};

export default Socials;
