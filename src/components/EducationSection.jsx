import Section from "./Section";
import { motion } from "framer-motion";

const EducationSection = ({ certifications, education }) => (
  <Section id="education" title="Education & Certifications">
    <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto">
      {/* Education cards */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
          Education
        </h3>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-green-400 transition-colors duration-300 transform hover:scale-105"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-200">
                {edu.degree}
              </h4>
              <p className="text-gray-400 text-sm">{edu.duration}</p>
            </div>
            <p className="text-lg text-gray-300 font-medium">
              {edu.institution}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Certifications list */}
      <div className="space-y-4 mt-8">
        <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
          Certifications
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 text-center">
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              className="bg-gray-800 text-gray-300 py-3 px-6 rounded-full shadow-md border border-gray-700 hover:bg-green-500 hover:text-gray-950 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {cert}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);
export default EducationSection;
