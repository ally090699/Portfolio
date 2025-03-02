import React, {useRef} from "react";
import Card from "./Card";
import programming from "./portfolio content/programming";
import designing from "./portfolio content/designing";
import fashion from "./portfolio content/fashion"

export default function Portfolio() {
  const programmingRef = useRef(null);
  const designRef = useRef(null);
  const fashionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="container titlebar">
          <div>
            <h1>
              Showcasing, my <b>Work</b>.
            </h1>
          </div>
          <div>
            <h5 className="portfolio-subtitle">Explore my projects to see what I've been up to.!</h5>
          </div>
      </div>

      <div className="">
              <div
                id="simple-list-example"
                className="w-1/4 sidenav d-flex flex-column colleft gap-2 text-left"
              >
                  <a className="p-1 rounded" onClick={() => scrollToSection(programmingRef)}>
                    programming.
                  </a>
                  <a className="p-1 rounded" onClick={() => scrollToSection(designRef)}>
                    design.
                  </a>
                  <a className="p-1 rounded" onClick={() => scrollToSection(fashionRef)}>
                    fashion.
                  </a>
              </div>

              <div className="portfoliocontent">
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#simple-list-example"
                  data-bs-offset="0"
                  data-bs-smooth-scroll="true"
                  className="scrollspy-example"
                  tabIndex="0"
                >
                  <h4 ref={programmingRef}>Programming.</h4>
                  <div className="container gallery">
                    {programming.map((project, index) => (
                      <Card 
                        key={project.key}
                        title={project.title}
                        subtitle={project.subtitle}
                        img={project.img}
                        stack={project.stack}
                        text={project.text}
                        linkName={project.linkName}
                        url={project.url}
                      />
                    ))}
                  </div>
                </div>
                <h4 ref={designRef}>Design.</h4>
                <div className="container gallery">
                {designing.map((project, index) => (
                      <Card 
                        key={project.key}
                        title={project.title}
                        subtitle={project.subtitle}
                        img={project.img}
                        stack={project.stack}
                        text={project.text}
                        linkName={project.linkName}
                        url={project.url}
                      />
                    ))}
                </div>
                <h4 ref={fashionRef}>Fashion.</h4>
                <div className="container gallery">
                    {fashion.map((project, index) => (
                      <Card 
                        id={index}
                        key={project.key}
                        title={project.title}
                        subtitle={project.subtitle}
                        img={project.img}
                        stack={project.stack}
                        text={project.text}
                        url={project.url}
                      />
                    ))}
                </div>
              </div>
        </div>
    </div>
  );
}
