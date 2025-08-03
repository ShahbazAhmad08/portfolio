import { motion } from "framer-motion";
const SkillCard = ({ title, icon, skills }) => (
  <motion.div
    className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-teal-400 transition-colors duration-300 transform hover:-translate-y-2"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="flex items-center space-x-4 mb-4">
      {icon}
      <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
    </div>
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="bg-gray-800 text-gray-300 text-sm py-1 px-3 rounded-full hover:bg-teal-500 hover:text-gray-950 transition-colors duration-300"
        >
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);
export default SkillCard;
