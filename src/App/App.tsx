import React from 'react';
import Header from '../components/header/header';
import Nav from '../components/nav/nav';
import About from '../components/about/about';
import Experience from '../components/experience/experience';
import Services from '../components/services/services';
import Porfolio from '../components/portfolio/portfolio';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Porfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
