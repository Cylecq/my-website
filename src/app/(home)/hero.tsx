import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("HomePage.Hero");
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-muted-foreground">{t("hello")}</p>
      <h1 className="text-4xl font-bold">{t("name")}</h1>
      <p className="text-lg text-muted-foreground">{t("title")}</p>
      <p className="text-sm text-muted-foreground">{t("location")}</p>
    </div>
  );
}
