import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Portfolio from "./Portfolio";
import CardDetails from "./CardDetails";
import "../styles.css";

export default function App() {
  function backToTop(event){
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
  return (
    <Router basename="/Portfolio">
      <div className="content-wrapper">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/aboutme" component={Aboutme} />
            <Route path="/portfolio/:id" component={CardDetails}/>
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
        <button onClick={backToTop} id="backToTopBtn" title="Back to Top"><ArrowUpwardIcon/></button>
        <Footer />
      </div>
    </Router>
  );
}
