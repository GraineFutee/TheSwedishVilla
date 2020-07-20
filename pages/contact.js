import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  return (
    <>
      <section className="hero is-primary is-bold">
        <div
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="hero-body">
            <div className="container is-fluid mx-6">
              <h1 className="title is-1">Contact</h1>
              <p className="subtitle">The Villa Team - Map</p>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-light is-bold">
        <div
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="hero-body my-6">
            <div className="container">
              <h3
                className="title is-3"
                style={{ marginLeft: "15%", marginRight: "15%" }}
              >
                The Villa Team
              </h3>
              <p className="" style={{ marginLeft: "15%", marginRight: "15%" }}>
                Our HQ is in Stockholm, the beautiful capital of Sweden. If in
                town do come visit us at our offices at Skeppsbron 38, in the
                fantastic creative house of Chimney Group. Our independent
                experts and team are all international digital heroes as well as
                team players, and just a (zoom)call away! The Villa is at the
                moment focusing on business development again in New York, as
                well as setting up new connections in London and Barcelona,
                building our local network of experts and to-go-to partners.
                We’d love to meet YOU!
              </p>
              <div
                className="columns is-multiline my-6"
                style={{ marginLeft: "15%" }}
              >
                <div className="column is-6">
                  <div className="columns">
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://bulma.io/images/placeholders/128x128.png"
                        />
                      </figure>
                    </div>
                    <div className="column">
                      <p className="title is-6">Katarina Strandberg</p>
                      <p className="subtitle is-6 mb-1">
                        CEO & Creative Affairs
                      </p>
                      <div className="content ml-3">
                        <p className="my-0">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="has-text-primary"
                          />{" "}
                          katarina@theswedishvilla.com
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="has-text-primary"
                          />{" "}
                          +46 763 750 336
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns">
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://bulma.io/images/placeholders/128x128.png"
                        />
                      </figure>
                    </div>
                    <div className="column">
                      <p className="title is-6">Katarina Strandberg</p>
                      <p className="subtitle is-6 mb-1">
                        CEO & Creative Affairs
                      </p>
                      <div className="content ml-3">
                        <p className="my-0">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="has-text-primary"
                          />{" "}
                          katarina@theswedishvilla.com
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="has-text-primary"
                          />{" "}
                          +46 763 750 336
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns">
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://bulma.io/images/placeholders/128x128.png"
                        />
                      </figure>
                    </div>
                    <div className="column">
                      <p className="title is-6">Katarina Strandberg</p>
                      <p className="subtitle is-6 mb-1">
                        CEO & Creative Affairs
                      </p>
                      <div className="content ml-3">
                        <p className="my-0">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="has-text-primary"
                          />{" "}
                          katarina@theswedishvilla.com
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="has-text-primary"
                          />{" "}
                          +46 763 750 336
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns">
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://bulma.io/images/placeholders/128x128.png"
                        />
                      </figure>
                    </div>
                    <div className="column">
                      <p className="title is-6">Katarina Strandberg</p>
                      <p className="subtitle is-6 mb-1">
                        CEO & Creative Affairs
                      </p>
                      <div className="content ml-3">
                        <p className="my-0">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="has-text-primary"
                          />{" "}
                          katarina@theswedishvilla.com
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="has-text-primary"
                          />{" "}
                          +46 763 750 336
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns">
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://bulma.io/images/placeholders/128x128.png"
                        />
                      </figure>
                    </div>
                    <div className="column">
                      <p className="title is-6">Katarina Strandberg</p>
                      <p className="subtitle is-6 mb-1">
                        CEO & Creative Affairs
                      </p>
                      <div className="content ml-3">
                        <p className="my-0">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="has-text-primary"
                          />{" "}
                          katarina@theswedishvilla.com
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="has-text-primary"
                          />{" "}
                          +46 763 750 336
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns">
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://bulma.io/images/placeholders/128x128.png"
                        />
                      </figure>
                    </div>
                    <div className="column">
                      <p className="title is-6">Katarina Strandberg</p>
                      <p className="subtitle is-6 mb-1">
                        CEO & Creative Affairs
                      </p>
                      <div className="content ml-3">
                        <p className="my-0">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="has-text-primary"
                          />{" "}
                          katarina@theswedishvilla.com
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="has-text-primary"
                          />{" "}
                          +46 763 750 336
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns">
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://bulma.io/images/placeholders/128x128.png"
                        />
                      </figure>
                    </div>
                    <div className="column">
                      <p className="title is-6">Katarina Strandberg</p>
                      <p className="subtitle is-6 mb-1">
                        CEO & Creative Affairs
                      </p>
                      <div className="content ml-3">
                        <p className="my-0">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="has-text-primary"
                          />{" "}
                          katarina@theswedishvilla.com
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="has-text-primary"
                          />{" "}
                          +46 763 750 336
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns">
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://bulma.io/images/placeholders/128x128.png"
                        />
                      </figure>
                    </div>
                    <div className="column">
                      <p className="title is-6">Katarina Strandberg</p>
                      <p className="subtitle is-6 mb-1">
                        CEO & Creative Affairs
                      </p>
                      <div className="content ml-3">
                        <p className="my-0">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="has-text-primary"
                          />{" "}
                          katarina@theswedishvilla.com
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="has-text-primary"
                          />{" "}
                          +46 763 750 336
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
