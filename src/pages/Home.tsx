import AboutMe from "./sections/AboutMe/AboutMe";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

const Home = () => {
  return (
    <main className="min-h-[80dvh] w-full">
      <div className="w-full lg:w-[85%] xl:w-3/4 h-full flex flex-col items-center justify-center mx-auto">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
