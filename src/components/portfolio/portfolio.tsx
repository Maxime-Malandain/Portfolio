import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/tok-tok.png';
import IMG2 from '../../assets/WOP.png';
import IMG3 from '../../assets/ID.png';

// TODO For later when I have another projects
// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'Tok-Tok',
//     github: 'https://github.com',
//     demo: 'https://github.com',
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: 'To Do List (en cours)',
//     github: 'https://github.com',
//     demo: 'https://github.com',
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: 'Autre idées (bientôt)',
//     github: 'https://github.com',
//     demo: 'https://github.com',
//   },
// ];
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
          <h3>Tok-Tok</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Maxime-Malandain/Tok-Tok_Front"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Code Front
            </a>
            <a
              href="https://github.com/Maxime-Malandain/Tok-Tok_Back"
              className="btn btn-primary"
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
        <article key={3} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Dessin d'une ampoule" />
          </div>
          <h3>Autre idées (bientôt)</h3>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;

/*
{data.map(({ id, image, title, github, demo }) => {
          return (
 <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article> */
