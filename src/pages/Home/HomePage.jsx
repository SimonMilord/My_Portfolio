import "./HomePage.scss";
import React, {useState, useEffect} from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import ProjectsList from "../../components/ProjectsList/projectsList";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";
import Skills from "../../components/Skills/skills";
import MobileNav from "../../components/MobileNav/mobileNav";
import { Element } from "react-scroll";

export default function HomePage(props) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    window.scrollTo(0, 0)
  },[], [theme])

  const handleTheme = async(value) => {
    await setTheme(value);
  }

  return (
    <div className="homepage">
      <Element name="header" id="header">
        <Header theme={theme} getTheme={handleTheme} defaultTheme={props.defaultTheme}/>
      </Element>
      <Hero />
      <Element name="skills" id="skills" className="section">
        <Skills theme={theme}/>
      </Element>
      <Element name="projects" id="projects" className="section">
        <ProjectsList />
      </Element>
      <Element name="contact" id="contact" className="section">
        <Contact />
      </Element>
      <Footer theme={theme}/>
      <MobileNav />
    </div>
  );
}