import React, { Component } from 'react';
import resume from "../assets/resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class About extends Component{
    render(){
        return(
            <section id="about">
                
                <h2>About</h2>

                <div className="about-item-container">
                    <div className="about-item">
                        <FontAwesomeIcon icon={faPhone} size="3x" /><br/>
                        <div className="about-item-content">
                            860-995-0878
                        </div>
                    </div>
                    <div className="about-item">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" /><br/>
                        <div className="about-item-content">
                            nueliza@gmail.com
                        </div>
                    </div>
                    <div className="about-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" /><br/>
                        <div className="about-item-content">
                            15955 Frderick Rd, Apt #2251<br/>
                            Rockville, Maryland 20855<br/>
                        </div>
                    </div>
                </div>

                <div className="download-resume">
                    <a href={resume} target= "/">
                        <FontAwesomeIcon icon={faDownload} size="1x" />
                        &nbsp;&nbsp;Download resume
                    </a>
                </div>
                <br />
            </section>
        )
    }
}

export default About;