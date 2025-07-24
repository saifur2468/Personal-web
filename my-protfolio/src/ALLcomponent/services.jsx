import React from "react";
import { FaCode, FaServer, FaPencilRuler } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-4xl text-indigo-600 mb-4" />,
    description:
      "Building modern, responsive, and high-performance user interfaces with React, Tailwind CSS, and JavaScript.",
  },
  {
    title: "MERN Stack Development",
    icon: <FaServer className="text-4xl text-indigo-600 mb-4" />,
    description:
      "Creating full-stack applications using MongoDB, Express.js, React, and Node.js with secure and scalable architecture.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler className="text-4xl text-indigo-600 mb-4" />,
    description:
      "Designing intuitive and engaging user experiences with clean, modern UI principles using Figma and design tools.",
  },
];

const MyServices = () => {
  return (
    <section id="service" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          I offer a range of services to help bring your ideas to life with modern technology and great design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-100 to-white shadow-md p-8 rounded-2xl border hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-2 group-hover:text-indigo-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
