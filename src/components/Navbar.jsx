import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (

    <nav className="flex justify-between items-center px-10 py-6 max-w-6xl mx-auto">
    {/* <nav className="bg-white dark:bg-gray-900 shadow transition-colors duration-500"> */}

      <h1 className="text-xl font-bold text-blue-600 hover:scale-105 transition">
        Amisha
      </h1>

      <div className="flex gap-8 items-center">

        <a href="#about" className="hover:text-blue-600 transition">
          About
        </a>

        <a href="#projects" className="hover:text-blue-600 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-blue-600 transition">
          Contact
        </a>

        <ThemeToggle/>

      </div>

    </nav>
  );
}

export default Navbar;