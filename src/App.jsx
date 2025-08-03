import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";
import resumeData from "./resumeData";
const App = () => {
  const {
    name,
    experience,
    education,
    projects,
    certifications,
    contact,
    summary,
    skills,
  } = resumeData;
  const navLinks = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "education", name: "Education" },
    { id: "contact", name: "Contact" },
  ];
  return (
    <div className="bg-gray-950 text-white font-sans antialiased overflow-x-hidden">
      <Navbar name={name} links={navLinks} />
      <HeroSection resumeData={resumeData} />
      <AboutSection summary={summary} />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <EducationSection certifications={certifications} education={education} />
      <ContactSection contact={contact} />
      <Footer />
    </div>
  );
};
export default App;
