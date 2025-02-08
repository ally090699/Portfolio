import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Portfolio from "./Portfolio";
import "../styles.css";

export default function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/aboutme" component={Aboutme} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
