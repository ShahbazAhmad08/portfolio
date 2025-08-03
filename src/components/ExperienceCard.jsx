import { motion } from "framer-motion";
const ExperienceCard = ({ job }) => (
  <motion.div
    className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-blue-400 transition-colors duration-300 transform hover:scale-105"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        {job.title}
      </h3>
      <p className="text-gray-400 text-sm mt-1 md:mt-0">{job.duration}</p>
    </div>
    <p className="text-lg text-gray-300 mb-2 font-medium">{job.company}</p>
    <ul className="list-disc list-inside space-y-1 text-gray-400">
      {job.description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </motion.div>
);

export default ExperienceCard;
