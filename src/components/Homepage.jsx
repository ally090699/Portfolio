import React from "react";
import Carousel from "./Carousel";
import img1 from "../images/coding_in_action.png";
import img2 from "../images/designing_in_action.png";
import img3 from "../images/crochetinaction.png";

export default function Homepage() {
  return (
    <div className="container">
      <h1 className="title">
        Hello <b>I'm Alli</b>son.
      </h1>
      <h1 className="title">
        <b>Discover</b> my work.
      </h1>
      <h5 className="subtitle">
        I'm a <b>programmer</b>, <b>creator</b> and <b>explorer</b> at heart;
        passionate about bringing ideas to life ― big or small!
      </h5>
      <Carousel img1={img1} img2={img2} img3={img3} />
    </div>
  );
}
