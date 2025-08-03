import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-purple-400 transition-colors duration-300 flex flex-col justify-between transform hover:-translate-y-1"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div>
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
        {project.name}
      </h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-md"
        >
          <Link size={16} /> Live
        </a>
      )}
      {project.liveLinkUser && (
        <a
          href={project.liveLinkUser}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-md"
        >
          <Link size={16} /> User
        </a>
      )}
      {project.liveLinkAdmin && (
        <a
          href={project.liveLinkAdmin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-md"
        >
          <Link size={16} /> Admin
        </a>
      )}
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-md"
        >
          <Github size={16} /> GitHub
        </a>
      )}
    </div>
  </motion.div>
);
export default ProjectCard;
