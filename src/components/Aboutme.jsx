import React from "react";
import "../styles.css";
import image from "../images/travel.png";


export default function Aboutme() {
  return (
    <div className="container">
      <div className="abouttitle">
        <h1>
          enter <b>my domain</b>.
        </h1>
        <h1>
          <b>explore</b> the lore.
        </h1>
      </div>
      <div>
        <h5 className="subtitle">
          i am a <b>creator</b>, <b>designer</b> and <b>programmer</b> with a
          foundation in computer science and medical science.
        </h5>
        <div className="travel">
          <p id="caption">
            i've got my fingers in many pies (including ones i baked!) - fashion
            design, photography, crocheting, gaming, traveling, working out and
            playing basketball!
          </p>
          <div className="photo">
            <img src={image} className="img-fluid" alt="Sea of Clouds in Thailand" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="abouttitle">
        <span role="img" aria-label="Girl on Computer emoji">👩🏻‍💻</span><b>experience</b>.
        </h1>
        <p className="textcontent">
          I design and develop websites with a Udemy bootcamp background.
          <br />
          <br />
          In the past, I self-taught Excel code and spearheaded several excel
          redesign and development projects for Rx Connect Specialty Pharmacy. I
          also have more than five years of experience in customer service and
          healthcare.
        </p>
        <br />
        <h1 className="abouttitle">
        <span role="img" aria-label="Stack of Books emoji">📚</span><b>education</b>.
        </h1>
        <p className="textcontent">
          I have completed 3.5 years of Medical Science and 3 years of Computer
          Science for my bachelor's degree (graduating April 2025).
        </p>
        <br />
        <h1 className="abouttitle">
        <span role="img" aria-label="Painting Palette emoji">🎨</span><b>art</b>.
        </h1>
        <p className="textcontent">
          Though it began as a fun hobby, I have been crocheting for more than
          four years now and have created over 40 unique pieces. I enjoy working
          on practical, fashionable and cozy pieces like tote bags, dresses, and
          sweaters!
        </p>
      </div>
    </div>
  );
}
