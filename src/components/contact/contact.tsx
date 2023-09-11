import React, { useRef } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
// TODO rajouter + tard emailvalidator

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }
    try {
      emailjs.sendForm(
        'service_gixqht9',
        'template_kcqgl89',
        form.current,
        'cq2GIfVctwjyghxdn'
      );
      // TODO Voir pour ne plus faire un alert mais qqch de plus propre
      if (form.current) form.current.reset();
      alert('Votre message a bien été envoyé');
    } catch (error) {
      alert("Une erreur est survenue lors de l'envoie de l'e-mail");
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>m.malandain-dev@ikmail.com</h5>
            <a href="mailto:m.malandain-dev@ikmail.com"> Send Email</a>
          </article>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
