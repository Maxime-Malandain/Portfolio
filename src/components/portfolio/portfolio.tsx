import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/tok-tok.png';
import IMG2 from '../../assets/WOP.png';
import IMG3 from '../../assets/ID.png';
import DP from '../../assets/Dossier de Projet.pdf';

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Réalisations</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article key={1} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Tok-Tok" />
          </div>
          <h3>Tok-Tok (projet de fin d'étude)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Maxime-Malandain/Tok-Tok-Front"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Code Front
            </a>
            <a
              href={DP}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Dossier de Projet
            </a>

            <a
              href="https://github.com/Maxime-Malandain/Tok-Tok-Back"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Code Back
            </a>
          </div>
        </article>
        <article key={2} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Work in Progress" />
          </div>
          <h3>To Do List (en cours)</h3>
        </article>
        {/* <article key={3} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Dessin d'une ampoule" />
          </div>
          <h3>Autres idées (bientôt)</h3>
        </article> */}
      </div>
    </section>
  );
}

export default Portfolio;
