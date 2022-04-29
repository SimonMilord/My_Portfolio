import "./HomePage.scss";
import React, {useState, useEffect} from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import ProjectsList from "../../components/ProjectsList/projectsList";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";
import Skills from "../../components/Skills/skills";
import { Element } from "react-scroll";

export default function HomePage(props) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme !== theme) {
      setTheme(currentTheme);
    }
  }, [theme])
  const handleTheme = (value) => {
    setTheme(value);
  }
  console.log("homepage:" + theme);

  return (
    <div className="homepage">
      <Element name="header" id="header">
        <Header getTheme={handleTheme} theme={theme}/>
      </Element>
      <Hero />
      <Element name="about" id="about" className="section">
        <About />
      </Element>
        <Skills />
      <Element name="projects" id="projects" className="section">
        <ProjectsList />
      </Element>
      <Element name="contact" id="contact" className="section">
        <Contact />
      </Element>
      <Footer theme={theme}/>
    </div>
  );
}
