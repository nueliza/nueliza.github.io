import React, { Component } from 'react';
import './App.css';
import {Helmet} from 'react-helmet';

import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";

import previewImage from "../src/assets/images/searchResultImage.png";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Annu Elizabeth</title>
          <meta name="description" content="Annu Abraham Portfolio"/>
          <meta name="image" content={previewImage} />
        </Helmet>
        <Header />
        <About />
        <Projects />
      </div>
    )
  }
}

export default App;
