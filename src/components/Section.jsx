import { motion } from "framer-motion";
const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="min-h-screen py-16 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center relative z-10 overflow-hidden bg-gray-950 text-gray-200"
  >
    {/* Background gradient for a modern feel */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 opacity-50 z-0"></div>
    <div className="max-w-7xl w-full relative z-10">
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);
export default Section;
