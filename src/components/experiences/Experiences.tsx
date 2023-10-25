import './experiences.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import AVTR1 from '../../assets/Oclock.png';
import AVTR2 from '../../assets/logo-Police.png';
import AVTR3 from '../../assets/logo-Carrefour.png';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const data = [
  {
    id: '1',
    avatar: AVTR1,
    name: "O'Clock (Février-Août 2023)",
    review:
      "Formation Intensive en développement web spécialisé en Javascript, d'une durée de 798 heures. J'ai eu l'opportunité de travailler sur une variété de projets concrets, y compris la création d'un réseau social en groupe, renforçant ainsi mes compétences en travail d'équipe et en résolution de problèmes.",
  },
  {
    id: '2',
    avatar: AVTR2,
    name: 'Police Nationale (2018-Actuellement)',
    review:
      "En tant que Fonctionnaire de Police,   j'ai eu l'opportunité de travailler dans de nombreuses branches et de vivre de nombreuses expériences. De la Police secours vers du judiciaire en passant par CRS, mes fonctions m'ont doté de compétences essentielles telles que la gestion du stress, la résolution de problèmes, la communication efficace et l'éthique professionnelle.",
  },
  {
    id: '3',
    avatar: AVTR3,
    name: 'Carrefour (2014-2017) ',
    review:
      "Mon expérience en tant qu'employé polyvalent chez Carrefour m'a permis de travailler dans de nombreux domaines différents (caisse, comptabilité, boucherie, boulangerie), renforçant ainsi ma polyvalence. Cette expérience a été une opportunité précieuse pour développer mes compétences en gestion du temps, service clientèle et en travail d'équipe.",
  },
];

function Experiences() {
  return (
    <section id="testimonials">
      <h5>À propos de mes</h5>
      <h2>Expériences</h2>

      <Swiper
        style={{ width: '23rem', height: '25rem' }}
        effect="cube"
        grabCursor
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 50,
          shadowScale: 0.94,
        }}
        pagination
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {data.map(({ id, avatar, name, review }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Experiences;
