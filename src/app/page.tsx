import { useTranslations } from "next-intl";
import { LocaleSwitch } from "@/components/locale-switch";
import { H1 } from "@/components/ui/typography";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <H1>{t("title")}</H1>
        <LocaleSwitch />
      </main>
    </div>
  );
}
