import React, { useRef } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    await emailjs.sendForm(
      'service_gixqht9',
      'template_kcqgl89',
      form.current,
      'cq2GIfVctwjyghxdn'
    );

    form.current.reset();
  };

  return (
    <section id="contact">
      <h5>Mon profil vous intéresse ?</h5>
      <h2>Contactez-moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>m.malandain-dev@ikmail.com</h5>
            <a href="mailto:m.malandain-dev@ikmail.com"> Envoyez un mail</a>
          </article>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <input type="text" name="name" placeholder="Votre nom" required />
          <input
            type="email"
            name="email"
            placeholder="Votre adresse mail"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Votre message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Envoyez le message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
