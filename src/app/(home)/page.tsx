import { LocaleSwitch } from "@/components/locale-switch";
import { ThemeSwitch } from "@/components/theme-switch";
import { Hero } from "@/app/(home)/hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans w-full">
      <div className="w-full flex justify-end p-4">
        <ThemeSwitch />
      </div>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Hero />
      </main>
      <LocaleSwitch />
    </div>
  );
}
