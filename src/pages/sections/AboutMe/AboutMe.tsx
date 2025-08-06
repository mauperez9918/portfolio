import Avatar from "./components/Avatar";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Introduction from "./components/Introduction";

const AboutMe = () => {
  return (
    <section
      className="w-full md:h-[700px] lg:h-[600px] xl:h-[650px] xl:py-0 xl:my-4 py-20 px-5 md:pt-0 flex flex-col gap-6 md:flex-row lg:bg-transparent lg:border-none items-center text-black bg-white border-b-[1px] border-primary/30 rounded-b-lg"
      id="about"
    >
      <Avatar />

      {/* Introduction Container */}
      <div className="w-full md:h-[600px] lg:h-[500px] lg:w-2/3 mx-auto h-full flex flex-col justify-around">
        <Introduction />

        <Description />

        <Contact />
      </div>
    </section>
  );
};

export default AboutMe;
