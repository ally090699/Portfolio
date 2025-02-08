import React from "react";
import Card from "./Card";
import img1 from "../images/Minesweeper.png";
import img2 from "../images/kitCollective.png";
import dimg1 from "../images/Untitled_Artwork 2.jpeg";
import dimg2 from "../images/Untitled_Artwork.jpeg";
import dimg3 from "../images/Untitled_Artwork 13.jpeg";
import aimg1 from "../images/graphic_design_OCA1.png";
import aimg2 from "../images/graphic_design_OCA2.png";
import aimg3 from "../images/graphic_design_RDR.png";
import aimg4 from "../images/graphic_design_RDR2.jpg";
import aimg5 from "../images/graphic_design_RDR3.jpg";

export default function Portfolio() {
  //Programming
  //Minesweeper Project (C++)
  const title1 = "Minesweeper";
  const subtitle1 = "Software Development";
  const text1 = "Basic Minesweeper game in C++ with 99 randomized mines placed around a grid of 30x16.";
  const linkName1 = "Access";
  const url1 = "https://github.com/ally090699/Minesweeper";

  //Kit Collective (CS2033 project)
  const title2 = "Kit Collective";
  const subtitle2 = "Web Development";
  const text2 = "E-commerce website created with Bootstrap, enhanced parallax, scrollfire, transitions, animations and responsiveness.";
  const linkName2 = "View";
  const url2 = "https://ally090699.github.io/kitCollective/";

  //art
  //OCA 1
  const atitle1 = "Off-Campus Advisors 1";
  const asubtitle1 = "Instagram Post";
  const atext1 = "First post to provide tips to students interested in subletting.";
  const alinkName1 = "";
  const aurl1 = "";

  //OCA 2
  const atitle2 = "Off-Campus Advisors 2";
  const asubtitle2 = "Instagram Post";
  const atext2 = "Second post to provide tips to students interested in subletting.";
  const alinkName2 = "";
  const aurl2 = "";

  //RDR 1
  const atitle3 = "Rare Disease Review 1";
  const asubtitle3 = "Instagram Post";
  const atext3 = "Post material made to promote a Trivia Night for the club.";
  const alinkName3 = "";
  const aurl3 = "";

  //RDR 2
  const atitle4 = "Rare Disease Review 2";
  const asubtitle4 = "Journal Banner";
  const atext4 = "Banner made for journal paper on Harlequin Ichthyosis.";
  const alinkName4 = "";
  const aurl4 = "";

  //RDR 3
  const atitle5 = "Rare Disease Review 3";
  const asubtitle5 = "Journal Banner";
  const atext5 = "Banner made for journal paper on Auto-Brewery Syndrome.";
  const alinkName5 = "";
  const aurl5 = "";


  //fashion
  //Design 1
  const dtitle1 = "Crimson Eclipse";
  const dsubtitle1 = "Fashion Design";
  const dtext1 =
    "A blend of sleek black with a red accent for effortless, edgy elegance.";
  const dlinkName1 = "";
  const durl1 = "";

  //Design 2
  const dtitle2 = "Frozen Ember";
  const dsubtitle2 = "Fashion Design";
  const dtext2 =
    "A crystal-like top in icy tones, perfect for dressing up or dressing down.";
  const dlinkName2 = "";
  const durl2 = "";

  //Design 3
  const dtitle3 = "River's Edge";
  const dsubtitle3 = "Fashion Design";
  const dtext3 =
    "A fluid purple design with dynamic, edgy accents that incorporate comfort and style.";
  const dlinkName3 = "";
  const durl3 = "";

  return (
    <div>
      <div className="container titlebar">
        <div>
          <h1>
            finally, <b>the stash.</b>
          </h1>
        </div>
        <div>
          <h5>i try to stay busy so hopefully you see something you like!</h5>
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
              art.
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
            tabindex="0"
          >
            <h4 id="simple-list-item-1"><span role="img" aria-label="Girl on Computer emoji">👩🏻‍💻</span>programming.</h4>
            <div className="container gallery">
              <Card
                title={title1}
                subtitle={subtitle1}
                img={img1}
                text={text1}
                linkName={linkName1}
                url={url1}
              />
              <Card
                title={title2}
                subtitle={subtitle2}
                img={img2}
                text={text2}
                linkName={linkName2}
                url={url2}
              />
            </div>
          </div>
          <h4 id="simple-list-item-2"><span role="img" aria-label="Painting Palette emoji">🎨</span>art.</h4>
          <div className="container gallery">
            <Card
              title={atitle1}
              subtitle={asubtitle1}
              img={aimg1}
              text={atext1}
              linkName={alinkName1}
              url={aurl1}
            />
            <Card
              title={atitle2}
              subtitle={asubtitle2}
              img={aimg2}
              text={atext2}
              linkName={alinkName2}
              url={aurl2}
            />
            <Card
              title={atitle3}
              subtitle={asubtitle3}
              img={aimg3}
              text={atext3}
              linkName={alinkName3}
              url={aurl3}
            />
            <Card
              title={atitle4}
              subtitle={asubtitle4}
              img={aimg4}
              text={atext4}
              linkName={alinkName4}
              url={aurl4}
            />
            <Card
              title={atitle5}
              subtitle={asubtitle5}
              img={aimg5}
              text={atext5}
              linkName={alinkName5}
              url={aurl5}
            />
          </div>
          <h4 id="simple-list-item-3"><span role="img" aria-label="Dress emoji">👗</span>fashion.</h4>
          <div className="container gallery">
            <Card
              title={dtitle1}
              subtitle={dsubtitle1}
              img={dimg1}
              text={dtext1}
              linkName={dlinkName1}
              url={durl1}
            />
            <Card
              title={dtitle2}
              subtitle={dsubtitle2}
              img={dimg2}
              text={dtext2}
              linkName={dlinkName2}
              url={durl2}
            />
            <Card
              title={dtitle3}
              subtitle={dsubtitle3}
              img={dimg3}
              text={dtext3}
              linkName={dlinkName3}
              url={durl3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
