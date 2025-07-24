import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import img from '../assets/WhatsApp_Image_2025-07-24_at_8.46.44_PM-removebg-preview.png'
const AboutMe = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16" id="about">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-extrabold mb-12"
      >
        ABOUT <span className="text-yellow-500">ME</span>
        <div className="w-16 h-1 mx-auto  mt-2 rounded"></div>
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="border-4 border-yellow-500 rounded-lg overflow-hidden max-w-sm w-full"
        >
          <img
            src={img}
            alt="Oscar"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-gray-800"
        >
          <h3 className="text-3xl font-semibold mb-2">My Name Is Saifur </h3>
          <p className="text-gray-600 mb-6 font-medium">From Dhaka, Bangladesh</p>

          <p className="mb-6 leading-relaxed">
          I am a passionate web developer specializing in creating responsive and user-friendly websites. Skilled in JavaScript, React, and backend technologies, I love turning ideas into functional digital experiences. Always eager to learn and grow, I strive to deliver clean, efficient, and scalable code.

          </p>

          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, facilis! Magnam
            veniam eveniet quia aliquid voluptas nostrum aperiam ipsa iusto.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 text-gray-700">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-500 transition-colors duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-500 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-yellow-500 transition-colors duration-300">
              <FaPinterestP size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-500 transition-colors duration-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" aria-label="Dribbble" className="hover:text-yellow-500 transition-colors duration-300">
              <FaDribbble size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
