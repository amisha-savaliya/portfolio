import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (


    // <motion.nav
    //   initial={{ y: -60, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ duration: 0.6 }}
    //   className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50
    //   backdrop-blur-lg bg-white/70 dark:bg-gray-900/70
    //   border border-gray-200 dark:border-gray-700
    //   shadow-lg rounded-2xl px-6 py-3"
    // ></motion.nav>
    <nav className="bg-white dark:bg-gray-900 shadow px-6 py-4">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <h1 className="text-xl font-bold text-blue-600">
          Amisha Savaliya
        </h1>

     <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
          <li>
            <a href="#about" className="hover:text-blue-500 fs-4 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 fs-4 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 fs-4 transition">
              Contact
            </a>
          </li>
        </ul>

  <div className="flex items-center gap-4">

          {/* Mobile Menu Icon (optional) */}
          <div className="md:hidden text-xl cursor-pointer">
            ☰
          </div>

          <ThemeToggle />
        </div>

        {/* <ThemeToggle /> */}
      </div>
    </nav>
  );
}

export default Navbar;
