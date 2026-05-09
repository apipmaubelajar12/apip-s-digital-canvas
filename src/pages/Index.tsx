import { useEffect } from "react";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Skills from "@/components/Skills.jsx";
import Projects from "@/components/Projects.jsx";
import Gallery from "@/components/Gallery.jsx";
import Journey from "@/components/Journey.jsx";
import Testimonial from "@/components/Testimonial.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";
import "@/portfolio.css";

const Index = () => {
  useEffect(() => {
    document.title = "Muhammad Afif Hikam — Portfolio";
    document.body.classList.add("portfolio-body");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      document.body.classList.remove("portfolio-body");
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Journey />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
