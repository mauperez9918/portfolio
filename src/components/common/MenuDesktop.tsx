import { Link } from "react-scroll";

const MenuDesktop = () => {
  return (
    <ul className="flex w-2/3 justify-end font-semibold text-base text-primary font-mainFont">
      <Link to="about" smooth={true} duration={500} offset={-130}>
        <li className="text-center px-7 py-4 hover:cursor-pointer hover:scale-105 transition-all">
          Sobre mi
        </li>
      </Link>

      <Link to="skills" smooth={true} duration={500} offset={-130}>
        <li className="text-center px-7 py-4 hover:cursor-pointer hover:scale-105 transition-all">
          Habilidades
        </li>
      </Link>

      <Link to="projects" smooth={true} duration={500} offset={-130}>
        <li className="text-center px-7 py-4 hover:cursor-pointer hover:scale-105 transition-all">
          Proyectos
        </li>
      </Link>
    </ul>
  );
};

export default MenuDesktop;
