import { motion } from "framer-motion";

function Hero() {
  return (

    <section className="text-center py-20 md:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-500 px-6">

      <motion.h1
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="text-3xl md:text-5xl font-bold"
      >
        Hi, I'm Amisha Savaliya
      </motion.h1>

      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3}}
        className="text-gray-600 dark:text-gray-300 mt-4 text-sm md:text-lg"
      >
        Full Stack Developer | React | Node | MySQL
      </motion.p>

      {/* Resume Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

        <a
          href="/portfolio/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium 
          shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          📄 View Resume
        </a>

        <a
          href="/portfolio/resume.pdf"
          download
          className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-medium 
          hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition duration-300"
        >
          ⬇ Download Resume
        </a>

      </div>

    </section>
  );
}

export default Hero;