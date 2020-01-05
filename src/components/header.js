import React, { Component } from 'react';
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/images/picture.png";

class Header extends Component{
    render(){
        return(
            <header id="home">
                <div className="banner">
                    <div className="banner-img">
                        <img src={profile} alt="That's me"></img>
                    </div>
                    <div className="banner-text">
                        
                        <h1>Hello! I'm Annu Abraham.</h1>
                        <h3>I'm from Rockville, MD. Something about me!</h3>
                    </div>
                </div>
                
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><FontAwesomeIcon icon={faChevronCircleDown} color="white" /></a>
                </p>
            </header>
        )
    }
}

export default Header;