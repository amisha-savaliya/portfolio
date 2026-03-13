import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-500 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">

            <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
              Hi, I'm Amisha Savaliya
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              I am a passionate Full Stack Developer based in Ahmedabad. I enjoy
              building modern web applications and solving real world problems
              using clean and scalable code.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              My main stack includes React, Node.js, Express and MySQL. I focus
              on creating responsive UI and efficient backend APIs.
            </p>

            {/* <a
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition duration-300"
            >
              Download Resume
            </a> */}

          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

            {[
              "HTML 5",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MySQL",
              "Redux",
              "ASP.Net",
              "Basic Paython",
              "OOPs",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center font-medium"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;