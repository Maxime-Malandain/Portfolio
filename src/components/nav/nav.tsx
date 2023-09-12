import React, { useState } from 'react';
import './nav.css';
import { BsHouseDoor } from 'react-icons/bs';
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
        <BsHouseDoor />
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
        href="#hardskills"
        role="button"
        onClick={() => setActiveNav('#hardskills')}
        className={activeNav === '#hardskills' ? 'active' : ''}
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
