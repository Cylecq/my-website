import React from "react";

import react from "../../../public/svg/react.svg";
import reactNative from "../../../public/svg/react-native.svg";
import nextjs from "../../../public/svg/nextjs.svg";
import tailwind from "../../../public/svg/tailwind.svg";
import express from "../../../public/svg/express.svg";
import nodejs from "../../../public/svg/nodejs.svg";
import firebase from "../../../public/svg/firebase.svg";
import mysql from "../../../public/svg/mysql.svg";
import postgresql from "../../../public/svg/postgresql.svg";
import graphql from "../../../public/svg/graphql.svg";
import docker from "../../../public/svg/docker.svg";
import githubActions from "../../../public/svg/github-actions.svg";
import linux from "../../../public/svg/linux.svg";
import nginx from "../../../public/svg/nginx.svg";
import SkillCard from "../components/SkillCard";

type Skill = {
  src: string;
  alt: string;
  name: string;
};

const skillsData: Record<string, Skill[]> = {
  Frontend: [
    { src: react, alt: "react", name: "React" },
    { src: reactNative, alt: "react native", name: "React Native" },
    { src: nextjs, alt: "nextjs", name: "Next.js" },
    { src: tailwind, alt: "tailwind", name: "Tailwind" },
  ],
  Backend: [
    { src: nodejs, alt: "node js", name: "Node.js" },
    { src: express, alt: "express", name: "Express" },
    { src: graphql, alt: "graphql", name: "GraphQL" },
    { src: firebase, alt: "firebase", name: "Firebase" },
    { src: mysql, alt: "mysql", name: "MySQL" },
    { src: postgresql, alt: "postgresql", name: "PostgreSQL" },
  ],
  DevOps: [
    { src: docker, alt: "docker", name: "Docker" },
    { src: linux, alt: "linux", name: "Linux" },
    { src: nginx, alt: "nginx", name: "Nginx" },
    { src: githubActions, alt: "github actions", name: "GitHub Actions" },
  ],
};

function Skills() {
  return (
    <section
      id="skills"
      className="h-screen flex flex-col gap-2 justify-center items-center lg:w-4/5 lg:mx-auto xl:w-3/5 xl:mx-auto"
    >
      <div className="w-full flex items-end justify-start">
        <h2 className="text-2xl font-display px-4">Compétences</h2>
      </div>
      <div className="w-full h-[480px] flex flex-col gap-2 lg:flex-row lg:h-[280px] lg:gap-4 xl:gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCard key={category} category={category} skills={skills} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
