import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section id="project" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          A selection of my recent work. Click on any project to view it live.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-2xl font-bold">
                  Project {index + 1}
                </span>
              </div>

              {/* Project Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
