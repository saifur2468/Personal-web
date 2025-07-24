import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Skills", link: "skills" },
  { name: "Service", link: "service" }, // ঠিক করলাম এখানে
  { name: "Project", link: "project" },
  { name: "Contact", link: "contact" },
];


  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600 select-none cursor-default">
          Saifur
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 font-medium text-gray-700">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                activeClass="text-blue-600 border-b-2 border-blue-600 font-semibold"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer py-2 hover:text-blue-600 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-3xl text-blue-600 cursor-pointer select-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white shadow-md rounded-b-xl"
          >
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="border-b border-gray-200 last:border-none"
              >
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  activeClass="text-blue-600 font-semibold"
                  className="block py-4 px-6 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
