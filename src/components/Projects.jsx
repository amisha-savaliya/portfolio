import React from "react";

function Projects() {

  const projects = [
    {
      title:"Blog Management System",
      tech:"React, Node, Express, MySQL"
    },
    {
      title:"School Management System",
      tech:"HTML, CSS, JS, PHP"
    },
    {
      title:"Furniture Management System",
      tech:"ASP.NET, SQL Server"
    }
  ];

  return (

    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">

      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project)=>(
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition"
          >

            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {project.tech}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;