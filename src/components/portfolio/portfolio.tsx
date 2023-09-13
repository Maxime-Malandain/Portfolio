import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio-1.jpeg';
import IMG2 from '../../assets/work-in-progress-removebg-preview (2).png';
import IMG3 from '../../assets/IDEE-Afor (1).png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tok-Tok',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'To Do List (en cours)',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Autre idées (bientôt)',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Réalisations</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
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
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
