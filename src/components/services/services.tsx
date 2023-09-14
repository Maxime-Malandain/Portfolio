import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

function Services() {
  return (
    <section id="services">
      <h5>Et plus encore</h5>
      <h2>Autres informations</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Gestion du Stress / du temps</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Travail en Equipe / Communication</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Capacité d&apos;adaptation / respect des procédures</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Gestion de Projet et Outils</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Git , Visual Studio Code , Linux</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Méthode Agile , Scrum , Rédaction cahier des charges</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>MVC , Wireframes , Mocodo , User stories</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Langue et autres diplomes</h3>
          </div>

          <ul className="service__list">
            {' '}
            <li>
              <BiCheck className="service__list-icon" />
              <p>Développeur Web & Mobile, Bac+2 (examen 10/2023)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Anglais niveau technique</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>PSCI (secourisme)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Brevet Initiation Aéronautique</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
