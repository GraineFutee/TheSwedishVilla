import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const logoVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    fontSize: "85px",
    x: 0,
  },
};

export default function Home() {
  const [changingTitle, setChangingTitle] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log((changingTitle + 1) % 3);
      setChangingTitle((changingTitle + 1) % 3);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [changingTitle]);

  return (
    <>
      {" "}
      <section
        className="hero is-dark is-fullheight-with-navbar is-bold"
        style={{
          backgroundImage: "url(/images/test.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-body">
          <div className="container is-fluid mx-6">
            <div className="columns">
              <motion.div
                whileHover={{
                  boxShadow:
                    "0 4px 8px 0 rgba(255, 255, 255, 0.2),0 6px 20px 0 rgba(255, 255, 255, 0.19)",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                className="column"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  borderRadius: "25px",
                }}
              >
                <motion.p
                  variants={logoVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ type: "spring", stiffness: 50 }}
                  className="title is-1 has-text-primary mb-0"
                  style={{
                    textShadow: "2px 2px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  THE
                </motion.p>
                <motion.p
                  variants={logoVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
                  className="title is-1 has-text-primary mb-0"
                  style={{
                    textShadow: "2px 2px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  SWEDISH
                </motion.p>
                <motion.p
                  variants={logoVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ type: "spring", stiffness: 50, delay: 1 }}
                  className="title is-1 has-text-primary mb-0"
                  style={{
                    textShadow: "2px 2px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  VILLA
                </motion.p>
                {/* <img src="/images/logo.png" width="360" height="180" /> */}
              </motion.div>
              <div className="column is-1"></div>
              <div
                className="column"
                style={{ position: "relative", minHeight: "200px" }}
              >
                <AnimatePresence>
                  {changingTitle === 0 && (
                    <motion.div
                      initial={{ rotateX: 180, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1, zIndex: 1 }}
                      exit={{ rotateX: 180, opacity: 0, zIndex: 0 }}
                      transition={{ type: "spring", stiffness: 35 }}
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    >
                      <h2 className="title mt-6">Become a member</h2>
                      <motion.a
                        whileHover={{
                          boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                          textShadow: "0px 0px 8px rgb(255, 255, 255)",
                        }}
                        className="button is-primary"
                      >
                        Changing button 1
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {changingTitle === 1 && (
                    <motion.div
                      initial={{ rotateX: 180, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1, zIndex: 1 }}
                      exit={{ rotateX: 180, opacity: 0, zIndex: 0 }}
                      transition={{ type: "spring", stiffness: 35 }}
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    >
                      <h2 className="title mt-6">Meet the creatives</h2>
                      <motion.a
                        whileHover={{
                          boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                          textShadow: "0px 0px 8px rgb(255, 255, 255)",
                        }}
                        className="button is-primary"
                      >
                        Changing button 2
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {changingTitle === 2 && (
                    <motion.div
                      initial={{ rotateX: 180, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1, zIndex: 1 }}
                      exit={{ rotateX: 180, opacity: 0, zIndex: 0 }}
                      transition={{ type: "spring", stiffness: 35 }}
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                      }}
                    >
                      <h2 className="title mt-6">Meet us</h2>
                      <motion.a
                        whileHover={{
                          boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                          textShadow: "0px 0px 8px rgb(255, 255, 255)",
                        }}
                        className="button is-primary"
                      >
                        Changing button 3
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* <h1 className="title is-1">The Swedish Villa</h1>
            <div className="container is-fluid">
              <div className="container">
                <div className="columns">
                  <div className="column is-1"></div>
                  <div className="column">
                    <h2 className="title">Changing Title</h2>
                    <a className="button is-danger">Changing button</a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section
        className="hero is-dark"
        style={{
          backgroundImage: "url(/images/home_quote.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
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
                    “Right now we offer 30min zoom meetings with a Villa expert,
                    curated by our connectors! So to discuss your brand
                    challenges or an optional project on any platform or
                    territory with us, please connect. We are here for you!”
                  </p>
                </div>
                <p className="subtitle has-text-left mt-4 has-text-primary">
                  Leila Falkenberg, The Swedish Villa
                </p>
              </div>
              <div className="column is-3"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="columns is-gapless mb-0">
        <div className="column is-7">
          <section className="hero is-light is-fullheight-with-navbar is-bold">
            <div className="hero-body">
              <div className="container is-fluid">
                <div className="columns is-multiline">
                  <div className="column is-half">
                    <div className="content">
                      <h3 className="title is-4">
                        <FontAwesomeIcon icon={faPuzzlePiece} size="2x" />
                        <span>&nbsp;&nbsp;</span>
                        <span className="has-text-primary">
                          Creative Affairs
                        </span>
                      </h3>
                      <p>
                        Co-creating brand communication together with your
                        inhouse marketing department, making your purpose shine
                        through in a sustainable & clear way. When you need the
                        injection of just one specific Villa Expert we'll give
                        you just this. When you need a one of a kind Dream-Team
                        we'll set one up with the exact skillsets to suit just
                        your challenges. No recruiting, we matchmake you with a
                        vetted expert. A better use of your budget.
                      </p>
                      <b>
                        Your vetted Freelancer. Independent Communication
                        Experts available Project by Project. The Swedish Way.
                      </b>
                      <hr />
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="content">
                      <h3 className="title is-4">
                        <FontAwesomeIcon icon={faKey} size="2x" />
                        <span>&nbsp;&nbsp;</span>
                        <span className="has-text-primary">
                          Communication to reach Nordic Customers
                        </span>
                      </h3>
                      <p>
                        We support international companies, brands and
                        organizations when approaching the Nordics to get their
                        messages, offerings and products through and into the
                        Swedish hearts and souls. The Villa Experts and
                        Creatives special skills will add value and authencity
                        to any project or campaign, on any market.
                      </p>
                      <b>
                        Authentic Brand Communication. Tailor made for your
                        terrirories. The Swedish Way.
                      </b>
                      <hr />
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="content">
                      <h3 className="title is-4">
                        <FontAwesomeIcon icon={faSlidersH} size="2x" />
                        <span>&nbsp;&nbsp;</span>
                        <span className="has-text-primary">
                          Digital Strategy & Social Media Customers
                        </span>
                      </h3>
                      <p>
                        Creating and implementing a social media strategy using
                        authentic content that cuts through the noise. The
                        Swedish Villa Way also includes investigating on how to
                        recycle your existing raw photo & film content in
                        innovative ways that enhance your brand communication on
                        all different platforms. May it be re-edits to
                        communicate in a better way on a different market or
                        applying a new tone of voice. No recruiting, we
                        matchmake you with our expert.
                      </p>
                      <b>
                        Maximized production value. One Campaign at the time.
                        The Swedish Way.
                      </b>
                      <hr />
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="content">
                      <h3 className="title is-4">
                        <FontAwesomeIcon icon={faLayerGroup} size="2x" />
                        <span>&nbsp;&nbsp;</span>
                        <span className="has-text-primary">
                          Creative Brand Strategy
                        </span>
                      </h3>
                      <p>
                        Sustainability is an intertwined part of your brand
                        values. We make sure to create the foundation to
                        communicate this in a contemporary, sassy and fun way.
                        The Swedish Villa Way integrates the Creative Process
                        within the Strategy from the very first day, as our
                        Villa Brand Strategists work cross-sector, close to you
                        as well as your creative team.
                      </p>
                      <b>
                        Bold, sustainable & brave. Strategic Communication
                        Experts. The Swedish Way.
                      </b>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="column is-5"
          style={{
            backgroundImage: "url(/images/home2.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <section
        className="hero is-dark"
        style={{
          backgroundImage: "url(/images/home_quote2.jpg)",
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
                      “The Logo that the Villa Creative put forward is pure
                      genius, it is bespoke - based on hours sitting with a pen,
                      a ruler and a rubber - it's timeless, beautiful and
                      versatile”
                    </p>
                  </div>
                  <p className="subtitle has-text-left mt-4 has-text-primary">
                    Founder and CEO Fashion & Sports Brand
                  </p>
                </div>
                <div className="column is-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    // <div classNameName="container">
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main>
    //     <h1 classNameName="title">
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p classNameName="description">
    //       Get started by editing <code>pages/index.js</code>
    //     </p>

    //     <div classNameName="grid">
    //       <a href="https://nextjs.org/docs" classNameName="card">
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" classNameName="card">
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         classNameName="card"
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         classNameName="card"
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" classNameName="logo" />
    //     </a>
    //   </footer>

    //   <style jsx>{`
    //     .container {
    //       min-height: 100vh;
    //       padding: 0 0.5rem;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     main {
    //       padding: 5rem 0;
    //       flex: 1;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     footer {
    //       width: 100%;
    //       height: 100px;
    //       border-top: 1px solid #eaeaea;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     footer img {
    //       margin-left: 0.5rem;
    //     }

    //     footer a {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     a {
    //       color: inherit;
    //       text-decoration: none;
    //     }

    //     .title a {
    //       color: #0070f3;
    //       text-decoration: none;
    //     }

    //     .title a:hover,
    //     .title a:focus,
    //     .title a:active {
    //       text-decoration: underline;
    //     }

    //     .title {
    //       margin: 0;
    //       line-height: 1.15;
    //       font-size: 4rem;
    //     }

    //     .title,
    //     .description {
    //       text-align: center;
    //     }

    //     .description {
    //       line-height: 1.5;
    //       font-size: 1.5rem;
    //     }

    //     code {
    //       background: #fafafa;
    //       border-radius: 5px;
    //       padding: 0.75rem;
    //       font-size: 1.1rem;
    //       font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    //         DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    //     }

    //     .grid {
    //       display: flex;
    //       align-items: center;
    //       justify-content: center;
    //       flex-wrap: wrap;

    //       max-width: 800px;
    //       margin-top: 3rem;
    //     }

    //     .card {
    //       margin: 1rem;
    //       flex-basis: 45%;
    //       padding: 1.5rem;
    //       text-align: left;
    //       color: inherit;
    //       text-decoration: none;
    //       border: 1px solid #eaeaea;
    //       border-radius: 10px;
    //       transition: color 0.15s ease, border-color 0.15s ease;
    //     }

    //     .card:hover,
    //     .card:focus,
    //     .card:active {
    //       color: #0070f3;
    //       border-color: #0070f3;
    //     }

    //     .card h3 {
    //       margin: 0 0 1rem 0;
    //       font-size: 1.5rem;
    //     }

    //     .card p {
    //       margin: 0;
    //       font-size: 1.25rem;
    //       line-height: 1.5;
    //     }

    //     .logo {
    //       height: 1em;
    //     }

    //     @media (max-width: 600px) {
    //       .grid {
    //         width: 100%;
    //         flex-direction: column;
    //       }
    //     }
    //   `}</style>

    //   <style jsx global>{`
    //     html,
    //     body {
    //       padding: 0;
    //       margin: 0;
    //       font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    //         Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    //         sans-serif;
    //     }

    //     * {
    //       box-sizing: border-box;
    //     }
    //   `}</style>
    // </div>
  );
}
