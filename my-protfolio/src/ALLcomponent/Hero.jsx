import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import pic from "../assets/441345254_477581964606487_2823494170499752054_n.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center py-10"
    >
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Image Section */}
        <motion.img
          src={pic}
          alt="Saifur"
          className="w-44 sm:w-60 md:w-72 lg:w-80 rounded-3xl shadow-2xl border-4 border-white object-cover"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text Section */}
        <motion.div
          className="text-center lg:text-left max-w-xl"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-snug">
            Hi, I'm{" "}
            <span className="text-indigo-600 underline decoration-indigo-400 decoration-4">
              MD Saifur Rahman
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-indigo-700 font-semibold mb-6 min-h-[3rem]">
            <Typewriter
              words={[
                "Full Stack Web Developer",
                "React & Node.js Enthusiast",
                "MongoDB & Express Expert",
                "API & Backend Builder",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            Crafting efficient, scalable, and beautiful web applications with
            the latest technologies and best practices.
          </p>

          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-70}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-md transition-transform hover:scale-105"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
