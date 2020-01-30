import React, { Component } from 'react';
import resume from "../assets/resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class About extends Component{
    
    render(){
        return(
            <section id="about">
                
                <h2>About</h2>

                <div className="my-story-container">
                    <p className="skip">
                        In a hurry? <a href="#skills" className="smoothscroll">Click here to skip to skills!</a>
                    </p>
                    <p>
                        <h2>Hi there! I’m Annu Elizabeth Abraham. </h2>You can call me <i>Annu</i>.
                    </p>    
                    <p>
                        I’m a 27 years old female living in Maryland. Ever since I was a little kid, software development has been my passion. I still remember my first “Hello, World!” program in BASIC which left my jaw hanging for a while. I was so amazed by the new superpower which allowed me to make computer do whatever I wanted by typing some symbols. My passion for software development carried me through my education at University of Kerala.  
                        During my four years at University of Kerala, I realized my first “Hello, World!” program was just the tip of the iceberg. 
                    </p>   
                    <p>
                        Soon after graduation, I started my career as a Software Engineer where I met my first love “Web Development”.  In my capacity as a Software Engineer, I learned new web development languages, responsive design principles and developed clean coding skills. I love applying responsive design principles and watch my websites shrink into smaller screen and still look amazing. It’s oddly satisfying. Also, I was lucky to have clients from different domains helping me grasp the challenges in various domains. 
                        While I was enjoying developing new websites, and learning new skills, four years flew by in the blink of an eye. And here I am learning more about the different phases of software development at the University of Maryland.
                    </p>         
                    <p>
                        <section id="skills">
                            <b>My specialties</b> include quickly learning new skills and programming languages, responsive design principles, web accessibility, and Model View controller model for organizing code.  JavaScript, React, Redux, Bootstrap, HTML, CSS,  Jest, Git/GitHub, Cypress.io, Selenium are the feathers on my cap. I’m enthusiastically grabbing onto other programming languages, framework, or principles. Currently, I have Node.JS , Express.JS, and MongoDB on my plate!
                        </section>
                    </p>
                

                </div>

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