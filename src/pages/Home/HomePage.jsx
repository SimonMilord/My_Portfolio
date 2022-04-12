import './HomePage.scss';
import React from "react";
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import About from '../../components/About/about';
import Projects from '../../components/Projects/projects';
import Contact from '../../components/Contact/contact';
import Footer from '../../components/Footer/footer';
import MobileNav from '../../components/MobileNav/mobileNav';

function HomePage(props) {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* <Footer /> */}
      <MobileNav />
    </div>
  );
}

export default HomePage;
