import BgParticles from "../components/BgParticles";

type Props = {
  titleDict: {
    title: string;
  };
};

function Title({ titleDict }: Props) {
  return (
    <section
      id="title"
      className="h-screen flex flex-col justify-center items-center"
    >
      <BgParticles />
      <h1>{titleDict.title}</h1>
    </section>
  );
}

export default Title;
