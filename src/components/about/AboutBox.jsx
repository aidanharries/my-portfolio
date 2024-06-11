import React from 'react'

const AboutBox = () => {
    return (
        <div className="about_boxes grid">
            <div className="about_box">
                <i className="about_icon icon-fire"></i>

                <div>
                    <h3 className="about_title">198</h3>
                    <span className="about_subtitle">Projects completed</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-cup"></i>

                <div>
                    <h3 className="about_title">5670</h3>
                    <span className="about_subtitle">Cups of coffee</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-graduation"></i>

                <div>
                    <h3 className="about_title">52</h3>
                    <span className="about_subtitle">Courses completed</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-globe"></i>

                <div>
                    <h3 className="about_title">14</h3>
                    <span className="about_subtitle">Coding languages</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox