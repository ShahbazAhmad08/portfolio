import { Award, Book, Briefcase, Code, Laptop, Rocket } from "lucide-react";
import Section from "./Section";
import SkillCard from "./SkillCard";

const SkillsSection = ({ skills }) => (
  <Section id="skills" title="Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <SkillCard
        title="Frontend"
        icon={<Code size={48} className="text-teal-400" />}
        skills={skills.frontend}
      />
      <SkillCard
        title="Backend"
        icon={<Laptop size={48} className="text-blue-400" />}
        skills={skills.backend}
      />
      <SkillCard
        title="Databases"
        icon={<Book size={48} className="text-purple-400" />}
        skills={skills.databases}
      />
      <SkillCard
        title="Tools & Platforms"
        icon={<Briefcase size={48} className="text-yellow-400" />}
        skills={skills.tools}
      />
      <SkillCard
        title="Others"
        icon={<Award size={48} className="text-red-400" />}
        skills={skills.others}
      />
      <SkillCard
        title="Currently Learning"
        icon={<Rocket size={48} className="text-green-400" />}
        skills={skills.learning}
      />
    </div>
  </Section>
);
export default SkillsSection;
