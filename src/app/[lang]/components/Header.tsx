import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./LocalSwitcher";

interface Props {
  lang: Locale;
}

async function Header({ lang }: Props) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}

export default Header;
