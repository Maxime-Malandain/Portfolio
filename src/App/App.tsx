import React from 'react';
import Header from '../components/header/header';
import Nav from '../components/nav/nav';
import About from '../components/about/about';
import HardSkills from '../components/hard_skills/HardSkills';
import Services from '../components/services/services';
import Porfolio from '../components/portfolio/portfolio';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Experiences from '../components/experiences/Experiences';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <HardSkills />
      <Services />
      <Porfolio />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
