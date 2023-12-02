import Image from 'next/image';
import React from 'react'

type Props = {}

function CV({}: Props) {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="bg-white w-11/12 py-4 px-2 z-10 border border-primary shadow-inner flex flex-col justify-center items-center gap-10">
        <h2 className="font-display text-2xl mb-2">CV</h2>
        <button className="relative h-[50px] w-52 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-primary after:duration-500 hover:text-black hover:shadow-primary hover:before:h-2/4 hover:after:h-2/4 hover:border-black">
          <span className="relative z-10 flex items-center justify-center gap-4">
            Download
          </span>
        </button>
      </div>
    </section>
  );
}

export default CV