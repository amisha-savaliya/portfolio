import { useState, useEffect } from "react";

function ThemeToggle() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [darkMode]);

  return (

    <button
      onClick={() => setDarkMode(!darkMode)}
      className="border px-4 py-2 rounded-lg hover:scale-105 transition"
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>

  );
}

export default ThemeToggle;