"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Skill = {
  src: string;
  alt: string;
  name: string;
};

type Props = {
  category: string;
  skills: Skill[];
};

function SkillCard({ category, skills }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill>({
    src: "",
    alt: "",
    name: "",
  });

  const handleClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setOpen(true);
    setTimeout(() => {
      setSelectedSkill({ src: "", alt: "", name: "" });
      setOpen(false);
    }, 2000);
  };

  return (
    <div
      key={category}
      className="h-[25%] border w-11/12 bg-white border-primary shadow-inner z-10"
    >
      <div className={`${open ? "h-0" : "h-full"} transition-all duration-300`}>
        <div className="flex justify-center items-center h-[30%]">
          <h3
            className={`${
              open ? "opacity-0" : "opacity-100"
            } text-2xl transition-all duration-1000`}
          >
            {open ? "" : category}
          </h3>
        </div>
        <div
          className={`${
            open ? "hidden" : "flex"
          }  justify-around w-full h-[70%]`}
        >
          {skills.map((skill, index) => (
            <button key={index} onClick={() => handleClick(skill)}>
              <Image src={skill.src} alt={skill.alt} height={40} width={40} />
            </button>
          ))}
        </div>
      </div>
      <div
        className={`${
          open ? "h-full" : "h-0"
        } bg-primary transition-all duration-300`}
      >
        <div className="flex justify-center items-center h-[30%]">
          <h3
            className={`${
              open ? "opacity-100" : "opacity-0"
            } text-2xl transition-all duration-1000`}
          >
            {selectedSkill.name}
          </h3>
        </div>
        <div
          className={`${
            open ? "flex" : "hidden"
          } justify-center items-center w-full h-[70%]`}
        >
          <div className="bg-white rounded-full p-3">
            <Image
              src={selectedSkill.src}
              alt={selectedSkill.alt}
              height={70}
              width={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;