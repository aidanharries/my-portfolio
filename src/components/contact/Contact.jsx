import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9nn2nkk', 'template_jgb7fvl', e.target, 't8PuyMKqqDmu1Dckz')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again.");
            });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="contact container section" id='contact'>
            <h2 className="section_title">Contact Me</h2>

            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Let's work together!</h3>
                    <p className="contact_details">Interested? Send me an email. 👋</p>
                </div>

                <form onSubmit={handleSubmit} className="contact_form">
                    <div className="contact_form-group">
                        <div className="contact_form-div">
                            <input
                                type="text"
                                className="contact_form-input"
                                placeholder="Insert your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact_form-div">
                            <input
                                type="email"
                                className="contact_form-input"
                                placeholder="Insert your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="contact_form-div">
                        <input
                            type="text"
                            className="contact_form-input"
                            placeholder="Insert your subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            className="contact_form-input"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
