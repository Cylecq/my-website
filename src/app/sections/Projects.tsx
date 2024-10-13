import { projects } from "@/dictionaries/projects";
import ProjectItem from "../components/ProjectItem";

type Props = {};

const Projects: React.FC<Props> = () => {
  return (
    <section
      id="projects"
      className="h-screen w-[90%] mx-auto flex flex-col gap-2 justify-center items-center sm:w-4/5 lg:w-[800px]"
    >
      <div className="w-full flex items-end justify-start">
        <h2 className="text-2xl font-display px-4">Mes Projets</h2>
      </div>
      <div className="join join-vertical w-full border border-primary shadow-inner">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
