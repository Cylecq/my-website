import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Title from "./sections/Title";
import About from "./sections/About";
import CV from "./sections/CV";

interface Props {
  params: {
    lang: Locale;
  };
}

async function Home({ params: { lang } }: Props) {
  const { page } = await getDictionary(lang);
  const { title, about } = page;

  return (
    <>
      <Title titleDict={title} />
      <About aboutDict={about} />
      <CV />
    </>
  );
}

export default Home;
