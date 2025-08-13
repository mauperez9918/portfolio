import UseLanguage from "../../../../components/hooks/UseLanguage";
import { DescriptionSideProps } from "../../../../types/descriptionSideProps";

const DescriptionSide: React.FC<DescriptionSideProps> = ({
  name,
  description,
  pageLink,
  code,
}) => {
  const { lang } = UseLanguage();

  return (
    <div className="lg:w-[45%] flex flex-col justify-around items-center">
      {/* Project Name */}
      <h4 className="my-4">{name}</h4>
      {/* Project Description */}
      <p className="text-justify">{description}</p>
      {/* Buttons Container */}
      <div className="flex w-full gap-3 my-6 justify-center md:justify-end">
        {/* View Code Button */}
        <a
          className="w-1/2"
          href={code ? code : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            disabled={code ? false : true}
            className={`w-full hover:scale-105 transition-all ease-in-out flex justify-center items-center ${
              code ? "" : "bg-slate-500 hover:scale-100 hover:bg-slate-500"
            }`}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
              />
            </svg>
            <span>
              {lang === "es"
                ? code
                  ? "Ver Código"
                  : "Código no disponible"
                : code
                ? "View Code"
                : "Not available"}
            </span>
          </button>
        </a>

        {/* View Proyect Button */}
        <a
          className="w-1/2"
          href={pageLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full hover:scale-105 transition-all ease-in-out flex justify-center items-center">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
              />
            </svg>
            <span>{lang === "es" ? "Ver Proyecto" : "View Project"}</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default DescriptionSide;
