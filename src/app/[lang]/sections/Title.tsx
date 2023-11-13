type Props = {
  titleDict: {
    title: string;
  };
};

function Title({ titleDict }: Props) {
  return (
    <section
      id="title"
      className="h-screen bg-primary flex flex-col justify-center items-center"
    >
      <h1>{titleDict.title}</h1>
    </section>
  );
}

export default Title;
