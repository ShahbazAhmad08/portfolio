import { FileText, Github, Link, Mail } from "lucide-react";
import Section from "./Section";
import { motion } from "framer-motion";
const HeroSection = ({ resumeData }) => (
  <Section id="hero" title="">
    <div className="flex flex-col items-center justify-center text-center -mt-16">
      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {resumeData.name}
      </motion.h1>
      <motion.p
        className="mt-4 text-xl md:text-2xl lg:text-3xl font-medium text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {resumeData.title}
      </motion.p>
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <a
          href={`mailto:${resumeData.contact.email}`}
          className="p-3 bg-teal-500 text-gray-950 rounded-full hover:bg-teal-600 transition-colors duration-300 shadow-lg"
        >
          <Mail size={24} />
        </a>
        <a
          href={`https://github.com/${resumeData.contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-500 text-gray-950 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg"
        >
          <Github size={24} />
        </a>
        <a
          href={resumeData.contact.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-500 text-gray-950 rounded-full hover:bg-gray-600 transition-colors duration-300 shadow-lg"
        >
          <Link size={24} />
        </a>
        {/* Placeholder for resume download link - replace with a real link */}
        <a
          href="/Shahbaz_Ahmad_Resume.pdf"
          download="Shahbaz_Ahmad_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-purple-500 text-gray-950 rounded-full hover:bg-purple-600 transition-colors duration-300 shadow-lg"
        >
          <FileText size={24} />
        </a>
      </motion.div>
    </div>
  </Section>
);
export default HeroSection;
