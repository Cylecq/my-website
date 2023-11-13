import BgParticles from "../components/BgParticles";
import ChevronDown from "../../../../public/svg/chevron-down.svg";
import Image from "next/image";

type Props = {
  titleDict: {
    title: string;
    subtitle: string;
    button: string;
  };
};

function Title({ titleDict }: Props) {
  return (
    <section
      id="title"
      className="h-screen flex flex-col justify-center items-center"
    >
      <BgParticles />
      <div className="bg-primary py-6 px-2 flex flex-col gap-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <h1 className="font-display text-6xl bg-primary w-[230px] rounded-3xl z-10">
          {titleDict.title}
        </h1>
        <p className="text-2xl bg-primary w-[165px] rounded-3xl z-10">
          {titleDict.subtitle}
        </p>
      </div>
      <div className="absolute bottom-20">
        <button className="relative h-[50px] w-52 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-primary after:duration-500 hover:text-black hover:shadow-primary hover:before:h-2/4 hover:after:h-2/4 hover:border-black">
          <span className="relative z-10 flex items-center justify-center gap-4">
            <Image
              src={ChevronDown}
              alt="Chevron Down"
              height={15}
              width={15}
            />
            {titleDict.button}
            <Image
              src={ChevronDown}
              alt="Chevron Down"
              height={15}
              width={15}
            />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Title;
