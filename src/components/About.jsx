import { motion } from "framer-motion";

function About() {

const skills = [
  "🧠 Problem Solving",
  "🐞 Debugging",
  "✨ Clean Code",
  "🔗 API",
  "📱 Responsive UI",
  "⚛ React",
  "🟢 Node",
  "🚀 Express",
  "🗄 MySQL",
  "📦 Redux",
  "🔧 Git",
  "📚 OOP",
];
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Amisha Savaliya
              </span>
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              A passionate <span className="font-medium">Full Stack Developer</span> who loves building
              clean, modern and user-friendly web applications. I enjoy turning ideas into real,
              scalable digital products.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
              I specialize in <span className="font-medium">React.js</span> for frontend and{" "}
              <span className="font-medium">Node.js & Express</span> for backend development.
              My focus is on performance, responsive design, and writing maintainable code.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-gray-800 rounded-full text-sm">
                🚀 Fast Learner
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-gray-800 rounded-full text-sm">
                💡 Problem Solver
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-gray-800 rounded-full text-sm">
                🎯 Detail Oriented
              </span>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Skills Cards) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-5"
          >
          {skills.map((skill, index) => (
  <motion.div
    key={skill}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="group p-5 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md
    border border-gray-200 dark:border-gray-700 shadow-md 
    hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-300 text-center"
  >
    <p className="font-medium group-hover:text-blue-500 transition">
      {skill}
    </p>
  </motion.div>
))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;