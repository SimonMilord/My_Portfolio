import "./HomePage.scss";
import React from "react";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import Projects from "../../components/Projects/projects";
import Contact from "../../components/Contact/contact";
import { Element } from "react-scroll";

export default function HomePage(props) {
  return (
    <div className="homepage">
      <Element name="header" id="header">
        <Header />
      </Element>
      <Hero />
      <Element name="about" id="about">
        <About />
      </Element>
      <Element name="projects" id="projects">
        <Projects />
      </Element>
      <Element name="contact" id="contact">
        <Contact />
      </Element>
    </div>
  );
}
