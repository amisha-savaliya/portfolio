import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen transition-colors duration-500 flex flex-col">
   

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );

}

export default App;