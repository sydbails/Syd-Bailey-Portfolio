import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./containers/Navbar";
import Resume from "./containers/Resume";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Message from "./components/Message";
import Blog from "./components/Blog";

function App() {
  return (
    <div style={{ backgroundColor: "#DDDDDD" }} className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
