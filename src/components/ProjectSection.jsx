import Section from "./Section";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ projects }) => (
  <Section id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </Section>
);
export default ProjectsSection;
