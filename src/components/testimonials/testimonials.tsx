import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import AVTR1 from '../../assets/Oclock.png';
import AVTR2 from '../../assets/ENP.png';
import AVTR3 from '../../assets/Carrefour.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//! voir peut être remettre uuid for ID
const data = [
  {
    id: '1',
    avatar: AVTR1,
    name: 'OClock',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit aut maxime delectus, quo mollitia numquam quis sequi alias aspernatur, quos totam assumenda? Totam inventore voluptas reiciendis reprehenderit voluptatum optio.',
  },
  {
    id: '2',
    avatar: AVTR2,
    name: 'ENP',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit aut maxime delectus, quo mollitia numquam quis sequi alias aspernatur, quos totam assumenda? Totam inventore voluptas reiciendis reprehenderit voluptatum optio.',
  },
  {
    id: '3',
    avatar: AVTR3,
    name: 'Carrefour',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit aut maxime delectus, quo mollitia numquam quis sequi alias aspernatur, quos totam assumenda? Totam inventore voluptas reiciendis reprehenderit voluptatum optio.',
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}
        initialSlide={1}
        spaceBetween={30}
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

export default Testimonials;
