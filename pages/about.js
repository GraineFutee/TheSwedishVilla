import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ y: "200vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 40 }}
    >
      <section className="hero is-primary is-bold">
        <div
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="hero-body">
            <div className="container is-fluid mx-6">
              <h1 className="title is-1">About Us</h1>
              <p className="subtitle">
                Our founders - Board members - Core Values
              </p>
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
              <h3 className="title is-3">Our founders</h3>
              <p className="my-3 mx-6">
                The Villa was passionately co-founded by business lawyer
                Katarina Strandberg and Commercial Film Producer/Consultant
                Leila Falkenberg. Two professionals with a true passion for
                Business, Creativity and authentic Brand Communication. The
                Swedish Way, to make the gap beetween client and creatives
                dissapear.
              </p>
              <div className="columns">
                <div className="column is-1"></div>
                <div className="column">
                  <div class="card">
                    <div class="card-image">
                      <figure
                        class="image is-5by3"
                        style={{
                          backgroundImage: "url(/images/leila.jpg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <p class="title is-4 has-text-primary">
                          Leila Falkenberg
                        </p>
                        <p class="subtitle is-6">Chief Creative Officer </p>

                        <div className="content ml-4">
                          <p>
                            Leila is your Matchmaker. She will connect you with
                            the best suited Expert, or set up your own tailor
                            made creative production team. She is heading our
                            team of Advisors and Creatives who searches the
                            market for new talented members to join our family.
                            Leila is also one of our The Swedish Villa Film
                            Experts, available as Advisor/Producer/Production
                            procurement regards commercial film and content.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div class="card">
                    <div class="card-image">
                      <figure
                        class="image is-5by3"
                        style={{
                          backgroundImage: "url(/images/katarina.jpg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <p class="title is-4 has-text-primary">
                          Katarina Strandberg
                        </p>
                        <p class="subtitle is-6">Chief Executive Officer </p>

                        <div className="content ml-4">
                          <p>
                            Katarina is often called Super Girl and Legal Ninja.
                            She has tons of positive energy and a love for both
                            the entrepreneur and the investors making a company
                            grow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-dark is-bold">
        <div
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="hero-body my-6">
            <div className="container">
              <h3 className="title is-3">Board members</h3>
              <h4 className="title is-4">Board of Directors</h4>
              <p className="my-3 mx-6">
                The Villas board of Directors has some of the most intelligent
                and competent Directors to be found. They are dedicated and will
                go the extra mile to ensure that the Villa governance is stable,
                effective, reliable and sustainable. All for the benefit of our
                investors, creatives and first and foremost our Clients. We are
                proud and honored to have them.
              </p>
              <div className="columns">
                <div className="column is-1"></div>
                <div className="column">
                  <div class="card">
                    <div class="card-image">
                      <figure
                        class="image is-5by3"
                        style={{
                          backgroundImage: "url(/images/jorgen.jpeg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <p class="title is-4 has-text-primary">
                          Jörgen Bergqvist
                        </p>
                        <p class="subtitle is-6 has-text-dark">Board Member </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div class="card">
                    <div class="card-image">
                      <figure
                        class="image is-5by3"
                        style={{
                          backgroundImage: "url(/images/petter.jpeg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <p class="title is-4 has-text-primary">
                          Petter Ljungberg
                        </p>
                        <p class="subtitle is-6 has-text-dark">Board Member </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div class="card">
                    <div class="card-image">
                      <figure
                        class="image is-5by3"
                        style={{
                          backgroundImage: "url(/images/ulf.jpeg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <p class="title is-4 has-text-primary">Ulf Säther</p>
                        <p class="subtitle is-6 has-text-dark">Board Member </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div class="card">
                    <div class="card-image">
                      <figure
                        class="image is-5by3"
                        style={{
                          backgroundImage: "url(/images/kieran.jpeg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <p class="title is-4 has-text-primary">
                          Kieran Youngman
                        </p>
                        <p class="subtitle is-6 has-text-dark">Board Member </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-1"></div>
              </div>
              <hr />
              <h4 className="title is-4">Advisory board</h4>
              <p className="my-3 mx-6">
                Our International advisory board brings us energy, good advice,
                network and always a sounding board to count on. This trickles
                down to the benefit of our Clients and we could not be prouder.
              </p>
              <div className="columns">
                <div className="column is-1"></div>
                <div className="column">
                  <div class="card">
                    <div class="card-image">
                      <figure
                        class="image is-5by3"
                        style={{
                          backgroundImage: "url(/images/yasmina.jpeg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <p class="title is-4 has-text-primary">
                          Yasmina Backström
                        </p>
                        <p class="subtitle is-6 has-text-dark">
                          Head of Communications, Swedish-American Chamber of
                          Commerce, New York{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div class="card">
                    <div class="card-image">
                      <figure
                        class="image is-5by3"
                        style={{
                          backgroundImage: "url(/images/gonan.jpeg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <p class="title is-4 has-text-primary">
                          Gonan Premfors
                        </p>
                        <p class="subtitle is-6 has-text-dark">
                          Co-Founder Gozamm, Coach & International Business
                          Leader{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div class="card">
                    <div class="card-image">
                      <figure
                        class="image is-5by3"
                        style={{
                          backgroundImage: "url(/images/james.jpeg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <p class="title is-4 has-text-primary">
                          James Rosenstein{" "}
                        </p>
                        <p class="subtitle is-6 has-text-dark">
                          Consultant CSR, Corporate Communications, Business
                          Development{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column is-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="hero is-dark"
        style={{
          backgroundImage: "url(/images/about.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="hero-body my-6">
            <div className="container">
              <div className="columns">
                <div className="column is-3"></div>
                <div className="column has-text-centered">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    size="3x"
                    className="mb-5 has-text-primary"
                  />
                  <i className="fa fa-quote-right"></i>
                  <div className="has-text-white">
                    <p className="title is-3">
                      “Our vetted Villa Experts and Creatives build on the
                      ethical, innovative and creative heritage that is the
                      foundation of Swedish success brands. Sustainability is in
                      our DNA. We call it - The Swedish way”
                    </p>
                  </div>
                  <p className="subtitle has-text-left mt-4 has-text-primary">
                    The Swedish Villa founders
                  </p>
                </div>
                <div className="column is-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-danger is-bold">
        <div
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="hero-body my-6">
            <div className="container">
              <h3 className="title is-3">Core Values</h3>
              <div className="content ml-4">
                <h4 className="title is-4">
                  All our projects are Passion Projects
                </h4>
                <ul>
                  <li>
                    We fall in love with the brands, businesses and projects we
                    work with – our Villa's Experts & Creatives are independent
                    which means that they chose the projects they engage in, and
                    this means that you the client get vetted creatives
                    dedicated to just your brand, your project, and hence a
                    better result, and a more rewarding thought process.
                  </li>
                </ul>
                <h4 className="title is-4">Sustainability is in our DNA</h4>
                <ul>
                  <li>
                    All our Creatives & Experts are committed to our ethics and
                    sustainability values.
                  </li>
                  <li>
                    We offer our expertise to all brands who strive to move in
                    the direction of Sustainability and define a higher purpose.
                  </li>
                  <li>
                    We are devoted to helping you identify the good in your
                    business and how to communicate it in a way that is
                    engaging, fun and/or bold and edgy.
                  </li>
                  <li>
                    As your brand mentors we do not expect you to have bullet
                    proof sustainable operations, we know it’s a big challenge
                    for us all and that it takes time to get there – so we are
                    happy to help any and all who are committed to getting to a
                    sustainable world.
                  </li>
                  <li>
                    As your brand mentors we do not expect you to have bullet
                    proof sustainable operations, we know it’s a big challenge
                    for us all and that it takes time to get there – so we are
                    happy to help any and all who are committed to getting to a
                    sustainable world.
                  </li>
                </ul>
                <h4 className="title is-4">We are Inclusive and Non-Judging</h4>
                <ul>
                  <li>
                    We do not believe in one-way-fits-all. We believe in letting
                    people do their thing – and understanding, speaking freely
                    and listening respectfully, and also that having a curiosity
                    about other ways/views/preferences is the best way to
                    safeguard against stupid decisions.
                  </li>
                  <li>
                    Just as the Villa of Pippi Longstocking who is our rolemodel
                    and mentor we open our door to you!
                  </li>
                </ul>
                <h4 className="title is-4">If you share you get more</h4>
                <ul>
                  <li>
                    We believe in recommending each other, in sharing and
                    opening our networks, and in working cross-sector,
                    cross-boarder, and cross-businesses, in particular as we
                    know it brings healthy friction and innovative competitive
                    results. Being bold to get the best results. Always with a
                    will and mission to lift each other up. Because if you share
                    you get more. This is our motto.
                  </li>
                </ul>
                <h4 className="title is-4">Belivers in Good karma more</h4>
                <ul>
                  <li>
                    We always strive to show a big heart, we want to be the
                    reason that someone smiles, and we take pride in listening,
                    helping and supporting. The spirit of good karma leads to
                    better results for our Clients and to better world.
                  </li>
                  <li>
                    As Pippi says: “If you are very strong, you have to be very
                    kind".
                  </li>
                </ul>
                <h4 className="title is-4">
                  We embrace the Global Sustainability Goals
                </h4>
                <ul>
                  <li>
                    We never lose sight, and we always stay current on the
                    development of Sustainability topics and how they affect the
                    different industries and regions of the world.
                  </li>
                  <li>
                    We firmly believe in Sustainability and Purpose – we want to
                    give assurance to our Clients that their brand communication
                    hits the mark.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
