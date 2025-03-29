import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="w-full bg-white text-black border-b-[1px] border-gray-400 backdrop-blur-md flex justify-center items-center h-28 sticky top-0">
      <nav className="flex justify-around items-center h-3/4 w-3/4 mx-auto  rounded-3xl">
        <h1>{`<Mauricio Perez/>`}</h1>

        <ul className="flex w-1/3 justify-around font-semibold text-xl text-primary">
          <Link to="about" smooth={true} duration={500}>
            <li className="hover:cursor-pointer hover:scale-105 transition-all">
              Sobre mi
            </li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li className="hover:cursor-pointer hover:scale-105 transition-all">
              Proyectos
            </li>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <li className="hover:cursor-pointer hover:scale-105 transition-all">
              Habilidades
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
