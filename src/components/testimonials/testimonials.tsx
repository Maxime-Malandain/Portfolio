import React from 'react';
import './testimonials.css';
import { v4 as uuidv4 } from 'uuid'; // ? overkill d'importez uuid?
import AVTR1 from '../../assets/Oclock.png';
import AVTR2 from '../../assets/ENP.png';
import AVTR3 from '../../assets/Carrefour.png';

const data = [
  {
    id: uuidv4(),
    avatar: AVTR1,
    name: 'OClock',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit aut maxime delectus, quo mollitia numquam quis sequi alias aspernatur, quos totam assumenda? Totam inventore voluptas reiciendis reprehenderit voluptatum optio.',
  },
  {
    id: uuidv4(),
    avatar: AVTR2,
    name: 'ENP',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit aut maxime delectus, quo mollitia numquam quis sequi alias aspernatur, quos totam assumenda? Totam inventore voluptas reiciendis reprehenderit voluptatum optio.',
  },
  {
    id: uuidv4(),
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

      <div className="container testimonials__container">
        {data.map(({ id, avatar, name, review }) => (
          <article key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
