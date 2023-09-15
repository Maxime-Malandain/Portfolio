import React from 'react';
import './hardskills.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function HardSkills() {
  return (
    <section id="hardskills">
      <h5>Quelles sont mes compétences?</h5>
      <h2>Hard Skills</h2>

      <div className="container hardskills__container">
        <div className="hardskills__frontend">
          <h3>Développement Frontend</h3>
          <div className="hardskills__content">
            <article className="hardskills__details">
              <BsPatchCheckFill className="hardskills__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="hardskills__details">
              <BsPatchCheckFill className="hardskills__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="hardskills__details">
              <BsPatchCheckFill className="hardskills__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="hardskills__details">
              <BsPatchCheckFill className="hardskills__details-icon" />
              <div>
                <h4>React / Redux</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="hardskills__details">
              <BsPatchCheckFill className="hardskills__details-icon" />
              <div>
                <h4>SCSS (SASS)</h4>
                <small className="text-light">Bonnes notions</small>
              </div>
            </article>
            <article className="hardskills__details">
              <BsPatchCheckFill className="hardskills__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Bonnes notions</small>
              </div>
            </article>
          </div>
        </div>
        <div className="hardskills__backend">
          <h3>Développement Backend</h3>
          <div className="hardskills__content">
            <article className="hardskills__details">
              <BsPatchCheckFill className="hardskills__details-icon" />
              <div>
                <h4>NodeJS / Express</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="hardskills__details">
              <BsPatchCheckFill className="hardskills__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Bonnes notions</small>
              </div>
            </article>
            <article className="hardskills__details">
              <BsPatchCheckFill className="hardskills__details-icon" />
              <div>
                <h4>Sequelize</h4>
                <small className="text-light">Bonnes notions</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardSkills;
