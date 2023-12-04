import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Title from "./sections/Title";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

interface Props {
  params: {
    lang: Locale;
  };
}

async function Home({ params: { lang } }: Props) {
  const { page } = await getDictionary(lang);
  const { title, about, skills, contact } = page;

  return (
    <>
      <Title titleDict={title} />
      <About aboutDict={about} />
      <Skills skillsDict={skills} />
      <Contact contactDict={contact} />
    </>
  );
}

export default Home;
