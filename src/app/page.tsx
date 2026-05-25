import { H1 } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <H1>Welcome to my website!</H1>
      </main>
    </div>
  );
}
