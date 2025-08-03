import { useEffect, useState } from "react";
// Correctly import motion and AnimatePresence from framer-motion
import { motion, AnimatePresence } from "framer-motion";
// Assuming lucide-react is installed, import the icons
import { Menu, X } from "lucide-react";

const Navbar = ({ name, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/80 backdrop-blur-md shadow-lg rounded-b-xl"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
            >
              {name}
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 capitalize group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-2 rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={toggleMenu}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 rounded-md transition-colors duration-300 capitalize"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
