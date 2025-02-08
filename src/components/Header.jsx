import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#143754"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          thestash.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                homebase
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/aboutme" ? "active" : ""}`} to="/aboutme">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`} to="/portfolio">
                portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
