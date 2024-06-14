import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className='section_title'>About Me</h2>

            <div className='about_container grid'>
                <img src={Image} alt="" className="about_img" />

                <div className='about_data grid'>
                    <div className='about_info'>
                        <p className="about_description">Hello! I'm Aidan Harries, a 
                        recent Computer Engineering graduate from Kansas State University. 
                        I have a strong background in both software and hardware engineering, 
                        with a particular interest in AI and machine learning. I also dabble in 
                        website design and enjoy working with microcontroller-based systems.
                        Always eager to expand my skills and knowledge in the tech industry!</p>
                        <a href="/Aidan_Harries_CV.pdf" className="btn">Download CV</a>
                    </div>

                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Software</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage software"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Hardware</h3>
                                <span className="skills_number">80%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage hardware"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Web Design</h3>
                                <span className="skills_number">60%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage web-design"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About