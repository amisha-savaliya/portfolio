import React from "react";
function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-600">
              Hi, I'm Amisha Savaliya
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer based in Ahmedabad. I enjoy
              building modern web applications and solving real world problems
              using clean and scalable code.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My main stack includes React, Node.js, Express and MySQL. I focus
              on creating responsive UI and efficient backend APIs.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition duration-300">
              Download Resume
            </button>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-5">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MySQL",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white p-5 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center font-medium dark:text-gray-600"
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
