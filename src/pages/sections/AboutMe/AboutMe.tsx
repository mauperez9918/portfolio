import Avatar from "./components/Avatar";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Introduction from "./components/Introduction";

const AboutMe = () => {
  return (
    <section
      className="w-full md:h-[1150px] lg:h-[850px] xl:h-[950px] py-10 xl:py-0 px-5 flex flex-col gap-6 md:flex-row lg:bg-transparent lg:border-none items-center text-black bg-white border-b-[1px] border-primary/30 rounded-b-lg"
      id="about"
    >
      {/* Introduction Container */}
      <div className="flex flex-col w-full gap-5 justify-center items-center">
        <div className="w-full h-full lg:h-[800px] xl:h-auto flex flex-col lg:flex-row justify-center items-center">
          <Avatar />
          <div className="w-11/12 lg:h-[500px] lg:w-1/2 mx-auto h-full flex flex-col justify-around">
            <Introduction />

            <Description />
          </div>
        </div>

        <Contact />
      </div>
    </section>
  );
};

export default AboutMe;
