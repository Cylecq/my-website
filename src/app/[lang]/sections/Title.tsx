import BgParticles from "../components/BgParticles";
import LearnMoreBtn from "../components/LearnMoreBtn";

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
        <LearnMoreBtn titleDict={titleDict} />
      </div>
    </section>
  );
}

export default Title;
