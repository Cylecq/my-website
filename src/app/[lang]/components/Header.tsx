import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import NavList from "./NavList";

interface Props {
  lang: Locale;
}

async function Header({ lang }: Props) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="bg-white z-50 fixed top-0 w-full shadow">
      <nav className="bg-white max-w-5xl mx-auto font-display p-6 flex items-center justify-between">
        <a href="top" className="flex" aria-label="Home Page">
          <span aria-hidden="true" className="text-lg lg:text-xl">
            Cyril{" "}
            <strong>
              L<span className="text-primary">.</span>
            </strong>
          </span>
        </a>
        <NavList navigation={navigation} />
      </nav>
    </header>
  );
}

export default Header;