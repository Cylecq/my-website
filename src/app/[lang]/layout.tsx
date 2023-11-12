import "./globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/i18n.config";
import Header from "./components/Header";

interface Props {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang}>
      <body className="font-body">
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
