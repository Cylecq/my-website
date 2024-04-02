import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import type { Metadata } from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Cyril Leclercq - Développeur Web Fullstack",
  description:
    "Portfolio de Cyril Leclercq, développeur web fullstack. Typescript, React, Next.js, Node.js...",
  authors: [{ name: "Cyril Leclercq" }],
  creator: "Cyril Leclercq",
  keywords: [
    "Cyril Leclercq",
    "portfolio",
    "développeur web",
    "fullstack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Express",
    "GraphQL",
    "Apollo",
  ],
  openGraph: {
    title: "Cyril Leclercq - Développeur Web Fullstack",
    description:
      "Portfolio de Cyril Leclercq, développeur web fullstack. Typescript, React, Next.js, Node.js...",
    type: "website",
    url: "https://cyril-leclercq.vercel.app", // TODO: Change this
    siteName: "Cyril Leclercq",
    images: [
      {
        url: "https://cyril-leclercq.vercel.app/images/og-image.png", // TODO: Change this
        width: 1200,
        height: 630,
        alt: "Cyril Leclercq",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyril Leclercq - Développeur Web Fullstack",
    description:
      "Portfolio de Cyril Leclercq, développeur web fullstack. Typescript, React, Next.js, Node.js...",
    images: [
      "https://cyril-leclercq.vercel.app/images/og-image.png", // TODO: Change this
    ],
  },
};

function RootLayout({ children }: Props) {
  return (
    <html lang="fr">
      <body className="font-body text-black" id="top">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
