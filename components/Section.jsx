import React from "react";

export default function Section(props) {
  return (
    <>
      {props.section.elements.length > 1 ? (
        <section className={`columns ${props.section.gap}`}>
          {props.section.elements.map((element) => (
            <div className={`column ${element.size}`}>
              {element.type === "hero" && (
                <div
                  className={`hero is-bold ${element.hero.color} ${element.hero.size}`}
                >
                  <div className="hero-body">
                    <div className="container-is-fuild">
                      {element.hero.contents.map((content) => (
                        <>
                          {content.type === "title" && (
                            <h1 className={`title ${content.title.size}`}>
                              {content.title.content}
                            </h1>
                          )}
                          {content.type === "button" && (
                            <a className={`button ${content.button.color}`}>
                              {content.button.content}
                            </a>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {element.type === "bigPicture" && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(/images${element.bigPicture.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
            </div>
          ))}
        </section>
      ) : (
        <section>
          {props.section.elements[0].type === "hero" && (
            <div
              className={`hero is-bold ${props.section.elements[0].hero.color} ${props.section.elements[0].hero.size}`}
            >
              <div className="hero-body">
                <div
                  className={`container-is-fuild ${props.section.elements[0].position}`}
                >
                  {props.section.elements[0].hero.contents.map((content) => (
                    <>
                      {content.type === "title" && (
                        <h1 className={`title ${content.title.size}`}>
                          {content.title.content}
                        </h1>
                      )}
                      {content.type === "text" && (
                        <div
                          className={`content ${content.text.size}`}
                          style={{
                            marginLeft: content.text.marginLeft
                              ? content.text.marginLeft
                              : "0",
                            marginRight: content.text.marginRight
                              ? content.text.marginRight
                              : "0",
                            marginBottom: content.text.marginBottom
                              ? content.text.marginBottom
                              : "0",
                            marginTop: content.text.marginTop
                              ? content.text.marginTop
                              : "0",
                          }}
                        >
                          <p>{content.text.content}</p>
                        </div>
                      )}
                      {content.type === "button" && (
                        <a className={`button ${content.button.color}`}>
                          {content.button.content}
                        </a>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
