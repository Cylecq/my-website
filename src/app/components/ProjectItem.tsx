import Image from "next/image";
import Link from "next/link";

import { Project } from "@/dictionaries/projects";

import outsideSVG from "../../../public/svg/outside.svg";
import githubSVG from "../../../public/svg/github.svg";

const TechnologyBadges: React.FC<{ technologies: string[] }> = ({
  technologies,
}) => (
  <div className="flex flex-wrap gap-2">
    {technologies.map((technology) => (
      <div key={technology} className="badge border border-primary bg-primary">
        {technology}
      </div>
    ))}
  </div>
);

const ProjectLinks: React.FC<{ github?: string; href?: string }> = ({
  github,
  href,
}) => (
  <div className="flex gap-8 justify-center lg:justify-start">
    {github && (
      <Link href={github} target="_blank">
        <Image src={githubSVG} alt="GitHub" width={30} height={30} />
      </Link>
    )}
    {href && (
      <Link href={href} target="_blank">
        <Image src={outsideSVG} alt="website link" width={30} height={30} />
      </Link>
    )}
  </div>
);

const ProjectDetails: React.FC<{ project: Project }> = ({ project }) => (
  <div className="lg:w-2/3 flex flex-col items-center lg:items-start gap-4">
    <p>{project.description}</p>
    <TechnologyBadges technologies={project.technologies} />
    <ProjectLinks github={project.github} href={project.href} />
  </div>
);

const ProjectImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="lg:w-1/3">
    <Image
      src={src}
      alt={alt}
      width={300}
      height={200}
      className="w-full h-auto"
    />
  </div>
);

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => (
  <div className="collapse collapse-arrow join-item border-base-300 border bg-white">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium flex items-center gap-2 py-2 px-4">
      <Image src={project.icon} alt={project.name} width={30} height={30} />
      {project.name}
    </div>
    <div className="collapse-content">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 py-6 px-4">
        <ProjectImage src={project.imgSrc} alt={project.name} />
        <ProjectDetails project={project} />
      </div>
    </div>
  </div>
);

export default ProjectItem;
