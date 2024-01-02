import React from 'react';
import './header.css';
import { TiArrowDownOutline } from 'react-icons/ti';
import CTA from './CTA';
import ME from '../../assets/me_bg.png';
import HeaderSocials from './HeaderSocials';

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bienvenue sur mon site!!</h5>
        <h1>Maxime Malandain</h1>
        <h5 className="text-light">Développeur Javascript Junior</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          <TiArrowDownOutline className="myAnim" />
        </a>
      </div>
    </header>
  );
};

export default header;
