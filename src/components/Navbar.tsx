import MenuDesktop from "./common/MenuDesktop";
import MenuMobile from "./common/MenuMobile";

const Navbar = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-md z-50 text-primary border-b-[1px] border-gray-400 flex justify-center items-center h-28 sticky top-0">
      <nav className="flex justify-between pl-5 items-center h-3/4 w-full lg:w-3/4 mx-auto rounded-3xl">
        <span className="text-2xl font-mainFont font-bold text-primary">{`<Mauricio Perez/>`}</span>

        <MenuDesktop />
        <MenuMobile />
      </nav>
    </header>
  );
};

export default Navbar;
