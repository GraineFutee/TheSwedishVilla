import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faVimeo } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="hero is-small is-dark is-bold">
      <div className="hero-body">
        <div className="has-text-centered">
          <FontAwesomeIcon
            icon={faInstagram}
            className="mb-5 has-text-primary mx-3 my-2 is-size-3"
          />
          <FontAwesomeIcon
            icon={faVimeo}
            className="mb-5 has-text-primary mx-3 my-2 is-size-3"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="mb-5 has-text-primary mx-3 my-2 is-size-3"
          />
          <p>&copy; 2020 The Swedish Villa</p>
        </div>
      </div>
    </section>
  );
}
