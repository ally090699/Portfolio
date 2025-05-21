import React, {useRef} from "react";
import Card from "./Card";
import content from "./portfolio content/content";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const programmingRef = useRef(null);
  const designRef = useRef(null);
  const webRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const graphicdesign=content.filter((item) => item.subtitle === "Graphic Design");
  const webdesign=content.filter((item) => item.subtitle === "Web Development");
  const mainprog=content.filter((item) => item.subtitle !== "Web Development" && item.subtitle !== "Graphic Design");

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

      <div id="portfolio">
              <div
                id="simple-list-example"
                className="w-1/4 sidenav d-flex flex-column colleft gap-2 text-left"
              >
                  <a className="p-1 rounded" onClick={() => scrollToSection(programmingRef)}>
                    programming.
                  </a>
                  <a className="p-1 rounded" onClick={() => scrollToSection(webRef)}>
                    web programming.
                  </a>
                  <a className="p-1 rounded" onClick={() => scrollToSection(designRef)}>
                    design.
                  </a>
                  
              </div>

              <div className="portfoliocontent">
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#simple-list-example"
                  data-bs-offset="0"
                  data-bs-smooth-scroll="true"
                  className="scrollspy-example mx-2"
                  tabIndex="0"
                >
                  <h4 ref={programmingRef} className="portfolio-sect-title mx-4">Programming.</h4>
                  <div className="container gallery">
                    {mainprog.map((project) => (
                    <Link to={`/portfolio/${project.key}`} key={project.key} className="link">
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
                    </Link>
                    ))}
                  </div>
                </div>
                <h4 ref={webRef} className="portfolio-sect-title mx-4">Web Programming.</h4>
                <div className="container gallery">
                    {webdesign.map((project) => (
                    <Link to={`/portfolio/${project.key}`} key={project.key} className="link">
                      <Card 
                        key={project.key}
                        title={project.title}
                        subtitle={project.subtitle}
                        img={project.img}
                        stack={project.stack}
                        text={project.text}
                        url={project.url}
                      />
                    </Link>
                    ))}
                </div>
                <h4 ref={designRef} className="portfolio-sect-title mx-4">Design.</h4>
                <div className="container gallery">
                {graphicdesign.map((project) => (
                    <Link to={`/portfolio/${project.key}`} key={project.key} className="link">
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
                    </Link>
                    ))}
                </div>
              </div>
        </div>
    </div>
  );
}
