import React from 'react'

type Props = {
  aboutDict: {
    title: string;
    description: string;
  }
}

function About({aboutDict}: Props) {
  return (
    <section id="about" className="h-screen flex justify-center items-center">
      <div className="bg-white w-11/12 py-4 px-2 z-10 border border-primary shadow-inner">
        <h2 className="font-display text-2xl mb-2">{aboutDict.title}</h2>
        <p>{aboutDict.description}</p>
      </div>
    </section>
  );
}

export default About