import React, { Component, Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram, faFacebookSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tcsIcon from "../assets/images/tcs.jpeg";
import jqiIcon from "../assets/images/jqi.png";
import umdIcon from "../assets/images/umd.jpg";
import unitedIcon from "../assets/images/united.png";
import usaaIcon from "../assets/images/usaa.png";
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
    render() {
        return (
            <Fragment>
                    
                
            <section id="projects">
            {/* <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                    <div className='container'>
                        <div className="left-box">
                        Graduate Assistant – React Developer
                        Joint Quantum Institute
                        </div>
                        <a className="center-image" href="#home">
                        <FontAwesomeIcon icon={faChevronCircleUp} color="black" size="3x" />
                        </a>
                        <div className="right-box">
                            <p>
                                ●	Created Open Source React-based Web Application for presenting interactive Quantum Physics Experiments aiming to create awareness and interest in Quantum Physics for over 30000 students on UMD campus and more.
                            <br />
                                ●	Proactively fixed bugs and initiated Test-Driven Development by writing tests in Jest with 86% coverage.
                            <br />
                                ●	Intensively worked with media queries and bootstrap to make the website responsive.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>  

                <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                    <div className='container'>
                        <div className="left-box">

                        </div>
                        <a className="center-image" href="#home">
                        <FontAwesomeIcon icon={faChevronCircleUp} color="black" size="3x" />
                        </a>
                        <div className="right-box">

                        </div>
                    </div>
                </ScrollAnimation>  */}

               <h2>Projects</h2>
                <VerticalTimeline className="timeline">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work timeline-ele"
                        date="July 2019 - Present"
                        iconStyle={{ textAlign: 'center' }}
                        icon={<img className='work-icon' alt="TCS icon" src={jqiIcon}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Graduate Assistant – React Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Joint Quantum Institute</h4>
                        <p>
                            ●	Created Open Source React-based Web Application for presenting interactive Quantum Physics Experiments aiming to create awareness and interest in Quantum Physics for over 30000 students on UMD campus and more.
                        <br />
                            ●	Proactively fixed bugs and initiated Test-Driven Development by writing tests in Jest with 86% coverage.
                        <br />
                            ●	Intensively worked with media queries and bootstrap to make the website responsive.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work timeline-ele"
                        date="January 2019 - December 2019"
                        iconStyle={{ textAlign: 'center' }}
                        icon={<img className='work-icon' alt="TCS icon" src={umdIcon}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">UMD Engineering Software Project</h4>
                        <p>
                        ●	Authored a responsive web application using React/Redux, Bootstrap, media queries, and Material-UI
                        <br />
                        ●	Learned Spring Boot and developed RESTful APIs for seamlessly communication between the client and server.
                        <br />
                        ●	Guided and shaped team members in the emerging Web technologies such as React/Redux, Spring Boot, Bootstrap.
                        <br />
                        <a href="https://get-sat-pro-client.herokuapp.com/" target="/">https://get-sat-pro-client.herokuapp.com/</a>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work timeline-ele"
                        date="September 2016 - June 2018"
                        iconStyle={{ textAlign: 'center' }}
                        icon={<img className='work-icon' alt="TCS icon" src={unitedIcon}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">United Airlines</h4>
                        <p>
                        ● Maximized the performance of a server rendered WebApp by migrating to client rendered WebApp using ReactJs.<br/>
                        ● Boosted code coverage to more than 90% by writing unit tests in Jest and Enzyme to save development efforts.<br/>
                        ● Enhanced the User Experience to 35% by observing Responsive Web Design (RWD).<br/>
                        ● Third Party contractor at TATA Consultancy Services.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work timeline-ele"
                        date="October 2014 - August 2016"
                        iconStyle={{ textAlign: 'center' }}
                        icon={<img className='work-icon' alt="TCS icon" src={usaaIcon}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Assistant System Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">United Services Automobile Association (USAA)</h4>
                        <p>
                        ● Built Single Page Applications (SPA) that facilitate P2P payments – Zelle by consuming REST APIs.<br/>
                        ● Standardized application built from scratch with web accessibility by adhering to Section 508 standards.<br/>
                        ● Ensured performance, quality, and responsiveness of applications by conducting end to end testing and Unit testing.<br/>
                        ● Third Party contractor at TATA Consultancy Services.<br/>
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>
            <a className="scrollUp smoothscroll" href="#home">
                <FontAwesomeIcon icon={faChevronCircleUp} color="black" size="3x" />
            </a>
            <section id="footer">
                <a href="https://www.linkedin.com/in/annuabraham/" target="/"><FontAwesomeIcon icon={faLinkedin} color="white" size="3x" /></a>
                <a href="https://www.facebook.com/annu.e.abraham" target="/"><FontAwesomeIcon icon={faFacebookSquare} color="white" size="3x" /></a>
                <a href="https://www.instagram.com/nu_eliza/" target="/"><FontAwesomeIcon icon={faInstagram} color="white" size="3x" /></a>
                <a href="https://github.com/nueliza" target="/"><FontAwesomeIcon icon={faGithubSquare} color="white" size="3x" /></a>
                <div>
                    created by <br/>Annu Elizabeth Abram
                </div>
            </section>
            </Fragment>
        )
    }
}

export default Projects;