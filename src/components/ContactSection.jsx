import { Github, Link, Mail } from "lucide-react";
import Section from "./Section";
import { motion } from "framer-motion";
const ContactSection = ({ contact }) => (
  <Section id="contact" title="Contact">
    <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-2xl mx-auto">
      <motion.p
        className="text-lg md:text-xl text-center text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Feel free to get in touch with me. I'm always open to discussing new
        projects, creative ideas, or opportunities to be part of your visions.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-6">
        <motion.a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-3 bg-teal-500 text-gray-950 p-4 rounded-full hover:bg-teal-600 transition-colors duration-300 shadow-lg transform hover:-translate-y-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Mail size={24} />
          <span>{contact.email}</span>
        </motion.a>
        <motion.a
          href={`https://github.com/${contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-500 text-gray-950 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg transform hover:-translate-y-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Github size={24} />
          <span>{contact.github}</span>
        </motion.a>
        <motion.a
          href={contact.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-500 text-gray-950 p-4 rounded-full hover:bg-gray-600 transition-colors duration-300 shadow-lg transform hover:-translate-y-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Link size={24} />
          <span>Portfolio</span>
        </motion.a>
      </div>
    </div>
  </Section>
);
export default ContactSection;
