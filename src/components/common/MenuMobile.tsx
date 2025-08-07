import { useState } from "react";
import { Link } from "react-scroll";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-1/3 md:hidden h-1/2 flex justify-end pr-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        onClick={() => setIsOpen(!isOpen)}
        className="hover:cursor-pointer"
      >
        <path
          fill="#00163d"
          d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
        />
      </svg>

      <ul
        className={`${
          isOpen
            ? "opacity-100 height-100 translate-y-0 pointer-events-auto text-white bg-primary/70 rounded-b-md"
            : "opacity-0 -translate-y-10 pointer-events-none"
        } absolute top-[112px] right-0 w-1/3 lg:w-1/3 justify-around font-semibold text-base text-primary font-mainFont transition-all ease-in-out duration-300`}
      >
        <Link to="about" smooth={true} duration={500}>
          <li className="text-center px-2 py-4 hover:cursor-pointer hover:scale-105 transition-all">
            Sobre mi
          </li>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <li className="text-center px-2 py-4 hover:cursor-pointer hover:scale-105 transition-all">
            Proyectos
          </li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="text-center px-2 py-4 hover:cursor-pointer hover:scale-105 transition-all">
            Habilidades
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuMobile;
