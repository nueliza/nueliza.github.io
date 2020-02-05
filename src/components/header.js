import React, { Component } from 'react';
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/images/picture.png";

class Header extends Component {
    render() {
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <ul id="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#projects">Projects</a></li>
                    </ul>

                </nav>

                <div className="banner">
                    <div className="banner-img">
                        <img src={profile} alt="That's me"></img>
                    </div>
                    <div className="banner-text">

                        <h1>Hello! I'm Annu Abraham.</h1>
                        <h4>Building smarter websites.</h4>
                    </div>
                </div>
                

                <div className="scrolldown">
                    <a className="smoothscroll" href="#about"><FontAwesomeIcon icon={faChevronCircleDown} color="white" size="3x"/></a>
                </div>
            </header>
        )
    }
}

export default Header;