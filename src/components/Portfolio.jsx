import React from "react";
import Card from "./Card";
import programming from "./portfolio content/programming";
import designing from "./portfolio content/designing";
import fashion from "./portfolio content/fashion"

export default function Portfolio() {
  return (
    <div>
      <div className="container titlebar">
        <div>
          <h1>
            Finally, <b>the stash.</b>
          </h1>
        </div>
        <div>
          <h5 className="portfolio-subtitle">I try to stay busy so hopefully you see something you like!</h5>
        </div>
      </div>
      <div className="row">
        <div className="col colleft">
          <div
            id="simple-list-example"
            className="sidenav d-flex flex-column gap-2 simple-list-example-scrollspy text-left"
          >
            <a className="p-1 rounded" href="#simple-list-item-1">
              programming.
            </a>
            <a className="p-1 rounded" href="#simple-list-item-2">
              design.
            </a>
            <a className="p-1 rounded" href="#simple-list-item-3">
              fashion.
            </a>
          </div>
        </div>
        <div className="col colright">
          <div
            data-bs-spy="scroll"
            data-bs-target="#simple-list-example"
            data-bs-offset="0"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex="0"
          >
            <h4 id="simple-list-item-1"><span role="img" aria-label="Girl on Computer emoji">👩🏻‍💻</span>Programming.</h4>
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
          <h4 id="simple-list-item-2"><span role="img" aria-label="Female Artist emoji">👩🏻‍🎨</span>Design.</h4>
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
          <h4 id="simple-list-item-3"><span role="img" aria-label="Dress emoji">👗</span>Fashion.</h4>
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
