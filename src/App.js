import React, { Component } from 'react';
import './App.css';

import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
      </div>
    )
  }
}

export default App;
