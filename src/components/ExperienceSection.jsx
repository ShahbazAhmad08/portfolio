import Section from "./Section";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = ({ experience }) => (
  <Section id="experience" title="Experience">
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
      {experience.map((job, index) => (
        <ExperienceCard key={index} job={job} />
      ))}
    </div>
  </Section>
);
export default ExperienceSection;
