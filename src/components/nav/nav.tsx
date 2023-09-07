import React, { useState } from 'react';
import './nav.css';
import { IoHome } from 'react-icons/io5';
import { BiMessageSquareDetail, BiUser, BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

function Nav() {
  const [activeNav, setActiveNav] = useState<string>('#');
  return (
    // ? voir pour changer les "a" en "button" pour une question d'accessibilité
    <nav>
      <a
        href="#"
        role="button"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <IoHome />
      </a>
      <a
        href="#about"
        role="button"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        role="button"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        role="button"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        role="button"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
