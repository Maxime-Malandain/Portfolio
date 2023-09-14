import React from 'react';
import CV from '../../assets/CV-incode.png';

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Téléchargement CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Pour me contacter
      </a>
    </div>
  );
}

export default CTA;
