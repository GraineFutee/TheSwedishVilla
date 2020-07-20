import React from "react";

export default function Navbar() {
  return (
    <section>
      <nav
        className="navbar is-fixed-top is-light"
        role="navigation"
        aria-label="main navigation"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="/images/logo.png" width="60" height="28" />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/experts">
                Communication Experts & Creatives
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Conceptual Creatives</a>
                <a className="navbar-item">Photographers & Film Experts</a>
                <a className="navbar-item">Copywriters</a>
                <a className="navbar-item">Digital Strategists</a>
                <a className="navbar-item">Art Directors</a>
                <a className="navbar-item">Brand Strategists</a>
                <a className="navbar-item">Audio Branding Experts</a>
                <a className="navbar-item">Social Media Experts</a>
              </div>
            </div>
            <a className="navbar-item" href="/about">
              About us
            </a>

            <a className="navbar-item" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
