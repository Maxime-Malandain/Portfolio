import React from 'react';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import About from '../components/about/About';
import HardSkills from '../components/hard_skills/HardSkills';
import Services from '../components/services/Services';
import Porfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Testimonials from '../components/testimonials/testimonials';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <HardSkills />
      <Services />
      <Porfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
