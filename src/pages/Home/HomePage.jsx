import "./HomePage.scss";
import {useEffect} from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import ProjectsList from "../../components/ProjectsList/projectsList";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";
import Skills from "../../components/Skills/skills";
import MobileNav from "../../components/MobileNav/mobileNav";
import { Element } from "react-scroll";

export default function HomePage(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="homepage">
      <Element name="header" id="header">
        <Header />
      </Element>
      <Hero />
      <Element name="skills" id="skills" className="section">
        <Skills />
      </Element>
      <Element name="projects" id="projects" className="section">
        <ProjectsList />
      </Element>
      <Element name="contact" id="contact" className="section">
        <Contact />
      </Element>
      <Footer />
      <MobileNav />
    </div>
  );
}