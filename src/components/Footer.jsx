function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 transition-colors duration-500">

      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

          <div>
            <h2 className="text-xl font-bold text-blue-600">
              Amisha Savaliya
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Full Stack Developer | React | Node | MySQL
            </p>
          </div>

          <div className="flex gap-6 text-xl">

            <a
              href="https://github.com/amisha-savaliya"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/amisha-savaliya-"
              target="_blank"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

          <a
  href="mailto:savaliyaamisha083@gmail.com?subject=Portfolio Contact&body=Hello Amisha, I saw your portfolio."
  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
>
  <i className="fa-solid fa-envelope"></i>
</a>

          </div>

        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">

          © {new Date().getFullYear()} Amisha Savaliya. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;