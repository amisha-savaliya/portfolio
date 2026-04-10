import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative text-center py-24 md:py-36 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-400 opacity-20 rounded-full blur-3xl"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >

        {/* Name */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Amisha Savaliya
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto"
        >
          I build modern, scalable web applications using React, Node & Express.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col sm:flex-row justify-center gap-5 mt-10"
        >

          {/* View Resume */}
          <a
            href="/portfolio/Amisha_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold 
            shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            📄 View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/portfolio/resume.pdf"
            download
            className="px-7 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold 
            hover:bg-gray-800 hover:text-white hover:scale-105 transition duration-300"
          >
            ⬇ Download Resume
          </a>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-16 text-gray-400"
        >
          ↓ Scroll Down
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Hero;