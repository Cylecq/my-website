import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

interface Props {
  params: {
    lang: Locale;
  };
}

async function Home({ params: { lang } }: Props) {
  const { page } = await getDictionary(lang);

  return (
    <section>
      <div>
        <h1 className="inline text-3xl font-display font-bold border-0 border-b-2 border-b-primary">
          {page.home.title}
        </h1>
        <p className="text-gray-500">{page.home.description}</p>
      </div>
    </section>
  );
}

export default Home;
