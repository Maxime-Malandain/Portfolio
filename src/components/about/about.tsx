import React from 'react';
import './about.css';
// TODO pour plus tard
import ME from '../../assets/me_bg.png';

function About() {
  return (
    <section id="about">
      <h5>Que savoir</h5>
      <h2>À propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Mon parcours professionnel m'a conduit à des années d'engagement au
            sein des forces de police, une carrière que j'ai abordée avec
            passion et dévouement. En tant que policier, j'ai eu l'opportunité
            de servir les citoyens, de faire preuve de leadership et de prendre
            des décisions cruciales dans des situations complexes.
          </p>
          <p>
            {' '}
            Cependant, au fil des années, une deuxième passion a émergé :
            l'informatique. Mon intérêt pour le monde de l'informatique et du
            développement web est devenu de plus en plus évident au fil du
            temps. Les aspects fascinants de la programmation, de la création
            d'applications et de la résolution de problèmes techniques m'ont
            toujours attiré. C'est ainsi que j'ai décidé d'explorer cette
            passion naissante et d'embrasser une nouvelle carrière en tant que
            développeur web.
          </p>
          <span>Suite à une formation intensive je suis en capacité de :</span>
          <p>
            <ul>
              Développer la partie front-end d'une application web ou web mobile
              en intégrant les recommandations de sécurité.
              <li>Maqueter une application</li>
              <li>
                Raliser une interface utilisateur web statique et adaptable
              </li>
              <li>Développer une interface utilisateur web dynamique</li>
            </ul>{' '}
            <ul>
              Développer la partie back-end d'une application web ou web mobile
              en intégrant les recommandations de sécurité
              <li>Créer une base de données</li>
              <li>Développer les composants d’accès aux données</li>
              <li>
                Développer la partie back-end d’une application web ou web
                mobile
              </li>
            </ul>
            <p>
              Ces compétences combinées en développement front-end et back-end
              me permettent de concevoir des applications web complètes et
              fonctionnelles, tout en respectant les normes de sécurité et en
              offrant une expérience utilisateur optimale. Je suis impatient de
              mettre en pratique ces compétences dans ma nouvelle carrière de
              développeur web et de contribuer de manière significative à des
              projets innovants.
            </p>
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
