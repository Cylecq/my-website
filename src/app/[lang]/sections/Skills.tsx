import React from "react";
import Image from "next/image";

import react from "../../../../public/svg/react.svg";
import reactNative from "../../../../public/svg/react-native.svg";
import nextjs from "../../../../public/svg/nextjs.svg";
import tailwind from "../../../../public/svg/tailwind.svg";
import express from "../../../../public/svg/express.svg";
import nodejs from "../../../../public/svg/nodejs.svg";
import firebase from "../../../../public/svg/firebase.svg";
import mysql from "../../../../public/svg/mysql.svg";
import postgresql from "../../../../public/svg/postgresql.svg";
import graphql from "../../../../public/svg/graphql.svg";
import docker from "../../../../public/svg/docker.svg";
import githubActions from "../../../../public/svg/github-actions.svg";
import linux from "../../../../public/svg/linux.svg";
import nginx from "../../../../public/svg/nginx.svg";

type Skill = {
  src: string;
  alt: string;
};

const skillsData: Record<string, Skill[]> = {
  Frontend: [
    { src: react, alt: "react" },
    { src: reactNative, alt: "react native" },
    { src: nextjs, alt: "nextjs" },
    { src: tailwind, alt: "tailwind" },
  ],
  Backend: [
    { src: nodejs, alt: "node js" },
    { src: express, alt: "express" },
    { src: graphql, alt: "graphql" },
    { src: firebase, alt: "firebase" },
    { src: mysql, alt: "mysql" },
    { src: postgresql, alt: "postgresql" },
  ],
  DevOps: [
    { src: docker, alt: "docker" },
    { src: linux, alt: "linux" },
    { src: nginx, alt: "nginx" },
    { src: githubActions, alt: "github actions" },
  ],
};

type Props = {
  skillsDict: {
    title: string;
  };
};

function Skills({ skillsDict }: Props) {
  return (
    <section
      id="skills"
      className="h-screen flex flex-col gap-2 justify-center items-center border"
    >
      <div className="h-[25%] w-full flex items-end justify-start">
        <h2 className="text-2xl font-display px-4">{skillsDict.title}</h2>
      </div>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div
          key={category}
          className="h-[25%] border w-11/12 bg-white border-primary shadow-inner z-10"
        >
          <div className="h-[30%] flex justify-center items-center">
            <h3 className="text-xl">{category}</h3>
          </div>
          <div className="flex w-full h-[70%] justify-around">
            {skills.map((skill, index) => (
              <Image
                key={index}
                src={skill.src}
                alt={skill.alt}
                height={40}
                width={40}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
