import Title from "./sections/Title";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

async function Home() {
  return (
    <>
      <Title />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
