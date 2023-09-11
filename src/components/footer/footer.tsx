import React from 'react';
import './footer.css';
import { BsGithub } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';

function Footer() {
  return (
    <footer>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="footer__logo">
        Maxime Malandain
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/maxime-mld-1a4ab428b/"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedin />
        </a>
        <a
          href="https://github.com/Maxime-Malandain"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small> © 2023 Maxime Malandain. All Rigths Reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
