import Title from "./sections/Title";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

async function Home() {
  return (
    <>
      <Title />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
