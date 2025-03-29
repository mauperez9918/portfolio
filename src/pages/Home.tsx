import AboutMe from "./sections/AboutMe/AboutMe";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

const Home = () => {
  return (
    <main className="min-h-[80dvh] w-full">
      <div className="w-3/4 h-full mx-auto">
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    </main>
  );
};

export default Home;
