import React from "react";
import Carousel from "./Carousel";
import img1 from "../images/coding_in_action.png";
import img2 from "../images/designing_in_action.png";
import img3 from "../images/crochetinaction.png";

export default function Homepage() {
  return (
    <div className="container">
      <h1 className="title">
        <b>welcome</b> to the stash.
      </h1>
      <h1 className="title">
        <b>i'm alli</b>son, your host.
      </h1>
      <h5 className="subtitle">
        i'm a <b>creator</b>, <b>designer</b>, and <b>daydreamer</b> at heart;
        passionate about bringing ideas to life ― big or small!
      </h5>
      <Carousel img1={img1} img2={img2} img3={img3} />
    </div>
  );
}
