import React from 'react';
import './about.css';
import { FiAward, FiUsers } from 'react-icons/fi';
import { PiFolderNotchOpenDuotone } from 'react-icons/pi';
import ME from '../../assets/me-background.png';

function About() {
  return (
    <section id="about">
      <h5>A savoir</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <PiFolderNotchOpenDuotone className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem
            facere explicabo nam architecto voluptates sit suscipit nemo
            provident aspernatur, natus accusantium hic voluptate eum commodi
            consequuntur ut inventore officia.
          </p>

          <a href="#contact" className="btn btn-primary">
            Parlons en!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
