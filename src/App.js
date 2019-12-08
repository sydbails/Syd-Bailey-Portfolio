import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./containers/Navbar";
import Resume from "./containers/Resume";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Sample from "./components/Sample";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <Navbar />
            <AboutMe />
          </Route>
          <Route path="/blog">
            <Sample />
            <Blog />
          </Route>
          <Route path="/projects">
            <Navbar />
            <Projects />
          </Route>
          <Route path="/resume">
            <Navbar />
            <Resume />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
