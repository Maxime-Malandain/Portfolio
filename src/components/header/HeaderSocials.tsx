import React from 'react';
import { GrLinkedin } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/maxime-mld/"
        target="_blank"
        rel="noreferrer"
      >
        <GrLinkedin />
      </a>
      <a
        href="https://github.com/Maxime-Malandain"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
