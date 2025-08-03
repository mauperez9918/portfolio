const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full bg-white/90 h-32 border-t-[1px] border-black/30 text-primary">
      <div className="flex flex-col justify-between items-center h-16 w-11/12 md:flex-row mx-auto">
        <span className="font-medium font-mainFont text-primary text-sm text-center">
          Todos los derechos reservados Mauricio Perez
        </span>
        <div className="flex items-center rounded-md shadow-md border-[1px] border-primary/30">
          <input
            type="text"
            readOnly
            className="border-none outline-none px-2 py-1 w-full rounded-l-md"
            value="mauperez9918@gmail.com"
          />
          <button className="bg-primary text-white px-3 py-1 rounded-r-md rounded-l-none ">
            Copiar
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
