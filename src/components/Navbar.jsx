import ThemeToggle from "./ThemeToggle";
function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-6 py-4">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <h1 className="text-xl font-bold text-blue-600">
          Amisha Savaliya
        </h1>

        <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>


        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
