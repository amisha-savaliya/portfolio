import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 pt-16 pb-8 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-purple-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Name + Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Amisha Savaliya
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {" "}
              Full Stack Developer | React | Node | Express{" "}
            </p>

            <p className="text-gray-600 dark:text-gray-400 mt-3">
              Building modern web experiences with React & Node.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-6 text-xl"
          >
            {/* GitHub */}
            <a
              href="https://github.com/amisha-savaliya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md 
              hover:shadow-xl hover:scale-110 transition duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/amisha-savaliya-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md 
              hover:shadow-xl hover:scale-110 transition duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            {/* Email */}
            <a
              href="mailto:savaliyaamisha083@gmail.com?subject=Portfolio Contact&body=Hello Amisha, I saw your portfolio."
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md 
              hover:shadow-xl hover:scale-110 transition duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-10"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Amisha Savaliya.All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
