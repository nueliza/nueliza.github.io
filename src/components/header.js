import React, { Component } from 'react';
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebookSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
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
                    <div>
                        <a href="https://www.linkedin.com/in/annuabraham/" target="/"><FontAwesomeIcon icon={faLinkedin} color="white" size="2x" /></a>&nbsp;
                        <a href="https://www.facebook.com/annu.e.abraham" target="/"><FontAwesomeIcon icon={faFacebookSquare} color="white" size="2x" /></a>&nbsp;
                        <a href="https://www.instagram.com/nu_eliza/" target="/"><FontAwesomeIcon icon={faInstagram} color="white" size="2x" /></a>&nbsp;
                        <a href="https://github.com/nueliza" target="/"><FontAwesomeIcon icon={faGithubSquare} color="white" size="2x" /></a>
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