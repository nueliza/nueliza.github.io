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
                        ●	Created <b>Front-End</b> focused Web Application aiming to create awareness in Quantum Physics for over 30000 students.
                        <br />
                        ●	Designed reusable <b>Single Page Application (SPA) in ReactJS</b> by using the concept of virtual DOM.
                        <br />
                        ●	Ensured performance, quality, and responsiveness of applications using <b>CSS Media Queries</b>. 
                        <br />
                        ●	Proactively track and resolve bugs, initiated Test-Driven Development by writing tests in Jest with 86% coverage.
                        <br />
                        ●	Reviewed the quality of code resulting in code readability increase and performance improvements.
                        <br />
                        ●	Involved in requirements gathering, analysis, design, and documentation of the application.
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
                        ●	Designed and developed user facing application utilizing <b>ReactJs/Redux, Express.js, Mongoose, and MongoDB</b>.
                        <br />
                        ●	Developed file upload utility in <b>ReactJs</b> and utilized to <b>Fetch API</b> to consume <b>REST APIs</b>.
                        <br />
                        ●	Participated in daily meetings to communicate work progress and potential roadblocks.
                        <br />
                        ●	Designed and modelled the application architecture using design patterns such as factory, singleton and <b>MVC</b>.
                        <br />
                        ●	Worked collaboratively and professionally with team members to achieve goals.

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
                        ●	Developed new and customization of existing features for the business-critical Single page application utilizing <b>ReactJs/Redux, Spring MVC, Hibernate </b> resulting in consistent deployment of 7 major product updates.
                        <br />
                        ●	Boosted code coverage to more than 90% by writing unit tests in <b>Jest and Enzyme</b> to save development efforts.
                        <br />
                        ●	Implemented <b>Fetch API</b> to consume REST APIs to maintain passenger and flight booking information.
                        <br />
                        ●	Collaborated with team to devise wireframes, mockups, and prototypes and restructured user experience design.
                        <br />
                        ●	Contributed in <b>continuous integration and continuous deployment</b> by making pull requests using GitHub and Jenkins reducing the average deployment time.
                        <br />
                        ●	Presented, collaborated and added value to the company and team through participation in <b>peer code reviews</b>, providing comments and suggestions.

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
                        ●	Designed reusable user interface in <b>ReactJS</b> and JavaScript ES6 and managed application state using <b>Redux-Thunk</b>.
                        <br />
                        ●	Consumed <b>REST APIs using Axios</b> to maintain user accounts, secured APIs through <b>authorization</b>.
                        <br />
                        ●	Troubleshoot & fixed bugs resulting in code readability increase and performance improvements. 
                        <br />
                        ●	Enhanced User satisfaction to 35% by improving usability and accessibility adhering with <b>Section 508 compliance</b>.
                        <br />
                        ●	Worked in <b>Agile</b> methodology by briefing in scrum calls, suggesting story tasks, and approximating efforts.
                        <br />
                        ●	Managed code revision using SourceTree and Bitbucket and used JIRA boards to manage sprints.
                        <br />
                        ●	Assessing project requirements using Agile & Scrum principles that helped prioritize activities and reduce ad hoc work requests by 35%.

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
                    created by <br/>Annu Elizabeth Abraham
                </div>
            </section>
            </Fragment>
        )
    }
}

export default Projects;