import React, { Component } from 'react';
import resume from "../assets/resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class About extends Component{
    render(){
        return(
            <section id="about">
                
                <h2> Contact details</h2>
                Annu Elizabeth Abraham<br/>
                15955 Frderick Rd, Apt #2251<br/>
                Rockville, Maryland 20855<br/>
                860-995-0878<br/>
                nueliza@gmail.com 

                <span className="download-resume">
                    <a href={resume} target= "/">
                        <FontAwesomeIcon icon={faDownload} size="1x" />
                        &nbsp;&nbsp;Download resume
                    </a>
                </span>
                <br />
            </section>
        )
    }
}

export default About;