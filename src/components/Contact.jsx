function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Contact Me</h2>

<div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:savaliyaamisha083@gmail.com"
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition"
          >
            <i className="fa-solid fa-envelope text-3xl text-blue-600 mb-4"></i>
            <p className="text-gray-700 dark:text-gray-300 break-words">
            savaliyaamisha083@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:7265925078"
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition"
          >
            <i className="fa-solid fa-phone text-3xl text-blue-600 mb-4"></i>
            <p className="text-gray-700 dark:text-gray-300">7265925078</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amisha-savaliya"
            target="_blank"
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition"
          >
            <i className="fa-brands fa-linkedin text-3xl text-blue-600 mb-4"></i>
            <p className="text-gray-700 dark:text-gray-300">LinkedIn Profile</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
