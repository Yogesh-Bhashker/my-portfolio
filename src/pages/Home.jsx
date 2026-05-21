import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";

const Home = () => {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Certifications />
      <Contact />

      <Footer />
    </main>
  );
};

export default Home;