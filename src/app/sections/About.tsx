import React from "react";

function About() {
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center sm:w-4/5 sm:mx-auto lg:w-3/5 lg:mx-auto xl:w-2/5 xl:mx-auto"
    >
      <div className="bg-white w-11/12 py-4 px-2 z-10 border border-primary shadow-inner">
        <h2 className="font-display text-2xl mb-2">À propos</h2>
        <p>
          Développeur web junior passionné par la technologie, j&apos;ai
          récemment fait le saut d&apos;une reconversion professionnelle. Mon
          envie d&apos;apprendre et ma soif à résoudre des problèmes complexes
          me motivent à créer des expériences web innovantes.
        </p>
      </div>
    </section>
  );
}

export default About;
