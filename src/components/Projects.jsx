import React from "react";

function Projects() {
  const projects = [
    {
      title: "Blog Management System",
      tech: "React, Node, Express, MySQL",
      link: "https://github.com/amisha-savaliya/blog-platform",
    },
    {
      title: "E-Commerce UI",
      tech: "React, Bootstrap, React Router",
      link: "https://github.com/amisha-savaliya/ecommerce-ui-react",
    },
    {
      title: "School Management System",
      tech: "HTML, CSS, JS, PHP",
      link: "",
    },
    {
      title: "Furniture Management System",
      tech: "ASP.NET, SQL Server",
      link: "",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        My Projects
      </h2>

      {/* 2 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 dark:border-gray-700"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-indigo-500 transition">
              {project.title}
            </h3>

            {/* Tech */}
            <p className="text-gray-500 mb-6">{project.tech}</p>

            {/* Button */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
              >
                View Project →
              </a>
            ) : (
              <span className=" inline-block px-5 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition">
               No Data
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;