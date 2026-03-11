import { motion } from "framer-motion";

function Hero() {

  return (

    // <section className="text-center py-32 bg-gradient-to-b from-white to-gray-100">



    <section className="text-center py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">




      <motion.h1
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}
        className="text-5xl font-bold"
      >
        Hi, I'm Amisha Savaliya
      </motion.h1>

      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3}}
        className="text-gray-600 dark:text-gray-300 mt-4"
      >
        Full Stack Developer | React | Node | MySQL
      </motion.p>

      <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}
        className="mt-8 bg-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        View Projects
      </motion.button>

    </section>
  );
}

export default Hero;