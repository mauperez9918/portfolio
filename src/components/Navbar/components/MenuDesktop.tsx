import { Link } from "react-scroll";
import UseLanguage from "../../hooks/UseLanguage";
import LanguageSelector from "./LanguageSelector";
import spanishText from "../../../data/languages/spanishLanguage.json";
import englishText from "../../../data/languages/englishLanguage.json";

const MenuDesktop = () => {
  const { lang, toggle } = UseLanguage();

  return (
    <ul className="hidden md:flex w-2/3 justify-end items-center font-semibold text-base text-primary font-mainFont">
      <Link to="about" smooth={true} duration={500} offset={-130}>
        <li className="text-center px-5 py-4 hover:cursor-pointer hover:scale-105 transition-all">
          {lang === "es"
            ? spanishText.navbar.aboutMe
            : englishText.navbar.aboutMe}
        </li>
      </Link>

      <Link to="skills" smooth={true} duration={500} offset={-130}>
        <li className="text-center px-5 py-4 hover:cursor-pointer hover:scale-105 transition-all">
          {lang === "es"
            ? spanishText.navbar.skills
            : englishText.navbar.skills}
        </li>
      </Link>

      <Link to="projects" smooth={true} duration={500} offset={-130}>
        <li className="text-center px-5 py-4 hover:cursor-pointer hover:scale-105 transition-all">
          {lang === "es"
            ? spanishText.navbar.projects
            : englishText.navbar.projects}
        </li>
      </Link>

      <LanguageSelector lang={lang} toggle={toggle} />
    </ul>
  );
};

export default MenuDesktop;
