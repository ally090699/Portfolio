import React from "react";

export default function Card(props) {
  return (
    <div className="card" style={{ width: "12rem" }}>
      <div className="card-body">
        <img src={props.img} className="card-img-top" alt="Design I" />
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle">{props.subtitle}</h6>
        <p className="card-text">{props.text}</p>
        <a href={props.url} className="card-link">
          {props.linkName}
        </a>
      </div>
    </div>
  );
}
