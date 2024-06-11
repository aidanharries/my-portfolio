import React from 'react';
import "./skills.css";
import Image1 from "../../assets/skill-1.svg";
import Image2 from "../../assets/skill-2.svg";
import Image3 from "../../assets/skill-3.svg";

const data = [
    {
        id: 1,
        image: Image1,
        title: "Software",
        description:
        "Developing and maintaining applications with experience in multiple programming languages, parallel computing, and machine learning.",
    },
    {
        id: 2,
        image: Image2,
        title: "Hardware",
        description:
        "Designing and troubleshooting electronic systems, with experience in microcontrollers, FPGA development, and hardware-software integration.",
    },
    {
        id: 3,
        image: Image3,
        title: "Web Design",
        description:
        "Creating responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and modern frameworks, focusing on effective design and user experience.",
    },
];

const Skills = () => {
    return <section className="skills container section" id='skills'>
        <h2 className="section_title">Skills</h2>

        <div className="skills_container grid">
            {data.map(({id, image, title, description}) => {
                return (
                    <div className="skills_card" key={id}>
                        <img src={image} alt="" className="skills_img" />

                        <h3 className="skills_title">{title}</h3>
                        <p className="skills_description">{description}</p>
                    </div>
                )
            })}
        </div>
    </section>
}

export default Skills