import React from "react";

export default function Header(props) {
  return (
    <section className="hero is-primary is-small">
      <div
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div className="hero-body">
          <div className="container is-fluid mx-6">
            <h1 className="title is-2">{props.title}</h1>
            <p className="subtitle">{props.subtitle}</p>
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                {props.breadcrumb.map((item) => (
                  <li>
                    <a href={item.path} style={{ color: "white" }}>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
