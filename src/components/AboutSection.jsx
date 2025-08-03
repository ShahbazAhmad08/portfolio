import Section from "./Section";
import { motion } from "framer-motion";
const AboutSection = ({ summary }) => (
  <Section id="about" title="About Me">
    <motion.p
      className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {summary}
    </motion.p>
  </Section>
);
export default AboutSection;
