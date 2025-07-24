import React from "react";
import Marquee from "react-fast-marquee";


const skills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Firebase", img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const MySkills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          These are the tools and technologies I use to build fast, responsive, and scalable web applications.
        </p>

        <Marquee pauseOnHover speed={50} gradient={false}>
          <div className="flex gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center w-32 h-32"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  title={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default MySkills;
