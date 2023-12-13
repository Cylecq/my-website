"use client";
import Image from "next/image";
import React from "react";
import scrollToSection from "@/utils/scrollToSection";
import ChevronDown from "../../../../public/svg/chevron-down.svg";

type Props = {
  titleDict: {
    title: string;
    subtitle: string;
    button: string;
  };
};

function LearnMoreBtn({ titleDict }: Props) {
  return (
    <button
      onClick={() => scrollToSection("#about")}
      className="relative h-[50px] w-52 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-primary after:duration-500 hover:text-black hover:shadow-primary hover:before:h-2/4 hover:after:h-2/4 hover:border-black"
    >
      <span className="relative z-10 flex items-center justify-center gap-4">
        <Image src={ChevronDown} alt="Chevron Down" height={15} width={15} />
        {titleDict.button}
        <Image src={ChevronDown} alt="Chevron Down" height={15} width={15} />
      </span>
    </button>
  );
}

export default LearnMoreBtn;
