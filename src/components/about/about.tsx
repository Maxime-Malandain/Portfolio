import React from 'react';
import './about.css';
import { FiAward, FiUsers } from 'react-icons/fi';
import { PiFolderNotchOpenDuotone } from 'react-icons/pi';
import ME from '../../assets/me-background.png';

function About() {
  return (
    <section id="about">
      <h5>Que savoir</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
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
          </div> */}

          <p>
            En tant que développeur Frontend, je suis réactif, résolu et à
            l&apos;écoute. J&apos;ai la capacité de relever les défis et de
            mener chaque projet à bien pour atteindre les objectifs fixés.
          </p>
          <p>
            Ma grande faculté d&apos;adaptation me permet de m&apos;intégrer
            rapidement et de collaborer harmonieusement avec les membres de
            l&apos;équipe, favorisant ainsi une collaboration productive. Je
            suis également en veille perpétuelle, me permettant de rester
            constamment à jour sur les dernières tendances et les évolutions
            technologiques.{' '}
          </p>
          <p>
            Je suis disponible, hautement motivé et prêt à m&apos;adapter pour
            apprendre de nouveaux langages afin de répondre aux besoins présents
            et futurs de mon employeur.
          </p>
          <p>
            Je suis impatient de relever de nouveaux défis passionnants dans ce
            domaine en constante évolution.
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
